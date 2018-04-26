import {schema} from 'normalizr';

export const eventSchema = new schema.Entity(
  "events",
  {},
  {idAttribute: "_id"}
);

export const resultSchema = new schema.Entity(
  "results",
  {},
  {idAttribute: "data"}
);