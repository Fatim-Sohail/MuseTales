import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home";
import { getPosts } from './Actions/posts';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <>
      <Home/>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
