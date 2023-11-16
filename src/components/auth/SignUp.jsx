import React from "react";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";

const SignUp = () => {
  return (
    <FormWrapper
      headingText={"Create Your Account"}
      directionText={"Already Have an account? Log In"}
    >
      <div className="flex gap-8">
        <InputField bdColor={"primary"} label={"First Name"} />
        <InputField label={"Last Name"} />
      </div>
      <InputField label={"Phone number"} />
      <InputField label={"Password"} />

      <ActionBtn actColor={"error"} weight={800} text={"SIGN UP"} />
    </FormWrapper>
  );
};

export default SignUp;
