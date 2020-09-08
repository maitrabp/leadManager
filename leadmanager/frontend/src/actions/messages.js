import { CREATE_MESSAGES, GET_ERRORS } from "./types";

//CREATE_MESSAGE
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGES,
    payload: msg,
  };
};

//REPORT_ERRORS
export const reportErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status },
  };
};
