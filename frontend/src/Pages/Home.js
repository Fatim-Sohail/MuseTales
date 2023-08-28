import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "./Posts/Posts";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPosts } from "../Actions/posts";
import Header from "../components/Header/Header.js";
import Paginate from "../components/Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(searchQuery);

  return (
    <div>
      <Header />
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            container
            justify="space-around"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={10} alignItems="center">
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
          {/* {(!searchQuery && !tags.length) && ( */}
            <Paginate page={page} />
          {/* )} */}
        </Container>
      </Grow>
    </div>
  );
};

export default Home;
