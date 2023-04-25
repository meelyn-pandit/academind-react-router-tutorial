import { useState } from 'react'
import classes from './App.css';
// import Post from './components/Post'
import PostsList from './components/PostsList'
import MainHeader from './components/MainHeader'

function App() { // must wrap jsx in a single html component (div, main, etc.)
  const [ modalIsVisible, setModalIsVisible ] = useState(false)

  function showModalHandler() {
    setModalIsVisible(true)
  }
  function hideModalHandler() {
    setModalIsVisible(false)
  }
  

  return (
    <>
    <MainHeader className={classes.App} onCreatePost={showModalHandler}/>
      <main className={classes.App}>
      <PostsList isPosting={modalIsVisible}
        onStopPosting={hideModalHandler}/>
    </main>
    </>
    
  );
}

export default App;
