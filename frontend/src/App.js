import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./Pages/Post/Post";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import CreateBlog from "./Pages/CreateBlog/CreateBlog";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/createblog" element={<CreateBlog />} />
        
      </Routes>
      <Home/>
    </>
  );
}

export default App;
