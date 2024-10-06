// how to make a post request
// to create new data, a POST request.

// according to the api, this needs to be performed on the /poss endpoint. if you look a the code below you'll see that there a button  to create a post

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: 'hello world!',
        body: 'this is a new post',
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  if (!post) return 'NO post';
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>create Post</button>
    </div>
  );
}
