import React from 'react';
import PostTable from './PostTable';
import './App.css';
import LoginButton from './LoginButton';

function App() {
  return (
    <div className="App">
      <LoginButton />
      <h1>Post List</h1>
      <PostTable />
    </div>
  );
}

export default App;
