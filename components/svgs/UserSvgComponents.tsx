import * as React from "react"
const UserSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 50 50",
    }}
    viewBox="0 0 50 50"
    {...props}
  >
    <path
      d="M31 24.3h-1.9c3.8-1.6 6.4-5.4 6.4-9.7C35.6 8.7 30.8 4 25 4S14.4 8.7 14.4 14.6c0 4.4 2.6 8.1 6.4 9.7H19c-5.5 0-10 4.5-10 10v10.2c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6V34.2c0-3.8 3.1-6.8 6.8-6.8h12c3.8 0 6.8 3.1 6.8 6.8v10.2c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6V34.2c0-5.5-4.5-9.9-10-9.9zm-13.5-9.7c0-4.1 3.3-7.5 7.5-7.5s7.5 3.3 7.5 7.5S29.1 22 25 22s-7.5-3.3-7.5-7.4z"
      style={{
        fill: "#809bad",
      }}
    />
  </svg>
)
export default UserSvgComponent
