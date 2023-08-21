import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Posts from "./Pages/Post/Post";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home";
import { getPosts } from './Actions/posts';
import { useDispatch } from 'react-redux';


function App() {

  return (
    <>
      <Home/>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/posts" element={<Posts />} />
        
      </Routes>
    </>
  );
}

export default App;
