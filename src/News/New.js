import React from 'react'
import Navbar from './Navbar';
import Main from './Main'
import {Link,Outlet} from 'react-router-dom'; 
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function New() {
  return (
    <div> 
     <Link to="/">back</Link>
     <Navbar />
     <Main />
     <Outlet />
    </div>
  );
}

export default New;
