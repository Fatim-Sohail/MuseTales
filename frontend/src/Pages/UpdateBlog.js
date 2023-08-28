import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from '../Pages/CreateBlog/CreateBlogStyle'; 
import { updatePost } from '../Actions/posts';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const { id } = useParams();

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => state.posts.posts.find((message) => message._id === id));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
    const navigate = useNavigate();

    useEffect(() => {
        if (post) setPostData(post);
    }, [id, post]);

    const clear = () => {
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(updatePost(id, { ...postData, name: user?.result?.name }));

        clear();
        navigate('/posts');
    };

    return (
        <div className={classes.background}>
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6" className={classes.title}>Updating{`"${post?.title}"`}</Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
            {/* <CKEditor editor={ClassicEditor} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></CKEditor> */}
            <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
            <TextField name="tags" variant="outlined" label="Tags (comma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Update </Button>
            <Button className={classes.button} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
        </Paper>
        </div>
    )
}

export default UpdateBlog;