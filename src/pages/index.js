import * as React from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";
import '../styles/app.css';

// markup
const IndexPage = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default IndexPage;
