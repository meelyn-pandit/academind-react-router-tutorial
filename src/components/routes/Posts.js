import { Outlet } from 'react-router-dom'
import classes from '../../App.css';
// import Post from './components/Post'
import PostsList from '../PostsList'

export default function Posts() { // must wrap jsx in a single html component (div, main, etc.)

  return (
    <>
    <Outlet />
      <main className={classes.App}>
      <PostsList />
      </main>
    </>
  );
}