import LoginForm from "./loginform";
import SignupForm from "./signupform";
import Image from "../components/image";
import { FcGoogle } from "react-icons/fc";

function Template({ title, desc1, desc2, image, formtype, setIsLogIn }) {
  return (
    <div className="flex justify-between max-w-[1160px] w-11/12 text-white mx-auto gap-x-12 gap-y-0 py-12">
      <div className="flex flex-col  max-w-[450px] mx-0 gap-y-[20px] ">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]  ">
          {title}
        </h1>
        <p className="text-[1.125rem] leading[1.625rem] mt-4 ">
          <span>{desc1}</span>
          <br />
          <span className="text-blue-600 italic">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setIsLogIn={setIsLogIn} />
        ) : (
          <LoginForm setIsLogIn={setIsLogIn} />
        )}
        <div className="flex w-full items-center my-1 gap-x-2  ">
          <div className="h-[1px] w-full bg-gray-900 "></div>
          <p className="text-gray-800 font-medium leading[1.375rem] ">Or</p>
          <div className="h-[1px] w-full bg-gray-900 "></div>
        </div>
        <button className="flex justify-center gap-x-[3px] items-center w-full rounded-[8px] font-medium text-gray-600  border  border-gray-600  py-[8px] mt-1 ">
          <FcGoogle />
          <p>Sign up with Google</p>
        </button>
      </div>
      <div>
        <Image image={image}></Image>
      </div>
    </div>
  );
}
export default Template;
