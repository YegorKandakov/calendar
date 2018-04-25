import axios from 'axios';

export default {
  user: {
    login: (credentials) => 
      axios.post('/api/auth', {credentials})
      .then(res => res.data.user),
    signup: user =>
      axios.post("/api/users", {user})
      .then(res => res.data.user),
    confirm: token =>
      axios.post("/api/auth/confirmation", {token})
      .then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post("/api/auth/reset_password_request", {email}),
    validateToken: token =>
      axios.post("/api/auth/validate_token", {token}),
    resetPassword: data => axios.post('/api/auth/reset_password', {data}),
  },
  event: {
    addEvent: event => 
      axios.post("/api/event/add", {event}).then(res => res.data.event),
    fetchAll: () => 
      axios.get("/api/event").then(res => res.data.events)
  }
};