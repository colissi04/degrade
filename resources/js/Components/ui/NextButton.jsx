import React from "react";

export function NextButton({ onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white text-black px-3 py-1 rounded shadow ${className}`}
    >
      Next
    </button>
  );
}