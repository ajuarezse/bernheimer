// src/routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Home from "../pages/Home/Home";
//import About from '../pages/About/About';

export const router = createBrowserRouter([
  {
    path: "/bernheimer",
    element: <App />, // Header/Footer persist here
    children: [
      { index: true, element: <Home /> }, // Main → Home
      //{ path: 'about', element: <About /> }, // Main → About
      // Add more routes here
    ],
  },
]);
