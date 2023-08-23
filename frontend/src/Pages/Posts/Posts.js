import React from "react";
import Post from "../Post/Post";
import useStyles from './styles';
import './style.css';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((posts) => (
          <Grid key={posts._id} item xs={12} sm={6} md={6}>
            <Post post={posts} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
};

export default Posts;
