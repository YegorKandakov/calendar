import {normalize} from "normalizr";
import { createSelector } from "reselect";
import api from "../api";
import { EVENT_CREATED, EVENTS_FETCHED, EVENT_REMOVED } from "../types";
import {eventSchema, resultSchema} from "../schemas";

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

const eventRemoved = (data) => ({
  type: EVENT_REMOVED,
  data
})

export const removeEvent = (id) => (dispatch) => {
  api.event.removeEvent(id)
  .then(result => {
    dispatch(eventRemoved(normalize(result, resultSchema)))});
}
  

  // SELECTORS
export const eventsSelector = state => state.event;

export const allEventsSelector = createSelector(eventsSelector, eventsHash =>
  Object.values(eventsHash)
);