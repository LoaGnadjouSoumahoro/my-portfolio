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
              className="w-full h-auto transform -scale-x-75-100"
              width={600}
              src="profile.jpg"
              alt="profile Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
