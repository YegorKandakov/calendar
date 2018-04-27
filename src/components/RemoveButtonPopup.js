import React from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {removeEvent, allEventsSelector} from '../actions/event';

class RemoveButtonPopup extends React.Component {

  onClick = () => {
    this.props.removeEvent(this.props.id);
    this.props.onClose();
    this.props.events.filter((event) => event._id !== this.props.id);
  }

  render() {
    const popupStyle = {
      position: 'absolute',
      left: this.props.popupX,
      top: this.props.popupY
    }

    if(!this.props.show) {
      return null;
    }

    return (
        <div style={popupStyle}>
          <Button primary onClick={this.onClick}>Remove</Button>
        </div>
    );
  }
}

RemoveButtonPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  popupX: PropTypes.number.isRequired,
  popupY: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  removeEvent: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })).isRequired
}

function mapStateToProps(state) {
  return {
    events: allEventsSelector(state)
  }
}

export default connect(mapStateToProps, {removeEvent})(RemoveButtonPopup);