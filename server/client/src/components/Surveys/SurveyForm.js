import React, { Component } from 'react';
import SurveyField from './SurveyField';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../Utils/validateEmail';

export const FIELDS = [
  { label: 'Survey Title', name: 'title'},
  { label: 'Subject Line', name: 'subject'},
  { label: 'Email Body', name: 'body'},
  { label: 'Recipient List', name: 'recipients'}
];

//Shows a Form for a User to add Input
class SurveyForm extends Component {

  renderFields() {
    return FIELDS.map(({ label , name }, i) => (
      <Field 
        key={i}
        type="text"
        label={label}
        name={name}
        component={SurveyField}
      />
    ))
  }

  render() {
    const { handleSubmit, onSurveySubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">chevron_right</i>
          </button>
        </form>
      </div>
    );
  }
};

//validating fields with values provided by reduxform
function validate(values) {
  const errors = {};
  //checking Email validation
  errors.recipients = validateEmails(values.recipients || '')
  
  if(!values.title) {
    errors.title = "You must Provide a title";
  }
  if(!values.subject) {
    errors.subject = "You must Provide a subject"
  }
  if(!values.body) {  
    errors.body = "You must Provide a body"
  }
  if(!values.recipients) {
    errors.recipients = 'You must provide an email'
  } 
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);