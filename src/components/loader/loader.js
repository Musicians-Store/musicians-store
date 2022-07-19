import React from "react";
import "./loader.css";

const Loader = (props) => {
  const { size, variant } = props;
  return (
    <div
      className={`loader-container ${size ? size : ""} ${
        variant === "secondary" ? "secondary" : variant==="disabled"? "disabled" : "primary"
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

export default Loader;
