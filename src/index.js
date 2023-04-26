import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorPage from './components/ErrorPage'
import Posts, { loader as postsLoader }from './components/routes/Posts'
import NewPost, { action as newPostAction} from './components/routes/NewPost'
import PostDetails, { loader as postDetailsLoader } from './components/routes/PostDetails'
import RootLayout from './components/routes/RootLayout'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />, 
    errorElement: <ErrorPage />,
    children: [ // applies same layout to all children routes/components
      { 
        path: '/', 
        element: <Posts />, 
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader}]
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
