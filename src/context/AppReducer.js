import {
  TOGGLE_SIDEBAR,
  REVERSE_LOADING,
  EMPTY_ERR,
  INVALID_USER_ERR,
  CLEAR_TEXT,
  ADD_CARGO_DETAILS_ERROR
} from "./actions";

export const AppReducer = (state, action) => {

  if (action.type === EMPTY_ERR) {
    return {
      ...state,
      showAlert: true,
      alertText: "Provide all details",
      alertType: "danger",
    };
  }

  if (action.type === REVERSE_LOADING) {
    return {
      ...state,
      isloading:false
    };
  }

  if (action.type === INVALID_USER_ERR) {
    return {
      ...state,
      showAlert: true,
      alertText: "Please provide a valid username",
      alertType: "danger",
    };
  }

  if (action.type === CLEAR_TEXT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertType: "",
    };
  }

  //This toggles the state
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      isSideBarReduce: !state.isSideBarReduce,
    };
  }

  // if (action.type === SET_LOADER) {
  //   return {
  //     ...state,
  //     isloading: true,
  //   };
  // }

  if (action.type === ADD_CARGO_DETAILS_ERROR) {
    return {
      ...state,
      alertText: action.payload.msg,
    };
  }

  throw new Error(`${action.type} does not exist`);
};
