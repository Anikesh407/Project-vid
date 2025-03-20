import logo from "../assets/Vidyanza.png";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar(props) {
  let isloggedIn = props.isloggedIn;
  let setIsLogIn = props.setIsLogIn;
  return (
    <nav className="  flex items-center justify-between    h-[60px]  max-w-[1160px] w-11/12  font-bold text-3l ">
      <div className="nvbg ml-5  h-[100%] flex items-center justify-center">
        <img
          className="nvbg  invert-1"
          src={logo}
          alt="image"
          width={160}
          height={38}
          loading="lazy"
                 />
      </div>
      <div className=" nvbg text-white flex w-[280px] h-[100%] justify-between items-center ">
        <NavLink className="nvbg h-[100%]  " to="/">
          Home
        </NavLink>
        <NavLink className="nvbg h-[100%]  " to="/about">
          About
        </NavLink>
        <NavLink className="nvbg h-[100%]  " to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="nvbg flex justify-between items-center w-[220px] h-[100%] text-white ">
        {!isloggedIn && (
          <NavLink
            className="nvbg nav-right-btn h h-[100%] whitespace-nowrap "
            to="/login"
          >
            Log In
          </NavLink>
        )}
        {!isloggedIn && (
          <NavLink
            className="nvbg nav-right-btn h h-[100%] whitespace-nowrap "
            to="/signup"
          >
            Sign Up
          </NavLink>
        )}
         {isloggedIn && (
          <NavLink className="nvbg nav-right-btn h-[100%]" to="/dashboard">
            Dashboard
          </NavLink>
        )}
        {isloggedIn && (
          <Link
            className="nvbg nav-right-btn h whitespace-nowrap"
            to="/"
            onClick={() => {
              setIsLogIn(false);
              toast.success("Logged Out");
            }}
          >
            Log Out
          </Link>
        )}
       
      </div>
    </nav>
  );
}
export default Navbar;
