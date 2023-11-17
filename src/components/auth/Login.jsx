import React from "react";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";
import { PropTypes } from "prop-types";

const Login = ({ handleDisplay }) => {
  return (
    <FormWrapper
      headingText={"Welcome Back"}
      directionText={
        <p className="text-center">
          Don't Have an account?{" "}
          <button onClick={handleDisplay}>Sign Up</button>
        </p>
      }
    >
      <InputField label={"Email"} />
      <InputField label={"Password"} />
      <ActionBtn actColor={"error"} weight={800} text={"LOG IN"} />
    </FormWrapper>
  );
};
Login.propTypes = {
  handleDisplay: PropTypes.func,
};

export default Login;
