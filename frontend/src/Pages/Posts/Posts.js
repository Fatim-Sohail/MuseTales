import React from "react";
import Post from "../Post/Post";
import useStyles from './styles';
import './style.css';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
  const {posts, loading} = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts?.length && !loading) return 'No Posts yet';
  return (
    loading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((posts) => (
          <Grid key={posts._id}  item xs={10} sm={6} md={4} lg={6}>
            <Post post={posts} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
};

export default Posts;
