const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    if(!req.user) {
      return res.status(401).send({ error: "You Must Log In! "})
    }
    //Charging the card
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });
    // updating model on User -> req.user is from passport 
      req.user.credits += 5;
      const user = await req.user.save();

      res.send(user);
  });
};