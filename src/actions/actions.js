import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./actionTypes";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // Dummy API


// Fetch Users (READ)
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
  };
};