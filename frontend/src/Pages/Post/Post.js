import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import useStyles from "./PostStyle.js";
import { likePost, deletePost } from "../../Actions/posts.js";
import Clap from "../../components/Clap/Clap.js";
import ClapOutline from "../../components/Clap/ClapOutline";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const user = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  // console.log("Post User: ", user);
  // console.log({post});

  const openEditPage = (e) => {
    // e.stopPropagation();

    navigate(`/posts/${post._id}/update`);
  };

  const openPost = () => navigate(`/posts/${post._id}`);

  const Likes = () => {
    if (post.likes.length > 0) {
      console.log("LIKED USER", user.result._id);
      return post.likes.find((like) => like === user?.result?._id) ? (
        <>
          <Clap />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} clap${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ClapOutline />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
  
    return (
      <>
        <ClapOutline /> &nbsp;Clap
      </>
    );
  };
  

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase className={classes.cardAction} onClick={openPost}>
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://i.pinimg.com/236x/73/44/b4/7344b44f95ade5a17ad4be7e3ec42938.jpg"
          }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        {user?.result?._id === post?.creator && (
          <div className={classes.overlay2}>
            <Link
              to={`/posts/${post._id}/update`}
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{ color: "white" }}
                size="small"
                onClick={(e) => {
                  setCurrentId(post._id);
                  openEditPage();
                }}
              >
                <MoreHorizIcon fontSize="default" />
              </Button>
            </Link>
          </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        {user?.result?._id === post?.creator && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
{/* to={`/posts/${post._id}`} */}
        <Button size="small" color="primary" component={Link} to={`/posts/${post._id}`} >
          <CommentRoundedIcon fontSize="small" /> &nbsp;Comment
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
