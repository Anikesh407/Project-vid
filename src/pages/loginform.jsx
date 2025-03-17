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
    <form
      
      onSubmit={submithandler}
      className="flex flex-col gap-y-4  mt-2 "
    >
      <label htmlFor="email">
        <p className="text-[0.875em] text-gray-200 mb-1 leading[1.375rem]">
          Email Adress
          <sup className="text-pink-700">*</sup>
        </p>
        <input
          className="w-full bg-gray-800 rounded-[0.5rem]  text-gray-200 p-[12px] border-b-[0.5px] "
          required
          type="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
        />
      </label>

      <label htmlFor="pass" className="relative">
        <p className="text-[0.875em] text-gray-200 mb-1 leading[1.375rem]">
          Password <sup className="text-pink-700">*</sup>
        </p>
        <input
          className="w-full bg-gray-800 rounded-[0.5rem]  text-gray-200 p-[12px] border-b-[0.5px]"
          required
          type={showPassword ? "text" : "password"}
          id="pass"
          onChange={changeHandler}
          value={formData.passw}
          placeholder="Enter Password"
          name="passw"
        />
        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          role="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setshowpass((prev) => !prev)}
        >
          {showPassword ? (
            <IoEye fontSize={24} fill="#AFB2BF" />
          ) : (
            <IoEyeOff fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="#" className="absolute right-1 top-[75px]">
          <p className="font-light text-l text-gray-600">Forget Password</p>
        </Link>
      </label>

      <button className="w-full bg-yellow-500 text-black rounded-[8px] font-medium px-[12px] py-[8px] mt-[25px] text-center ">
        Sign in
      </button>
    </form>
  );
}
export default LoginForm;
