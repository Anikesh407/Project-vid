import Navbar from "./components/navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Contact from "./pages/contact";
import { useState } from "react";
function App() {
  const [isloggedIn, setIsLogIn] = useState(true);
  return (
    <div className=" bg-[#0c0e18] w-screen min-h-screen flex flex-col items-center">
      <Navbar isloggedIn={isloggedIn} setIsLogIn={setIsLogIn} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setisloggedin={setIsLogIn} />} />
        <Route path="/signup" element={<Signup setisloggedin={setIsLogIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;
