import { useState } from 'react'

import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import classes from './PostsList.module.css'

export default function PostsList({isPosting, onStopPosting}) { // example of destructured props
  const [posts, setPosts] = useState([]) // used for dynamic rendering of Posts component

  function addPostHandler(postData) {
    // setPosts([postData, ...posts]) //...spread operator, used to add to existing array, in this case, posts
    // updating arrays is not ideal because you are updating state. if new state depends on old state, use a function instead
    setPosts((existingPosts) => [postData, ...existingPosts])
  }

  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (<Modal onClose={hideModalHandler}>
  //     <NewPost 
  //       onBodyChange={bodyChangeHandler}
  //       onAuthorChange={authorChangeHandler}
  //     />
  //   </Modal>
  //   )
  // }

  return(
    <>
    {isPosting && (  
      <Modal onClose={onStopPosting}>
        <NewPost 
          // onBodyChange={bodyChangeHandler} 
          // onAuthorChange={authorChangeHandler}
          onCancel={onStopPosting}
          onAddPost={addPostHandler}
        />
     </Modal>
    )}
    {posts.length > 0 && (
      <ul className={classes.posts}>
        {posts.map((post) => <Post key= {post.body} author={post.author} body={post.body} />)} {/*Turning elements in posts array into Post component */}
      {/* <Post author={enteredAuthor} body={enteredBody}/> */}
      {/* <Post author="Meelyn" body="Learning React JS is fun!"/> */}
      </ul>
    )}
    {posts.length === 0 && <div style={{textAlign: 'center', color: 'black'}}>
      <h2>There are no posts yet.</h2>
      <p>Start adding some!</p>
      </div>}
    </>
  )
}