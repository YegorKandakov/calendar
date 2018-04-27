import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {allEventsSelector} from '../actions/event';

class ExportButton extends React.Component {

  onClick = () => {

    const minifiedEvents = this.props.events.map(event =>
      ({start: event.start, duration: event.duration, title: event.title}));
    let dataStr = JSON.stringify(minifiedEvents);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    let exportFileDefaultName = 'events.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  render() {
    return (
      <div>
          <Button primary onClick={this.onClick}>Export Events to JSON</Button>
      </div>
    );
  }
}

ExportButton.propTypes = {
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

export default connect(mapStateToProps)(ExportButton);