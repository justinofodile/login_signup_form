import React from "react";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";
import { PropTypes } from "prop-types";

const Login = ({ handleDisplay }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit() {
    const logs = {
      email: email,
      password: password,
    };

    console.log(logs);
  }
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
      <InputField
        handleInput={(e) => setEmail(e.target.value)}
        label={"Email"}
      />
      <InputField
        handleInput={(e) => setPassword(e.target.value)}
        label={"Password"}
      />
      <ActionBtn
        handleSubmit={handleSubmit}
        actColor={"error"}
        weight={800}
        text={"LOG IN"}
      />
    </FormWrapper>
  );
};
Login.propTypes = {
  handleDisplay: PropTypes.func,
};

export default Login;
