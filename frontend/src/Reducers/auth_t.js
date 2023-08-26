// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
// import { AUTH, LOGOUT } from '../constants/actionTypes';

import { AUTH_T } from "../constants/actionTypes";

const auth_test = (posts = [], action) => {
    switch (action.type) {
      case AUTH_T:
        console.log("AUTH_T");
        return action.payload; 
    //   case LIKE:
    //     return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    //   case CREATE:
    //     return [...posts, action.payload];
    //   case UPDATE:
    //     return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    //   case DELETE:
    //     // console.log("ID_ :" ,post._id);
    //     return posts.filter((post) => post._id !== action.payload);
      default:
        return posts;
    }
  };

  
export default auth_test;
