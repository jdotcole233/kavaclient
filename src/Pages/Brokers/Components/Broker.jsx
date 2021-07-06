import React from "react";

const Broker = () => {
  return (
    <div className="bg-white cursor-pointer flex shadow-md p-3">
      <div className="w-20 flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-11 w-11 text-green-400"
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
      <div className="w-auto flex flex-col flex-1">
        <span className="font-bold text-xl">Broker name</span>
        <span className="font-thin">Broker email</span>
        <span className="font-thin">Broker address</span>
      </div>
    </div>
  );
};

export default Broker;
