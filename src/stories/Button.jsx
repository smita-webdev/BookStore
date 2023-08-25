import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { Button } from "@mui/material";

/**
 * Primary UI component for user interaction
 */
export const ButtonExt = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <Button
      type="button"
      variant={primary ? "primary" : "secondary"}
      sx={{ background: backgroundColor }}
    >
      {label}
    </Button>
  );
};

ButtonExt.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonExt.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
