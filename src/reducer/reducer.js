import { SEARCH_BOOK, SEARCH_BOOKS, SET_LOADING } from "./action.types";
const initalState = {
  books: [],
  book: {},
  isLoading: false,
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return { ...state, books: action.payload, isLoading: false };
    case SEARCH_BOOK:
      return { ...state, book: action.payload, isLoading: false };
    case SET_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
export default reducer;
