import React from 'react';
import {Form, Button, Message} from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import ErrorMessage from '../messages/ErrorMessage';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e => 
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value}
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
      this.setState({loading: true});
      this.props
        .submit(this.state.data)
        .catch(err => this.setState({
          errors: err.response.data.errors,
          loading: false
        }));
    }
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) {
      errors.email = "Email can't be blank";
    }
    if (!data.password) {
      errors.password = "Password can't be blank";
    }
    return errors;
  }

  render() {
    const {data, errors, loading} = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && <Message negative>
        <Message.Header>Oops.. something went wrong</Message.Header>
        <p>{errors.global}</p>
        </Message>}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com" 
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email ? <ErrorMessage text={errors.email} /> : null}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password" 
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password ? <ErrorMessage text={errors.password} /> : null}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;