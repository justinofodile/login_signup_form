import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const InputField = ({ label, bdColor }) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        fullWidth={true}
        label={label}
        variant="outlined"
        color={bdColor}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  bdColor: PropTypes.string,
};

export default InputField;
