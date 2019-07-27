import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import DashBoard from './Dashboard';
import SurveyNew from './Surveys/SurveyNew';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  };

  render(){
    return (
      <div className="container">
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={DashBoard} />
                <Route exact path="/surveys/new" component={SurveyNew} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, { fetchUser })(App);