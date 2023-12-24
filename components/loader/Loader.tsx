"use client";
import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="text-center flex items-center justify-center h-96 w-full">
      <div className="">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#A2FF86"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loader;
