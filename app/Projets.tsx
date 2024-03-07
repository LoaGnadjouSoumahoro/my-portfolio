import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";

type Props = {};

const Projets = (props: Props) => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="md:text-4 text-3xl lg:text-5xl font-bold">Projets</h1>
      <p className="pt-6 text-neutral-300">
        Over the month, I have gained experirnce in designing and developing a
        variety of websites, ranging from simple
      </p>
      <div className="mt-20 md:w-9/12 mx-auto">
        <img
          src="getflix.png"
          alt="Getflex projet"
          className="rounded-xl opacity-95 hover:opacity-100"
        />
        <div className="my-10 sm:10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Bookface</h1>
          {/* <p className="text-neutral-300">
            Boookface is design whith Nextjs, Material UI
          </p> */}
          <a
            href=""
            className="flex items-center px-4 py-1 border-[0.5] border-slate-500
"
          >
            Explore
            <TfiArrowTopRight className="ml-2" size={14} />
          </a>
        </div>
      </div>
      <div className="mt-20 md:w-9/12 mx-auto">
        <img
          src="pizza-menu-image-site.png"
          alt="Getflex projet"
          className="rounded-xl opacity-95 hover:opacity-100"
        />
        <div className="my-10 sm:10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Pizza Menu</h1>
          {/* <p className="text-neutral-300">
            Boookface is design whith Nextjs, Material UI
          </p> */}
          <a
            href=""
            className="flex items-center px-4 py-1 border-[0.5] border-slate-500
"
          >
            Explore
            <TfiArrowTopRight className="ml-2" size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projets;
