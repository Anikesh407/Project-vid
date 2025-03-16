import Template from "../pages/template";
import loginimg from "../assets/login.png";

const Login = ({ setisloggedin }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today , tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginimg}
      formtype="login"
      setIsLogIn={setisloggedin}
    ></Template>
  );
};
export default Login;
