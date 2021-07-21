import React from "react";
import LoaderXP from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex-1 h-full w-full flex py-36 justify-center my-auto items-center">
      <LoaderXP
        type="Puff"
        color="#A7F3D0"
        height={100}
        width={100}
        //   timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loader;
