import { Link, Form, redirect } from 'react-router-dom'
import Modal from '../Modal'
import classes from './NewPost.module.css'

export default function NewPost({onAddPost}) { // example of props destructuring

  return (
    <Modal>
      <Form method='post' className={classes.form} >
        <p>
          <label 
            htmlFor='body'>Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label 
          htmlFor='name'>Your Name</label>
          <input type="text" id="name" name="author" required o/>
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button" >
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export async function action({request}) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData); //{ body: '...', author: '...'}
  await fetch('http://localhost:8080/posts', {
      method: 'POST', // type of request
      body: JSON.stringify(postData), // data that we are sending
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return redirect('/')
}