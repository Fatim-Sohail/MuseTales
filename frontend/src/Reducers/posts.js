import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, FETCH_LIKED_POSTS, SET_NUMBER_OF_PAGES , START_LOADING, END_LOADING, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";

export default  (state = {loading: true, posts: [], numberOfPages: 1, likedPosts: [] }, action) => {
    switch (action.type) {

      case START_LOADING:
        return { ...state, loading: true };
      
      case END_LOADING:
        return { ...state, loading: false }  

      case FETCH_ALL:
        return { ...state, posts: action.payload.data };

      case SET_NUMBER_OF_PAGES:
        return { ...state, numberOfPages: action.payload };

      // case FETCH_ALL:
      //   console.log("Fetch ALL POSTS");
        // return { ...state, posts: action.payload.data, currentPage: action.payload.currentPage, numberofPages: action.payload.numberOfPages};

      case FETCH_BY_SEARCH:
        console.log("Fetch ALL POSTS BY SEARCH");
        return { ...state, posts: action.payload.data };

      case FETCH_POST:
        return { ...state, posts: action.payload.post };

      case FETCH_LIKED_POSTS:
        return {...state, likedPosts: action.payload.data };

      case LIKE:
        return { ... state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};

      case CREATE:
        return {...state, posts: [...state.posts, action.payload] };

      case UPDATE:
        return { ... state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};

      case DELETE:
        return { ... state, posts: state.posts.filter((post) => post._id !== action.payload)};

      default:
        return state;
    }
  };
