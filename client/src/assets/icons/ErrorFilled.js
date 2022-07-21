import * as React from "react";

const ErrorFilled = (props) => (
  <svg
    x={0}
    y={0}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.929 4.929c-3.903 3.903-3.903 10.239 0 14.142 3.903 3.903 10.239 3.903 14.142 0 3.903-3.903 3.903-10.239 0-14.142-3.903-3.903-10.239-3.903-14.142 0Zm11.314 4.243L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829 1.415 1.415Z"
      fill="currentColor"
    />
  </svg>
);

export default ErrorFilled;
