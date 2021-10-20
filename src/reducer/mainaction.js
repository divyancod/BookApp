import { SEARCH_BOOK, SEARCH_BOOKS, SET_LOADING } from "./action.types";
import Axios from "axios";

export const fetchBooks = (query) => {
  return (dispatch) => {
    Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&maxResults=20&startIndex=0`
    )
      .then((response) => {
        dispatch({
          type: SEARCH_BOOKS,
          payload: response.data.items,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const fetchBook = (id) => {
  return (dispatch) => {
    Axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => {
        dispatch({
          type: SEARCH_BOOK,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const setLoading = () => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
  };
};
