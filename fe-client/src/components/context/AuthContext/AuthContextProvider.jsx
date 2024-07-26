import PropTypes from "prop-types";
import authContext from "./authContext";
import { useReducer } from "react";

// Initial state
const INITIAL_STATE = {
  userAuth: null,
  error: null,
  loading: null,
  profle: null,
};

// Auth Reducer
const reducer = (state, action) => {
  return {};
};
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <authContext.Provider value={{ isLogin: false, add: () => {} }}>
      {children}
    </authContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthContextProvider;
