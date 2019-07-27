import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

//SurveyNew shows SurveyForm and SurveyFormReview
class SurveyNew extends Component {
  state = {
    showReview: false
  }

  render() {
    const { showReview } = this.state;
    return (
      <div>
        {showReview ? 
          <SurveyFormReview onCancel={() => this.setState({ showReview: false })}/> 
          : 
          <SurveyForm onSurveySubmit={() => this.setState({showReview: true})} />
        }
      </div>
    );
  }
}

//using reduxForm here to clear out the inputs on componentunMount
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
