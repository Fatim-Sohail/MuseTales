import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLikedPosts } from "../../Api";
import Post from "../../Pages/Post/Post";

const LikedPosts = () => {
  const dispatch = useDispatch();
  const user = localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : null;
  console.log("user", user);
  const likedPosts = useSelector((state) => state.posts.likedPosts);

  useEffect(() => {
    dispatch(fetchLikedPosts(user?.result?._id)); 
  }, [dispatch, user]);

  return (
    <div>
      <h2>Liked Posts</h2>
      {likedPosts ? (
        likedPosts.length === 0 ? (
          <p>No liked posts yet.</p>
        ) : (
          likedPosts.map((post) => (
            <Post key={post._id} post={post} />
          ))
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LikedPosts;
