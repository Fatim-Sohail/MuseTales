import * as api from '../Api';

// api.fetchPosts;

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch ({ type: 'FETCH_ALL', payload: [] })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPosts = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}