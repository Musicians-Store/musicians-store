import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import Loader from "../loader/loader";

const Button = (props) => {
  const { label, variant, hasIcon, onClick, loading, icon, className } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${variant ? variant : "primary"}
        ${hasIcon ? hasIcon : ""}
        ${loading ? "loading" : ""} ${className ? className : ""}`}
    >
      {loading &&
      (variant === "primary" ||
        variant === "destructive" ||
        variant === "disabled") ? (
        <Loader variant={variant} size="xs" />
      ) : loading && (variant === "secondary" || variant === "tertiary") ? (
        <Loader variant="secondary" size="xs" />
      ) : hasIcon === "left" || hasIcon === "icon-only" ? (
        icon
      ) : null}
      {hasIcon === "icon-only" ? null : loading ? (
        <p>Loading...</p>
      ) : label ? (
        <p>{label}</p>
      ) : null}
      {loading ? null : hasIcon === "right" ? icon : null}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "destructive",
    "disabled",
  ]),

  hasIcon: PropTypes.oneOf(["left", "right", "icon-only", null]),

  /**
   * Optional click handler. Reference any function here without calling the function (i.e.don't use the brackets after the name of the function)
   */
  onClick: PropTypes.func,

  label: PropTypes.string,

  loading: PropTypes.bool,

  className: PropTypes.string,

  icon: PropTypes.object,
};

Button.defaultProps = {
  variant: "primary",
  hasIcon: undefined,
  label: undefined,
  onClick: undefined,
  loading: false,
  className: undefined,
  icon: undefined,
};

export default Button;
