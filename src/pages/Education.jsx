import React from "react";
import education from "../assets/b.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import image2 from "../assets/user1.jpg";
import image3 from "../assets/user2.png";
import image4 from "../assets/user3.jpg";
import image5 from "../assets/user4.jpg";

const Education = () => {
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
                  src={education}
                  alt="education image"
                  className="eventImg rounded-lg"
                  width={"100%"}
                  style={{ margin: "auto" }}
                />
                <div
                  className="absolute p-3"
                  style={{ bottom: "5%", left: "0%" }}
                >
                  <h3 className="text-white sm:mt-24 mt-16">
                    ???The difference between him and his dreams <br /> could be
                    you !???
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
              <div className="px-3 flex items-center justify-between  mt-5 ">
                <h1 className="" style={{ fontSize: "40px" }}>
                  Encourage Education, skills <br /> Acquisition and Trade
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
                Bridge of knowledge Millions of children, teens, and young
                adults are currently out of schools, and million others have
                zero access to skills acquisition centers due to extreme
                poverty. Hearts blistering with passion for knowledge and
                ability to make a difference in our world have had their hope
                brought to a halt, mainly due to inability to meet up with the
                financial requirement to nurture their dreams.
                <br /> At NAA Foundation, we are on a mission to save these
                dreams, and to build a bridge of knowledge and competence by:
                <ol>
                  <li>Sponsoring education</li>
                  <li>Sponsoring skills acquisition</li>
                  <li> Sponsoring intelligent initiatives and</li>
                  <li>
                    Supporting trades It is our conviction that everyone has the
                    ability to make a difference if given the opportunity
                  </li>
                </ol>
                Get involved in the best way you can. You can:
                <ol>
                  <li>Sponsor a skill</li>
                  <li>Donate for education</li>
                  <li>Refer someone to donate 4. Sponsor a trade</li>
                </ol>
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

export default Education;
