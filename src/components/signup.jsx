import Template from "../pages/template";
import signupimg from "../assets/signup.png";

const Signup = ({ setisloggedin }) => {
  return (
    <Template
      title="Join the millions learning to code with studyNotion for free"
      desc1="Build the skills for today , tomorrow, and beyond"
      desc2="Education to future-proof your career."
      image={signupimg}
      formtype="signup"
      setIsLogIn={setisloggedin}
    ></Template>
  );
};
export default Signup;
