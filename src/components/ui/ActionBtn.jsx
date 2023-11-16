import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const ActionBtn = ({ text, weight, actColor }) => {
  return (
    <div>
      <Button
        style={{ fontWeight: weight }}
        fullWidth
        variant="contained"
        color={actColor}
      >
        {text}
      </Button>
    </div>
  );
};

ActionBtn.propTypes = {
  text: PropTypes.string,
  weight: PropTypes.number,
  actColor: PropTypes.string,
};
export default ActionBtn;
