import * as React from "react";

const Calendar = (props) => (
  <svg
    x={0}
    y={0}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 16H5V10h14v10Zm0-12H5V6h14v2ZM9 14H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8 4H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default Calendar;
