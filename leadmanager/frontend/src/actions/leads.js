import axios from "axios";
import { GET_LEADS, DELETE_LEAD } from "./types";

// GET LEADS
export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE LEADS
export const DeleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_LEAD,
        payload: id, //send id as payload
      });
    })
    .catch((err) => console.log(err));
};
