import React from 'react'
import { Container, Grow, Grid} from '@material-ui/core';
import Header from '../components/Header/Header';
import Posts from './Posts/Posts';
import CreateBlog from './CreateBlog/CreateBlog';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getPosts } from '../Actions/posts';


const Home = () => {
    const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
//   const classes = useStyles();

  useEffect (() => {
    dispatch(getPosts());
  }, [currentId, dispatch])
  return (
    <div>
        <Header/>
        <Grow in>
            <Container>
                <Grid container justify="space-around" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={11} alignItems="center">
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <CreateBlog currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Container>
        </Grow>
    </div>
  )
}

export default Home