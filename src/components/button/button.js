import React from "react";
import "./button.css";
import Loader from "../loader/loader";

/* PROPS

variant: primary (default) \ secondary \ tertiary \ destructive \ disabled

icon: left \ right \ icon-only \ null (default)

onClick: reference any function here without calling the function (i.e. don't use the brackets after the name of the function)

label: string

loading? (default is not loading)

*/

// TODO Use state for loading instead of prop to avoid public prop?

const Button = (props) => {
  const { label, variant, icon, onClick, loading } = props;
  return (
    <button
      type="button"
      onClick={variant === "disabled" ? null : onClick}
      className={`${
        variant === "secondary"
          ? "secondary"
          : variant === "tertiary"
          ? "tertiary"
          : variant === "destructive"
          ? "destructive"
          : variant === "disabled"
          ? "disabled"
          : "primary"
      } 
        ${
          icon === "left"
            ? "left"
            : icon === "right"
            ? "right"
            : icon === "icon-only"
            ? "icon-only"
            : ""
        } 
        ${loading ? "loading" : ""} ${props.className ? props.className : ""}`}
    >
      {loading && (variant === ("primary" || "destructive")) ? (
        <Loader variant="primary" size="xs" />
      ) : loading && (variant === ("secondary" || "tertiary")) ? (
        <Loader variant="secondary" size="xs" />
      ) : loading && variant === "disabled" ? (
        <Loader variant="disabled" size="xs" />
      ) : icon === "left" ? (
        "insert left icon svg container"
      ) : null}
      {icon === "icon-only"
        ? null
        : loading
        ? "Loading..."
        : label
        ? label
        : null}
      {loading
        ? null
        : icon === "right"
        ? "insert left icon svg container"
        : null}
    </button>
  );
};

export default Button;
