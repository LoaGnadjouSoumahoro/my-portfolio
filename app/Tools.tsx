import React from "react";

type Props = {};

const Tools = (props: Props) => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="md:text-4 text-3xl lg:text-5xl font-bold">Tools</h1>
      <p className="pt-6 text-neutral-300">
        The products, apps and services I use on a daily bassic for work and
        life
      </p>
      <div className="mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10">
        <a
          href=""
          className="border-[0.5px] border-neutral-500 block rounded-t-2xl"
        >
          <div className="py-8 bg-neutral-800 w-full text-center rounded-t-2xl">
            <img
              src="vscode.png"
              alt=""
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
            />
          </div>

          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Vs Code</h1>
            <p className="text-neutral-400">
              Use for Most of my developed Apps
            </p>
          </div>
        </a>
        <a
          href=""
          className="border-[0.5px] border-neutral-500 block rounded-t-2xl"
        >
          <div className="py-8 bg-neutral-800 w-full text-center rounded-t-2xl">
            <img
              src="github.png
              "
              alt=""
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
            />
          </div>

          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Github</h1>
            <p className="text-neutral-400">
              My tool to manage versions of my code
            </p>
          </div>
        </a>
        <a
          href=""
          className="border-[0.5px] border-neutral-500 block rounded-t-2xl"
        >
          <div className="py-8 bg-neutral-800 w-full text-center rounded-t-2xl">
            <img
              src="dribbble.png"
              alt=""
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
            />
          </div>

          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Dribbble</h1>
            <p className="text-neutral-400">
              Daily Inspiration for my projects
            </p>
          </div>
        </a>
        <a
          href=""
          className="border-[0.5px] border-neutral-500 block rounded-t-2xl"
        >
          <div className="py-8 bg-neutral-800 w-full text-center rounded-t-2xl">
            <img
              src="icon-figma.png"
              alt=""
              className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
            />
          </div>

          <div className="p-8 py-10">
            <h1 className="mb-1 font-bold">Figma</h1>
            <p className="text-neutral-400">My design tool of choice</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Tools;
