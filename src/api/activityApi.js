import API from "./api";

export const fetchActivities = () => API.get("/activities");

export const createActivity = (data) =>
  API.post("/activities", data);

export const deleteActivity = (id) =>
  API.delete(`/activities/${id}`);
