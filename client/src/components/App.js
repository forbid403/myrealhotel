import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Hotels from '../routes/Hotels';
import { RecentProvider } from './RecentContext';

function App() {
  return (
    <Router>
      <RecentProvider>
        <Route exact path="/" component={Home}></Route>
        <Route path="/hotels" component={Hotels}></Route>
      </RecentProvider>
    </Router>
  );
}

export default App;