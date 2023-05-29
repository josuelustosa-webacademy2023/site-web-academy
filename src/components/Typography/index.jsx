import React from "react";

function Typography({ className, children }) {
  const Typography = className || "p";

  return (
    <Typography className={`typography ${className}`}>{children}</Typography>
  );
}

export default Typography;
