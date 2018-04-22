import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import {connect} from 'react-redux';
import * as actions from '../../actions/auth';
import AddEventForm from '../forms/AddEventForm';
import {addEvent} from '../../actions/event';

class CalendarPage extends React.Component {

  submit = data => {
    console.log(data);
    this.props.addEvent(data);
  }
  render() {
    const {isAuthenticated, logout} = this.props;

    return (
      <div>
        <h1>Calendar Page</h1>
        { 
          isAuthenticated 
          ? <div><button onClick={() => logout()}>Logout</button></div>
          : <div><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></div>
        }
        <br/>
        {
          isAuthenticated && <AddEventForm submit={this.submit} />
        }
      </div>
    )
    
  }

}

CalendarPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, {logout: actions.logout, addEvent})(CalendarPage);