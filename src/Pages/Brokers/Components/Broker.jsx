import React from "react";

const Broker = () => {
  return (
    <div className="bg-white flex shadow-md p-3">
      <div className="w-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      </div>
      <div className="w-auto flex-1">
        <span>Broker name</span>
        <span>Broker email</span>
        <span>Broker address</span>
      </div>
    </div>
  );
};

export default Broker;
