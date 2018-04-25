import {normalize} from "normalizr";
import { createSelector } from "reselect";
import api from "../api";
import { EVENT_CREATED, EVENTS_FETCHED } from "../types";
import {eventSchema} from "../schemas";

const eventAdded = (data) => ({
  type: EVENT_CREATED,
  data
})

export const addEvent = (event) => (dispatch) =>
  api.event.addEvent(event)
  .then(eventCreated => dispatch(eventAdded(normalize(eventCreated, eventSchema))));

// data.entities.events
const eventsFetched = (data) => ({
  type: EVENTS_FETCHED,
  data
})

export const fetchEvents = () => (dispatch) =>
  api.event.fetchAll()
  .then(events => dispatch(eventsFetched(normalize(events, [eventSchema]))));


  // SELECTORS
export const eventsSelector = state => state.event;

export const allEventsSelector = createSelector(eventsSelector, eventsHash =>
  Object.values(eventsHash)
);