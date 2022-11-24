import React from "react";
import ga1 from "../assets/ga1.jpg";
import ga2 from "../assets/ga2.jpg";

const Gallery = () => {
  return (
    <div className="container">
      <div className="header">
        <h2 className="text-md">Our Gallery</h2>
      </div>
      <div className="">
        <div className="row">
          <div className="col-lg-6 ga-img">
            <img src={ga1} alt="gallery image" />
            <img src={ga1} alt="gallery image" />
          </div>
          <div className="col-lg-6 ga-img">
            <img src={ga2} alt="gallery image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
