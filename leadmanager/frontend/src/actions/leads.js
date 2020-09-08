import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import { createMessage, reportErrors } from "./messages";
import { tokenConfig } from "./auth";
// GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(reportErrors(err.response.data, err.response.status))
    );
};

// DELETE LEADS
export const DeleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ leadDeleted: "Lead deleted successfully" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id, //send id as payload
      });
    })
    .catch((err) => console.log(err));
};

// ADD LEAD
export const addLead = (lead) => (dispatch, getState) => {
  axios
    .post("/api/leads/", lead, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ leadAdded: "Lead added successfully" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(reportErrors(err.response.data, err.response.status))
    );
};
