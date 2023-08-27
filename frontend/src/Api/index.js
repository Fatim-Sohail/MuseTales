import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' })
// const url = 'http://localhost:8080/posts';

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${localStorage.getItem('profile')? JSON.parse(localStorage.getItem('profile')).token : null}`;
        console.log("src api: ");
    }
    console.log("src api: ", (req.headers.authorization));
    return req;
})

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
console.log("fetch");
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const updateProfile = (formData) => API.patch('/user/updateProfile', formData);
// export const updateProfile = (id, formData) => API.post(`/user/profile/${id}`, formData);
