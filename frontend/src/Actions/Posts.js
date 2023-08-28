import * as api from "../Api/index.js";
import { FETCH_ALL, FETCH_POST, FETCH_LIKED_POSTS,  START_LOADING, END_LOADING, SET_NUMBER_OF_PAGES , FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
import { AUTH } from "../constants/actionTypes";

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });
    console.log("Data", data);
  } catch (error) {
    console.log(error);
  }
};

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

export const createPosts = (post, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);
    console.log("created post", post);
    // navigate(`./${data._id}`);
    navigate('/posts');
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    console.log("updated post", post);

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

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);
    console.log("comment data", data);
  } catch (error) {
    console.log(error.message);
  };
};

export const fetchLikedPosts = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchLikedPosts(id); 
    dispatch({ type: FETCH_LIKED_POSTS, payload: data });
  } catch (error) {
    console.error("Error fetching liked posts:", error);
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
