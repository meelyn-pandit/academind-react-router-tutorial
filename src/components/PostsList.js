import Post from './Post'
import classes from './PostsList.module.css'

export default function PostsList(props) {
  return(
    <ul>
      <Post
        author="Meelyn"
        body="React.js is awesome!"
      />
      <Post
        author="Caaminee"
        body="You need to come to NYC to have a life"
        />
    </ul>
  )
}