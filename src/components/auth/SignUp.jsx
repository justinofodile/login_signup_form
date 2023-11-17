import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";
import { PropTypes } from "prop-types";

const SignUp = ({ handleDisplay }) => {
  const [userInfor, setUserInfor] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  function handleUserInput(event) {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setUserInfor((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  //Handles users submit
  function handleSubmit(params) {
    console.log(userInfor);
  }
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
        <InputField
          name={"firstName"}
          handleInput={handleUserInput}
          bdColor={"primary"}
          label={"First Name"}
          value={userInfor.firstName}
        />
        <InputField
          name={"lastName"}
          value={userInfor.lastname}
          handleInput={handleUserInput}
          label={"Last Name"}
        />
      </div>
      <InputField
        name={"phoneNumber"}
        handleInput={handleUserInput}
        label={"Phone number"}
        value={userInfor.phoneNumber}
      />
      <InputField
        name={"email"}
        handleInput={handleUserInput}
        label={"Email"}
        value={userInfor.email}
      />
      <InputField
        name={"password"}
        handleInput={handleUserInput}
        label={"Password"}
        value={userInfor.password}
      />

      <ActionBtn
        handleSubmit={handleSubmit}
        actColor={"error"}
        weight={800}
        text={"SIGN UP"}
      />
    </FormWrapper>
  );
};

SignUp.propTypes = {
  handleDisplay: PropTypes.func,
};
export default SignUp;
