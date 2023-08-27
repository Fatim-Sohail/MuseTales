import * as api from "../Api/index.js";
import { FETCH_ALL, FETCH_POST, START_LOADING, END_LOADING, SET_NUMBER_OF_PAGES , FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
import { AUTH } from "../constants/actionTypes";

// export const getPosts = (page) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });
//     const { data } = await api.fetchPosts(page);
//     dispatch({ type: FETCH_ALL, payload: data });
//     dispatch({ type: END_LOADING });
//     console.log("Data", data);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);
    
    const postsPerPage = 6; 
    const totalPosts = data.total; 
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);

    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: SET_NUMBER_OF_PAGES, payload: numberOfPages }); 
    dispatch({ type: END_LOADING });
    console.log("Data", data);
  } catch (error) {
    console.log(error);
  }
};


// issue here... data = all posts data... search not working

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    console.log("Search data:", data);
  } catch (error) {
    console.log(error);
  }
};

export const createPosts = (post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log("Like user", user)

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
