"use client";
import React from "react";

interface ErrorProps {
  reset: () => void;
  error: Error;
}

const Error = (props: ErrorProps) => {
  const errorStyle = {
    color: "#de4d4d",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    flexDirection: "column"
  } as React.CSSProperties;

  return (
    <span style={errorStyle}>
      I'm sorry there was an error in the app. Please try again later.
    </span>
  );
};

export default Error;