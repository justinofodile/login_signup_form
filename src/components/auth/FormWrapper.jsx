import React from "react";
import propTypes from "prop-types";

const FormWrapper = ({ headingText, children, directionText }) => {
  return (
    <form className="shadow-2xl p-4 max-w-lg space-y-6 w-full">
      <h1 className="text-3xl font-bold">{headingText}</h1>
      {children}
      {directionText}
    </form>
  );
};

FormWrapper.propTypes = {
  headingText: propTypes.string,
  children: propTypes.array,
  directionText: propTypes.object,
};
export default FormWrapper;
