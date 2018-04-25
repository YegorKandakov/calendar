import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import RemoveButtonPopup from './RemoveButtonPopup';

class Event extends React.Component {

  state = {
    showRemove: false,
    popupX: 0,
    popupY: 0
  }

  setPopupCoords = (e) => {
    let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState({
      popupX: e.clientX - rect.x,
      popupY: e.clientY - rect.y
    });
  }

  openPopup = () => {
    this.setState({showRemove: true});
  }

  closePopup = () => {
    this.setState({showRemove: false});
  }

  handleClick = (e) => {
    this.openPopup(e);
    this.setPopupCoords(e);
  }

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
      <div>
        <div style={eventStyle} onClick={this.handleClick}>{title}</div>
        <RemoveButtonPopup show={this.state.showRemove} onClose={this.closePopup} 
          popupX={this.state.popupX} popupY={this.state.popupY}/>
      </div>
      
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