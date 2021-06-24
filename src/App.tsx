import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
