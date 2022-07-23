import React from "react";
import PropTypes from "prop-types";
import "./loader.css";

const Loader = (props) => {
  const { size, variant } = props;
  return (
    <div
      className={`loader-container ${
        size === "xs" || size === "s" || size === "m" ? size : "l"
      } ${
        variant === "secondary" || variant === "disabled" ? variant : "primary"
      }`}
    >
      <div className="loader">
        <div className="circle">
          <div></div>
        </div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(["xs", "s", "m", "l"]),
  variant: PropTypes.oneOf(["primary", "secondary", "disabled"]),
};

Loader.defaultProps = {
  size: "l",
  variant: "primary",
};

export default Loader;
