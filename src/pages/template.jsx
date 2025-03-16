import LoginForm from "./loginform";
import SignupForm from "./signupform";
import Image from "../components/image";

function Template({ title, desc1, desc2, image, formtype, setIsLogIn }) {
  return (
    <div className="flex w-screen  w -11/12   max-w-[1160px] text-white mx-auto gap-x-12 gap-y-0 py-12">
      <div className="flex flex-col  max-w-[450px mx-0] ">
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
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] bg-black "></div>
          <p className="text-black">Or</p>
          <div className="h-[1px] bg-black "></div>
        </div>
        <button>
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
