import { Outlet } from "react-router-dom";
import "../../vendor/normalize.css";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
