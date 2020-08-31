import { CREATE_MESSAGES } from "./types";

//CREATE_MESSAGE
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGES,
    payload: msg,
  };
};
