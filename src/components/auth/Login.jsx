import React from "react";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";

const Login = () => {
  return (
    <FormWrapper
      headingText={"Welcome Back"}
      directionText={"Don't have an Account Yet? Sign Up"}
    >
      <InputField label={"Email"} />
      <InputField label={"Password"} />
      <ActionBtn actColor={"error"} weight={800} text={"LOG IN"} />
    </FormWrapper>
  );
};

export default Login;
