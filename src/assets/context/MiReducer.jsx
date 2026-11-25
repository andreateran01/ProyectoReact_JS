import type from "./type.js";

const MiReducer = (state = {}, action) => {
  switch (action.type) {
    case type.login: {
      return {
        logged: true,
        usuario: action.payload
      };
    }
    case type.logout: {
      return {
        logged: false,
        usuario: null
      };
    }
    default: {
      return state;
    }
  }
};

export default MiReducer;