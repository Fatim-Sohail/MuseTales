import React, { useEffect } from "react";
import { Routes, Route, Navigate  } from "react-router-dom";
import Posts from "./Pages/Post/Post";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home";
import BlogForm from "./Pages/BlogForm";
import PostDetails from "./Pages/PostDetails/PostDetails";
import Profile from "./components/Profile/Profile";
import UpdateBlog from "./Pages/UpdateBlog";

function App() {
  // const user = 
  // {() => (!user ? <Auth/> : <Navigate to='/posts' />)}
  return (
    <>
      <Routes>
        <Route path="/" component={() =><Navigate to='/posts' />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts/search" element={<Home />} />
        <Route path="/posts/:id" element={<UpdateBlog />} />
        <Route path="/posts/:id" element={<PostDetails />} /> 
        <Route path="/auth" element={<Auth />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/createblog" element={<BlogForm />} />        
      </Routes>
      {/* <Home/> */}
    </>
  );
}

export default App;
