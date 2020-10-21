import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          Signup
        </Route>
      </Switch>
    </Router>
  );
}
export default App;