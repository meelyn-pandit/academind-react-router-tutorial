import { useState } from 'react'
import classes from './NewPost.module.css'

export default function NewPost({onCancel, onAddPost}) { // example of props destructuring
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
    onCancel()
  }

  return (
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
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  )
}