// how to make a put request 

//To update a given resource , make a put request 
// in this case you'll update the first post.
//To do so, you'll once again create a button. But this time, the button will call a function to update a post:

import axios from "axios";

import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App({
  const [post, setPost] = React.useSatet(null);

  React.useEffect(( => {
    axios.get(`${baseURL}/1`).then((reponse) => {
      setPost(response.data);
    });

  }, [])
  
  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}