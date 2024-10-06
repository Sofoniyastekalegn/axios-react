// how to make a get Request 

// to fetch data or retrieve it, make a Get request.

// first you are going to make a request for individual posts  if you look at the endpoint you are getting the first /posts endpoint:


import axios from "axios";

import React from "react";
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);

    });

  }, []);

  if (!post) return null;
  return (
    <div>
      <h1> {post.title}</h1>

      <p> {post.body}</p>
  );
}