import * as React from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/app.css';

// markup
const IndexPage = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default IndexPage;
