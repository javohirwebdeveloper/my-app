// App.js
import React from 'react';
import TwitterProvider from './context/TwitterContext';
import TweetList from './components/TweetList';

function App() {
  return (
    <div className="App">
      <TwitterProvider>
        <TweetList />
      </TwitterProvider>
    </div>
  );
}

export default App;
