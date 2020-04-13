import React from "react";
import Signin from "../../components/signin";
import Signup from "../../components/signup";
import "./style.scss";

function SignInSignUp() {
  //   debugger;
  return (
    <div className="sign-in-sign-up">
      <Signin />
      <Signup />
    </div>
  );
}
export default SignInSignUp;
