import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class AddEventForm extends React.Component {
  state = {
    data: {
      start: '',
      duration: '',
      title: ''
    }
  }
  
  onChange = e => {
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value}
    });
  }

  onSubmit = () => {
    this.convertStartStringToNumber(this.state.data.start);
    this.props.submit(this.state.data);
  }

  // convert time to number of minutes with starting point 8:00 AM
  convertStartStringToNumber = (time) => {
    if (typeof time === 'string') {
      let timeArr = time.toString().split(":");
      let timeNum = parseInt(timeArr[0], 10) * 60 + parseInt(timeArr[1], 10) - 8 * 60;
      // eslint-disable-next-line
      this.state.data.start = timeNum;
      this.setState({data: this.state.data});
    }
  }

  render() {
    const {data} = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Start time</label>
          <input
            id="start"
            name="start"
            type="time"
            value={data.start}
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Duration (min)</label>
          <input
            id="duration"
            name="duration"
            type="number"
            value={data.duration}
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <input
            id="title"
            name="title"
            value={data.title}
            onChange={this.onChange}
          />
        </Form.Field>
        <Button primary>Add Event</Button>
      </Form>
    );
  }
}

AddEventForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default AddEventForm;