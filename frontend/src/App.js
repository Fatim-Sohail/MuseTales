import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Auth from "./Pages/Auth/Auth";
import { getPosts } from './Actions/Posts';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <>
      <Header />
      <h1>APP</h1>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
