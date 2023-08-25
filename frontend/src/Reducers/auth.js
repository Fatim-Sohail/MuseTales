import * as actionType from '../constants/actionTypes';

const auth = (action) => {
  console.log("AUTH Reducers");
  switch (action.type) {
    case actionType.AUTH:
      console.log("Action payload", action.payload);
      localStorage.setItem('profile', JSON.stringify({...action.payload.data}));
      const storedData = localStorage.getItem('profile');
      console.log("My Data.....", storedData);

      return(action);
      // return {...state, authData: action?.data};

    case actionType.LOGOUT:
      localStorage.clear();
      // return {...state, authData: null};

    default:
      // return state;
  }
};

export default auth;
