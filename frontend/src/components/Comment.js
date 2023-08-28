import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { commentPost } from '../Actions/posts';


const Comment = ({ post }) => {
    const [comments, setComments] = useState([1, 2, 3, 4]);
    const [comment, setComment] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : null;

    console.log('comment', comments);
    console.log('user', user);
    console.log('post id', post);

    const handleClick = () => {
        const finalComment = `${user.result.name}: ${comment}`;
        dispatch(commentPost(finalComment, post._id));
    };
  return (
    <>
        <div className={classes.commentsOuterContainer}>
                <div className={classes.InnerContainer}>
                    <Typography gutterBottom variant="h5">Comments</Typography>
                    {comments.map((c, i) => (
                        <Typography variant="subtitle1" key={i} gutterBottom>
                            Comment {i}
                        </Typography>
                    ))}
                </div>
                {user?.result?.name &&  (
                    <div style={{width: '70%'}}>
                        <Typography gutterBottom variant='h5'>Write your Comment Here!</Typography>
                        <TextField fullWidth rows={5} variant="outlined" label="Comment..." multiline value={comment} onChange={(e) => setComment(e.target.value)}/>
                        <Button style={{marginTop: '12px'}} fullWidth disabled={!comment} variant="contained" color='secondary' onClick={handleClick}>
                            Post
                        </Button>
                    </div>
                )}
        </div>
    </>
  )
}

export default Comment