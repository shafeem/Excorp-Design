import React from "react";
import stair from "../../../assets/images/stair.jpg";
import bed from "../../../assets/images/bed.jpg";

const ImageSection = () => {
  return (
    <div className="flex pt-8">
      <div className="w-6/12 flex justify-end items-center max-h-screen">
        <img
          src={stair}
          alt="stair img"
          className="w-11/12 h-screen object-cover"
        />
      </div>
      <div className="w-6/12 flex justify-start items-center max-h-screen">
        <img
          src={bed}
          alt="bed img"
          className="w-11/12 h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default ImageSection;
