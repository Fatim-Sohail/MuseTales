import React from 'react'
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Header from '../components/Header/Header';
import Posts from './Posts/Posts';
import CreateBlog from './CreateBlog/CreateBlog';

const Home = () => {
  return (
    <div>
        <Header/>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts/>
                    </Grid>
                    {/* <AddStory/> */}
                    <CreateBlog/>
                </Grid>
            </Container>
        </Grow>
    </div>
  )
}

export default Home