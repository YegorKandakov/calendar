import React from 'react';
import PropTypes from 'prop-types';

class Event extends React.Component {
  
  render() {

    const {title, start, duration} = this.props.event

    const eventStyle = {
      position: 'absolute',
      padding: '4px',
      width: '200px',
      height: duration * 2,
      top: start * 2,
      background: '#E2ECF5',
      fontSize: '14px',
      borderLeft: '2px solid #6E9ECF',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
    
    return (
      <div style={eventStyle}>{title}</div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  }).isRequired
}

export default Event;