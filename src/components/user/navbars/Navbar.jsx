import React from "react";
import { motion } from "framer-motion";
// import icon from "../../assets/images/icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <div className="flex flex-row w-screen h-16 uppercase text-xs items-center bg-slate-100 font-semibold">
          <div className="flex h-full w-3/12 gap-10 justify-center items-center">
            <Link to="/interiors">
              <h1 className="text-black hover:text-red-500 hover:translate-y-2 duration-300">interiors</h1>
            </Link>
            <Link to="/design">
              <h1 className="text-black hover:text-red-500 hover:translate-y-2 duration-300">design</h1>
            </Link>
          </div>

          <div className="flex h-full  w-6/12 justify-center items-center">
            Logo and design
          </div>

          <div className="flex h-full  w-3/12 justify-center items-center">
            <Link to="/about">
              <h1 className="text-black hover:text-red-500 hover:translate-y-2 duration-300">about+</h1>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
