import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './components/routes/RootLayout'
import Posts from './components/routes/Posts'
import NewPost from './components/routes/NewPost'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />, 
    children: [ // applies same layout to all children routes/components
      { 
        path: '/', 
        element: <Posts />, 
        children: [{ path: '/create-post', element: <NewPost />}]
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
