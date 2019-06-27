import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component {

  renderContent = () => {
    switch(this.props.auth.currentUser) {
      case null:
        return ;
      case false: 
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        )
      default: 
        return (
          <>
            <li><Payments/></li>
            <li style={{ margin: "0 10px"}}>
              <strong>Credits: {this.props.auth.currentUser.credits}</strong>
            </li>
            <li><a href="/api/logout">LogOut</a></li>
          </>
        )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={ this.props.auth.currentUser ? '/surveys' : '/'} className="left brand-logo">ESurvey</Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header);