import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import {connect} from 'react-redux';
import * as actions from '../../actions/auth';

const CalendarPage = ({isAuthenticated, logout}) => (
  <div>
    <h1>Calendar Page</h1>
    { 
      isAuthenticated 
      ? <button onClick={() => logout()}>Logout</button> 
      : <div><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></div>
    }
  </div>
);

CalendarPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, {logout: actions.logout})(CalendarPage);