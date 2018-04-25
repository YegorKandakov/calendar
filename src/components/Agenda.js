import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../css/styles.css';
import {allEventsSelector} from '../actions/event';
import Event from './Event';

class Agenda extends React.Component {
  
  render() {
    console.log(this.props.events);
    return (
      <table className="table">
      <tbody>
      <tr>

<td className="leftCol">
<div>
<div className="time big">
  8:00
</div>
<div className="time small">
  8:30
</div>
</div>

<div>
<div className="time big" >
  9:00
</div>
<div className="time small">
  9:30
</div>
</div></td>

<td className="rightCol">

  {this.props.events.map((event, i) =>
    <Event key={i} event={event} />
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