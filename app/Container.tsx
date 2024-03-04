import React from "react";
import { GrInstagram } from "react-icons/gr";

type Props = {};

const Container = (props: Props) => {
  return (
    <div className="lg:pt-16 pt-4 relative w-10/12 mx-auto">
      <div className="md:flex items-center justify-between flex-row-reverse">
        <div className="flex justify-end items-end max-md:pt-4">
          <div className="relative">
            <img
              className="w-100% h-auto transform -scale-x-100"
              width={400}
              src="profile.jpg"
              alt="profile Image"
            />
            <div className="w-[60%] overflow-hidden h-[70%] z-[-1] top-[10%] left-[20%] rounded-full bg-gradient-to-r from-slate-600 via-slate-400 absolut"></div>
          </div>
        </div>
        <div className="p-4 pl-0 mt-5 sm:mt-20">
          <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
            Hello
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2 lg:pt-6">
            Gnadjou SOUMAHORO
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Container;
