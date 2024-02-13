'use client'
import Projects from "./pages/projects.js"
import Contact from "./pages/contact.js"
import Education from "./pages/education.js"
import HomePage from "./pages/homepage.js"
import FallenGods from "./pages/fallengods.js"
import QuickReload from "./pages/quickreload.js"
import PetStore from "./pages/petstore.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useEffect } from 'react'

const Context = createContext();
export default function Home() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
  
    {
      path: "/projects",
      element: <Projects/>
    },
    {
      path: "/education",
      element: <Education/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/fallenGods",
      element: <FallenGods/>
    },
    {
      path: "/quickReload",
      element: <QuickReload/>
    },
    {
      path: "/petstore",
      element: <PetStore/>
    }
  ]);

    return (
      <RouterProvider router={router} />
  );
}