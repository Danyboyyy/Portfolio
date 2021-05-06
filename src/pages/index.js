import * as React from "react";
import { Router } from '@reach/router';
import '../styles/app.css';
import Home from "./Home";

// markup
const IndexPage = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/Home"/>
      </Router>
    </div>
  )
}

export default IndexPage;
