import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [type, setType] = useState("posts");
  const [count, setCount] = useState(0);
  useEffect(() => {
I
    fetch(`https://jsonplaceholder.typicode.com/${type}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (type == "posts") setPosts(data);
        else setComments(data);
      })
      .catch((error) => {
        console.error(error);
      });

 
  },[type]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h1>UseEffect Hook</h1>
      <button onClick={() => setType("posts")}>Posts</button>
      <button onClick={() => setType("comments")}>Comments</button>
      <h1>{type}</h1>
      <ul>
        {type === "posts"
          ? posts.map((post) => <li key={post.id}>{post.title}</li>)
          : comments.map((comment) => (
              <li key={comment.id}>{comment.email}</li>
            ))}
      </ul>
    </div>
  );
};

export default UseEffectHook;
