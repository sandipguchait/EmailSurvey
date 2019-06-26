import React, { Component } from 'react';
import { connect } from 'react-redux';


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
        return <li><a href="/api/logout">LogOut</a></li>
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">ESurvey</a>
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