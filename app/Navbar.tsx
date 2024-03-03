"use client";
import React, { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500"></div>
  );
};

export default Navbar;
