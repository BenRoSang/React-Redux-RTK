import React from 'react';
import './App.css';
import PostList from './features/posts/PostList';
import PostAdded from './features/posts/PostAdded';
import Layout from './components/Layout';
import { Routes, Route, Navigate} from 'react-router-dom';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostView from './features/posts/EditPostView';
import UserList from './features/users/UserList';
import UserPage from './features/users/UserPage';



function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />} >

          <Route index element={<PostList />} />
          <Route path="post">
            <Route index element={<PostAdded/>} />
            <Route path=":postId" element={ <SinglePostPage />} />
            <Route path="edit/:postId" element={ <EditPostView />} />
          </Route>
          <Route path='user'> 
            <Route index element={<UserList />} />
            <Route path=":userId" element={<UserPage />} />
          </Route>
          <Route path="*" element={ <Navigate to="/" replace />} />
          
        </Route>
      </Routes>
  );
}

export default App;
