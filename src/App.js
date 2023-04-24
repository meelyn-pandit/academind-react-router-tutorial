import './App.css';
// import Post from './components/Post'
import PostsList from './components/PostsList'

function App() { // must wrap jsx in a single html component (div, main, etc.)
  return (
    <main>
      <PostsList/>
    </main>
  );
}

export default App;
