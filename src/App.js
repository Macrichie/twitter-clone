import React from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import Sidebar from './components/sidebar/Sidebar';
import Widget from './components/widget/Widgets';

function App() {
  return (
    <div className="app">
      {/* <h1>This is Twitter</h1> */}
      {/* sidebar */}
      <Sidebar />
      {/* feeds */}
      <Feed />
      {/* widget */}
      <Widget />
    </div>
  );
}

export default App;
