import React from "react";

function calculate(expression) {
  try {
    expression = expression.replace(/\s+/g, ""); // Remove whitespace

    if (!/^[0-9+\-*/.()]+$/.test(expression)) {
      return "Error";
    }
  } catch (error) {
    error("Error");
  }
  return <div>{evaluate(expression)}</div>;
}

export default calculate;
