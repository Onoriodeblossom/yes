import React from "react";
import health from "../assets/c.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import image2 from "../assets/user1.jpg";
import image3 from "../assets/user2.png";
import image4 from "../assets/user3.jpg";
import image5 from "../assets/user4.jpg";

const Health = () => {
  const heroImages = [
    {
      Text: "Larry Mbekwe",
      Image: image2,
      Content:
        "Nicolas Akinwale  Agebni foundation has been a blessing to the globe with providing meals, clothings and educational system for children around the globe",
    },
    {
      Text: "Anna Kingston ",
      Image: image3,
      Content:
        "Nicolas Akinwale  Agebni foundation has been a blessing to the globe with providing meals, clothings and educational system for children around the globe",
    },
    {
      Text: "George Mmor",
      Image: image4,
      Content:
        "Nicolas Akinwale  Agebni foundation has been a blessing to the globe with providing meals, clothings and educational system for children around the globe",
    },
    {
      Text: "Kathryn Musa",
      Image: image5,
      Content:
        "Nicolas Akinwale  Agebni foundation has been a blessing to the globe with providing meals, clothings and educational system for children around the globe",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-5" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="relative">
                <img
                  src={health}
                  alt="health image"
                  className="eventImg rounded-lg"
                  width={"100%"}
                  style={{ margin: "auto" }}
                />
                <div
                  className="absolute p-3"
                  style={{ bottom: "5%", left: "0%" }}
                >
                  <h3 className="text-white sm:mt-24 mt-16">
                    ???A world to believe in!???
                  </h3>
                  <Link to="/donation">
                    <button className=" bg-orange-400 py-2 text-uppercase -mt-1 text-white rounded-md font-semibold text-sm px-4">
                      Get involved today
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-3">
              <div className="px-3 flex flex-wrap items-center justify-between  mt-5 ">
                <h1 className="">
                  Compassion for the Elderly and Care <br /> for the Lonely
                </h1>
                <div className="flex space-x-3 mt-3">
                  <Link to="/donation">
                    <button className=" bg-orange-400 py-2 text-uppercase -mt-1 text-white rounded-md font-semibold text-sm px-4">
                      Donate Now
                    </button>
                  </Link>
                  <Link to="/donation">
                    <button className=" bg-dark py-2.5 -mt-1 border-orange-400 text-orange-400  rounded-md font-semibold text-sm sm:px-4 px-3">
                      Become a Volunteer
                    </button>
                  </Link>
                </div>
              </div>
              <p className="text-gray-600 mt-4 font-normal text-sm sm:text-lg opacity-90 px-3 sm:px-3">
                Millions of elderly men and women in Africa are left to fend for
                themselves with their weak body structure and age telling on
                them. Thousand others live in extremely loneliness with nobody
                to care for them: Join us today on our mission to give them a
                world to believe in
              </p>
            </div>
          </div>

          <div className="my-3">
            <h2 className="text-center mt-5" style={{ fontSize: "29px" }}>
              Our Impact{" "}
              <span style={{ borderBottom: "3px solid #fb923c" }}>Stories</span>
            </h2>
            <div className="hero-card mt-5">
              <div className="row">
                {heroImages?.map((items, index) => {
                  const { Text, Image, Content } = items;

                  return (
                    <div className="col-lg-3 my-3" key={index}>
                      <div
                        className="shadow-lg rounded-md bg-white"
                        style={{ border: "1px solid #e9e5e52f" }}
                      >
                        <img src={Image} alt="image" className="rounded-md" />
                        <div className="container py-2">
                          <h1
                            className="  my-3 font-bold text-dark"
                            style={{ fontSize: "20px" }}
                          >
                            {Text}
                          </h1>
                          <p className=" text-gray-500 font-normal text-sm sm:text-sm opacity-90">
                            {Content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Health;
