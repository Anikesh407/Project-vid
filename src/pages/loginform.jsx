import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm({ setIsLogIn }) {
  const [formData, setformdata] = useState({
    email: "",
    passw: "",
  });

  const navigate = useNavigate();

  const [showPassword, setshowpass] = useState(false);

  function submithandler(event) {
    event.preventDefault();
    setIsLogIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  function changeHandler(event) {
    setformdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <form action="" onSubmit={submithandler}>
      <label htmlFor="email">
        <p>
          Email Adress
          <sup>*</sup>
        </p>
      </label>
      <input
        required
        type="email"
        id="email"
        value={formData.email}
        onChange={changeHandler}
        placeholder="Enter email id"
        name="email"
      />
      <label htmlFor="pass">
        <p>
          Password <sup>*</sup>
        </p>
      </label>
      <input
        required
        type={showPassword ? "text" : "password"}
        id="pass"
        onChange={changeHandler}
        value={formData.passw}
        placeholder="Enter Password"
        name="passw"
      />
      <span
        role="button"
        aria-label={showPassword ? "Hide password" : "Show password"}
        onClick={() => setshowpass((prev) => !prev)}
      >
        {showPassword ? <IoEye /> : <IoEyeOff />}
      </span>
      <Link to="#">
        <p>Forget Password</p>
      </Link>
      <button>Sign in</button>
    </form>
  );
}
export default LoginForm;
