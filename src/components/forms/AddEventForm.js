import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ErrorMessage from '../messages/ErrorMessage';

class AddEventForm extends React.Component {
  state = {
    data: {
      start: '',
      duration: '',
      title: ''
    },
    errors: {}
  }
  
  onChange = e => {
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value}
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
      this.setState({data: this.state.data});
      this.props.submit(this.state.data);
    }
  }

  // check if event starts and ends between 8:00 and 17:00
  validate = (data) => {
    const errors = {};
    // eslint-disable-next-line
    this.state.data.start = this.convertStartStringToNumber(data.start);
    if (this.state.data.start < 0 || this.state.data.start >= 60 * (17 - 8)) {
      errors.start = "Event should start between 8 AM to 5 PM"
    }
    let eventEndTime = (parseInt(this.state.data.duration, 10) + this.state.data.start);
    if (eventEndTime >= 60 * (17 - 8)) {
      errors.duration = "Event should end before 5 PM"
    }

    return errors;
  }

  // convert time to number of minutes with starting point 8:00 AM
  convertStartStringToNumber = (time) => {
    let timeArr = time.toString().split(":");
    let timeNum = parseInt(timeArr[0], 10) * 60 + parseInt(timeArr[1], 10) - 8 * 60;
    return timeNum;
  }

  render() {
    const {data, errors} = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.start}>
          <label>Start time</label>
          <input
            id="start"
            name="start"
            type="time"
            value={data.start}
            onChange={this.onChange}
          />
          {errors.start && <ErrorMessage text={errors.start} />}
        </Form.Field>
        <Form.Field error={!!errors.duration}>
          <label>Duration (min)</label>
          <input
            id="duration"
            name="duration"
            type="number"
            value={data.duration}
            onChange={this.onChange}
          />
          {errors.duration && <ErrorMessage text={errors.duration} />}
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