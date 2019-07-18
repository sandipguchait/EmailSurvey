//Middlewares
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
//Survey Model
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
// Mailer
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplates');


module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => {
        return { email }
      }),
      _user: req.user.id,
      dateSent: Date.now()
    });
    //Send an Email
    const mailer = new Mailer(survey,surveyTemplate(survey));
   });
};