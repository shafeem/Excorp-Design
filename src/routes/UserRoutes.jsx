import React from "react";
import Navbar from "../components/user/navbars/Navbar";
import Navigation from "../components/user/navbars/Navigation";
import { useMediaQuery } from "react-responsive";
import FirstSection from "../pages/FirstSection";

const UserRoutes = () => {
  let isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <>
      {isMobile ? (
        <div className="h-20px fixed bottom-0 flex justify-center items-center">
          <Navigation />
        </div>
      ) : (
        <div className="relative w-full h-fit">
          <Navbar />
        </div>
      )}
      <FirstSection/>
    </>
  );
};

export default UserRoutes;
