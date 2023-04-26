import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import classes from './NewPost.module.css'

export default function NewPost({onAddPost}) { // example of props destructuring
  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor, setEnteredAuthor ] = useState('')

  
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value)
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault() // prevents the default function of the submit button which is submitting an http request to the server
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    }
    console.log(postData)
    onAddPost(postData)
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label 
            htmlFor='body'>Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
        </p>
        <p>
          <label 
          htmlFor='name'>Your Name</label>
          <input type="text" id="name" required onChange={authorChangeHandler}/>
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button" >
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  )
}