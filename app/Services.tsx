import React from "react";
import { SiMui } from "react-icons/si";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold mb-10">
        Services
      </h1>
      <div className="flex max-md:flex-wrap gap-7 justify-between">
        <div className="d p-5 relative overflow-hidden mt-5">
          <h1 className="text-center mt-5">Material UI</h1>
          <div className="flex justify-center mt-4">
            <SiMui className="text-blue-500" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
