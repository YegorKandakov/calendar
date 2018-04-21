import api from "../api";

export const addEvent = (event) => () =>
  api.event.addEvent(event);