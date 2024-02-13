import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'next/link';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext } from "react";
import Home from "./pages/page.js";
import Projects from './pages/projects.js';
import Education from './pages/education.js';
import Contact from './pages/contact.js'
import FallenGods from './pages/fallengods.js'


export const UserContext = createContext();

const App = () => {
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  
    {
      path: "/projects",
      element: <Projects/>,
    },
    {
      path: "/education",
      element: <Education/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/fallenGods",
      element: <FallenGods/>
    }
  ]);
    return (
      <RouterProvider router={router} />
  );
}

export default App
