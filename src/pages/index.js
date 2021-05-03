import * as React from "react";
import { BrowserRouter } from 'react-router-dom';
import '../styles/app.css';
import Home from "./Home";

// markup
const IndexPage = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default IndexPage;
