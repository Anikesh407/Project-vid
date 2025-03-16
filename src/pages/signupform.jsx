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
  });
  const [showpassword, setshowpass] = useState(false);

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
      <div>
        <button>Students</button>
        <button>Instructor</button>
      </div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
            />
          </label>
          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
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
          <p>
            Email Adress <sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email adress"
            value={formData.email}
          />
        </label>
        <div>
          <label>
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              required
              type={showpassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span onClick={() => setshowpass((prev) => !prev)}>
              {showpassword ? <IoEye /> : <IoEyeOff />}
            </span>
          </label>
          <label>
            <p>
              Conform Password <sup>*</sup>
            </p>
            <input
              required
              type={showpassword ? "text" : "password"}
              name="confirmPass"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.confirmPass}
            />
            <span onClick={() => setshowpass((prev) => !prev)}>
              {showpassword ? <IoEye /> : <IoEyeOff />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
}
export default SignupForm;
