import React, { useState } from 'react';
import CreateBlog from './CreateBlog/CreateBlog';

const BlogForm = () => {
  const [currentId, setCurrentId] = useState(0);

  return (
    <CreateBlog currentId={currentId} setCurrentId={setCurrentId} />
  );
};

export default BlogForm;
