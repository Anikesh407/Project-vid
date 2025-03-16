import logo from "../assets/Logo.svg";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar(props) {
  let isloggedIn = props.isloggedIn;
  let setIsLogIn = props.setIsLogIn;
  return (
    <nav className="  flex items-center justify-around  max-w-[100vw]  h-1/12  font-bold text-3l ">
      <div className="nvbg">
        <img
          className="nvbg"
          src={logo}
          alt="image"
          width={160}
          height={32}
          loading="lazy"
        />
      </div>
      <div className=" nvbg text-white flex w-[320px] h-[100%] justify-between items-center ">
        <NavLink className="nvbg h-[100%] " to="/">
          Home
        </NavLink>
        <NavLink className="nvbg h-[100%] " to="/about">
          About
        </NavLink>
        <NavLink className="nvbg h-[100%] " to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="nvbg flex justify-between items-center w-[220px] h-[100%] text-white ">
        {!isloggedIn && (
          <NavLink className="nvbg nav-right-btn h h-[100%] " to="/login">
            Log In
          </NavLink>
        )}
        {!isloggedIn && (
          <NavLink className="nvbg nav-right-btn h h-[100%] " to="/signup">
            Sign Up
          </NavLink>
        )}
        {isloggedIn && (
          <Link
            className="nvbg nav-right-btn h"
            to="/"
            onClick={() => {
              setIsLogIn(false);
              toast.success("Logged Out");
            }}
          >
            Log Out
          </Link>
        )}
        {isloggedIn && (
          <NavLink className="nvbg nav-right-btn h-[100%]" to="/dashboard">
            Dashboard
          </NavLink>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
