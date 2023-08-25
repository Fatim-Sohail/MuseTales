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
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/home" element={<Home />} /> */}
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/createblog" element={<CreateBlog />} />
        
      </Routes>
      {/* <Home/> */}
    </>
  );
}

export default App;
