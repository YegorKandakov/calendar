import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../css/styles.css';
import {allEventsSelector} from '../actions/event';
import Event from './Event';

class Agenda extends React.Component {

  countEventsPerMinute = () => {
    // minutes between 8:00 and 17:00
    const minutesTotal = 60 * (17 - 8);
    const eventsPerMinute = {};
    const {events} = this.props;
    for(let minute = 0; minute < minutesTotal; minute += 1) {
      let counter = 0;
      events.forEach(event => {
        if (this.checkIfMinuteIsWithinEvent(event, minute)) {
          counter += 1;
          eventsPerMinute[minute] = counter;
        }
      });
    }
    return eventsPerMinute;
  }

  checkIfMinuteIsWithinEvent = (event, minute) =>
    (event.start <= minute) && ((event.start + event.duration) >= minute);
  
  render() {

    const eventsPerMinute = this.countEventsPerMinute();

    return (
<table className="table"><tbody><tr>

<td className="leftCol">
<div><div className="time big">8:00</div><div className="time small">8:30</div></div>
<div><div className="time big">9:00</div><div className="time small">9:30</div></div>
<div><div className="time big">10:00</div><div className="time small">10:30</div></div>
<div><div className="time big">11:00</div><div className="time small">11:30</div></div>
<div><div className="time big">12:00</div><div className="time small">12:30</div></div>
<div><div className="time big">13:00</div><div className="time small">13:30</div></div>
<div><div className="time big">14:00</div><div className="time small">14:30</div></div>
<div><div className="time big">15:00</div><div className="time small">15:30</div></div>
<div><div className="time big">16:00</div><div className="time small">16:30</div></div>
<div><div className="time big">17:00</div></div>
</td>

<td className="rightCol">
  {this.props.events.map((event, i) =>
    <Event key={i} event={event} eventsPerMinute={eventsPerMinute} />
  )}
</td></tr></tbody></table>
    );
  }
}

Agenda.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })).isRequired
};

function mapStateToProps(state) {
  return {
    events: allEventsSelector(state)
  }
}

export default connect(mapStateToProps)(Agenda);