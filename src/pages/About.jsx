import React from "react";
import Navbar from "../components/Navbar";
import team from "../assets/man.png";
import patner from "../assets/startup.png";
import contact from "../assets/contact.png";
import Footer from "../components/Footer";

const About = () => {
  const about = [
    {
      Text: "Meet the Team",
      Image: team,
      Content:
        " Our global team is driven to assist those in need and  assist you in reaching millions of individuals through our connections",
    },
    {
      Text: "Patner with Us",
      Image: patner,
      Content:
        "Patner with us by making donations to our account and become a volunteer to reach millions of people in need",
    },
    {
      Text: "Contact Us",
      Image: contact,
      Content:
        "Send us a message via the livechat or send us a mail directly , our customer support are ready to recieve your messages",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="about py-5">
        <div className="container">
          <div className="hero-text text-center mt-16">
            <h2 className="capitalize text-orange-400">
              Our misson and purpose
            </h2>
            <p className=" text-white font-normal text-sm sm:text-lg opacity-90 text-center">
              NICHOLAS AKINWALE AGBENI FOUNDATION is a Non-Profit Organization
              set up with a mission to meet humanitarian needs in the best way
              as it can with focus centered on:
            </p>
          </div>
        </div>
      </div>

      {/* meet the team */}
      <div className=" py-5">
        <div className="container">
          <div className="row">
            {about.map((item, index) => {
              const { Image, Text, Content } = item;

              return (
                <div class="col-lg-4 mb-3" key={index}>
                  <div
                    className="shadow-md rounded-md p-2"
                    style={{ border: "1px solid #faeafa" }}
                  >
                    <div className=" flex items-center justify-center">
                      <img src={Image} alt="meet the team" width={"20%"} />
                    </div>
                    <h3
                      className=" font-semibold opacity-75 text-center"
                      style={{ fontSize: "20px" }}
                    >
                      {Text}
                    </h3>
                    <p className="text-sm text-center my-2 text-gray-500">
                      {Content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
