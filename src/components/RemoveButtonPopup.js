import React from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class RemoveButtonPopup extends React.Component {

  onClick = () => {
    this.props.onClose();
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
  popupY: PropTypes.number.isRequired
}

export default RemoveButtonPopup;