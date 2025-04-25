// src/routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Poetry from "../pages/Poetry/Poetry";
import Prose from "../pages/Prose/Prose";
import Reviews from "../pages/ReviewsAndInterviews/Reviews";
import Translations from "../pages/Translations/Translations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Header/Footer persist here
    children: [
      { index: true, element: <Home /> }, // Main → Home
      { path: "/about", element: <About /> },
      { path: "/poetry", element: <Poetry /> }, // Main → About
      { path: "/prose", element: <Prose /> },
      { path: "/reviews", element: <Reviews /> },
      { path: "/translations", element: <Translations /> },
    ],
  },
]);
