import { useState, useEffect } from 'react'

import Post from './Post'
import classes from './PostsList.module.css'

export default function PostsList() { 
  const [posts, setPosts] = useState([]) // used for dynamic rendering of Posts component
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json()
      setPosts(resData.posts)
      setIsFetching(false)
    }

    fetchPosts()
  }, []) // sets up asynchronous function array at the end of the function specifies the dependencies of effect function
  // dependency - variable or function defined in react components

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST', // type of request
      body: JSON.stringify(postData), // data that we are sending
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // setPosts([postData, ...posts]) //...spread operator, used to add to existing array, in this case, posts
    // updating arrays is not ideal because you are updating state. if new state depends on old state, use a function instead
    setPosts((existingPosts) => [postData, ...existingPosts])
  }

  return(
    <>
    {!isFetching && posts.length > 0 && (
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key= {post.body} author={post.author} body={post.body} />
          ))}
      </ul>
    )}
    {!isFetching && posts.length === 0 && (
    <div style={{textAlign: 'center', color: 'black'}}>
      <h2>There are no posts yet.</h2>
      <p>Start adding some!</p>
      </div>
      )}
      {isFetching && 
      <div style={{ textAlign: 'center', color: 'black'}}>
        <p>Loading posts...</p>
      </div>}
    </>
  )
}