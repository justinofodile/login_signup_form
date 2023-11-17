import React from "react";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";
import { PropTypes } from "prop-types";

const SignUp = ({ handleDisplay }) => {
  return (
    <FormWrapper
      headingText={"Create Your Account"}
      directionText={
        <p className="text-center">
          Already Have an account?{" "}
          <button onClick={handleDisplay}>Log In</button>
        </p>
      }
    >
      <div className="flex justify-between">
        <InputField bdColor={"primary"} label={"First Name"} />
        <InputField label={"Last Name"} />
      </div>
      <InputField label={"Phone number"} />
      <InputField label={"Password"} />

      <ActionBtn actColor={"error"} weight={800} text={"SIGN UP"} />
    </FormWrapper>
  );
};

SignUp.propTypes = {
  handleDisplay: PropTypes.func,
};
export default SignUp;
