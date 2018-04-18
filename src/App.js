import React from 'react';
import {Route} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import CalendarPage from "./components/pages/CalendarPage";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={LoginPage} />
    <Route path="/calendar" exact component={CalendarPage} />
  </div>
);

export default App;
