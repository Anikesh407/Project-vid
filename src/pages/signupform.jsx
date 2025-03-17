import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignupForm({ setIsLogIn }) {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPass: "",
    role: "students",
  });
  const [showpassword, setshowpass] = useState(false);
  const [showConfpassword, setshowConfpass] = useState(false);

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPass) {
      toast.error("password do not match");
      return;
    }
    setIsLogIn(true);
    toast.success("Account Created");
    console.log(formData);
    navigate("/dashboard");
  }

  function changeHandler(event) {
    setformData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div>
      <div className="flex gap-x-4 w-[200px] px-[8px] py-[5px] rounded-[25px] h-[50px] bg-gray-800">
        <button
          type="radio"
          name="role"
          value="students"
          className={
            formData.role == "students"
              ? "bg-[#0c0e18] rounded-[25px] w-[130px] h-[40px] text-white"
              : "cursor-pointer text-gray-500 w-[130px]"
          }
          onClick={changeHandler}
        >
          Students
        </button>
        <button
          type="radio"
          name="role"
          value="instructor"
          className={
            formData.role == "instructor"
              ? "bg-[#0c0e18] rounded-[25px] w-[130px] h-[40px] text-white"
              : "cursor-pointer text-gray-500 w-[130px] "
          }
          onClick={changeHandler}
        >
          Instructor
        </button>
      </div>
      <form
        action=""
        onSubmit={submitHandler}
        className="flex flex-col gap-y-4  mt-2"
      >
        <div className="flex justify-between">
          <label>
            <p className="text-[0.875em] text-gray-200 mb-1 leading[1.375rem]">
              First Name <sup className="text-pink-700">*</sup>
            </p>
            <input
              className="w-full bg-gray-800 rounded-[0.5rem]  text-gray-200 p-[12px] border-b-[0.5px] "
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
            />
          </label>
          <label>
            <p className="text-[0.875em] text-gray-200 mb-1 leading[1.375rem]">
              Last Name <sup className="text-pink-700">*</sup>
            </p>
            <input
              className="w-full bg-gray-800 rounded-[0.5rem]  text-gray-200 p-[12px] border-b-[0.5px] "
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastname}
            />
          </label>
        </div>
        <label>
          <p className="text-[0.875em] text-gray-200 mb-1 leading[1.375rem]">
            Email Adress <sup className="text-pink-700">*</sup>
          </p>
          <input
            className="w-full bg-gray-800 rounded-[0.5rem]  text-gray-200 p-[12px] border-b-[0.5px] "
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email adress"
            value={formData.email}
          />
        </label>
        <div className="flex justify-between ">
          <label className="relative">
            <p className="text-[0.875em] text-gray-200 mb-1 leading[1.375rem]">
              Create Password <sup className="text-pink-700">*</sup>
            </p>
            <input
              className="w-full bg-gray-800 rounded-[0.5rem]  text-gray-200 p-[12px] border-b-[0.5px] "
              required
              type={showpassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setshowpass((prev) => !prev)}
            >
              {showpassword ? (
                <IoEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <IoEyeOff fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="text-[0.875em] text-gray-200 mb-1 leading[1.375rem]">
              Conform Password <sup className="text-pink-700">*</sup>
            </p>
            <input
              className="w-full bg-gray-800 rounded-[0.5rem]  text-gray-200 p-[12px] border-b-[0.5px] "
              required
              type={showConfpassword ? "text" : "password"}
              name="confirmPass"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.confirmPass}
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setshowConfpass((prev) => !prev)}
            >
              {showConfpassword ? (
                <IoEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <IoEyeOff fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="w-full bg-yellow-500 text-black rounded-[8px] font-medium px-[12px] py-[8px] mt-[25px] text-center ">
          Create Account
        </button>
      </form>
    </div>
  );
}
export default SignupForm;
