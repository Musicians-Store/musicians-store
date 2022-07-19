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

const Button = (props) => {
  const { label, variant, icon, onClick, loading } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        variant === ("secondary" || "tertiary" || "destructive" || "disabled")
          ? variant
          : "primary"
      }
        ${icon === ("left" || "right" || "icon-only") ? icon : ""}
        ${loading ? "loading" : ""} ${props.className ? props.className : ""}`}
    >
      {loading && variant === ("primary" || "destructive" || "disabled") ? (
        <Loader variant={variant} size="xs" />
      ) : loading && variant === ("secondary" || "tertiary") ? (
        <Loader variant="secondary" size="xs" />
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
