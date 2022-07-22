import React from "react";
import "./button.css";
import Loader from "../loader/loader";

/* PROPS

variant: primary (default) \ secondary \ tertiary \ destructive \ disabled

hasIcon: left \ right \ icon-only \ null (default)

onClick: reference any function here without calling the function (i.e. don't use the brackets after the name of the function)

label: string

loading? (default is not loading)

*/

const Button = (props) => {
  const { label, variant, hasIcon, onClick, loading, icon } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        variant === ("secondary" || "tertiary" || "destructive" || "disabled")
          ? variant
          : "primary"
      }
        ${hasIcon === ("left" || "right" || "icon-only") ? hasIcon : ""}
        ${loading ? "loading" : ""} ${props.className ? props.className : ""}`}
    >
      {loading && variant === ("primary" || "destructive" || "disabled") ? (
        <Loader variant={variant} size="xs" />
      ) : loading && variant === ("secondary" || "tertiary") ? (
        <Loader variant="secondary" size="xs" />
      ) : hasIcon === ("left" || "icon-only") ? (
        icon
      ) : null}
      {hasIcon === "icon-only"
        ? null
        : loading
        ? "Loading..."
        : label
        ? label
        : null}
      {loading ? null : hasIcon === "right" ? icon : null}
    </button>
  );
};

export default Button;
