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
              Mission, Ethos and Goals of the Foundation:
            </h2>
            <p className=" text-white font-normal text-sm sm:text-lg opacity-90 text-center">
              To serve the public interest by supporting the less fortunate
              through principles of humanity. To make real impact on society. To
              support, encourage, improve social wellbeing. To assist the young,
              growing youths and the elderly in the society
            </p>
          </div>
        </div>
      </div>

      <div className=" py-3">
        <div className="container">
          <h2 className="text-md">Our Purpose</h2>

          <ol className="p-o">
            <li>Community Development</li>
            <li>Relieve Poverty and Hunger</li>
            <li>Encourage Education, Skill and Trade</li>
            <li>
              {" "}
              Being generous, having compassion and eliminate loneliness{" "}
            </li>
            <li> Food Distribution</li>
          </ol>
          <p className="lead font-semibold">
            In order to do the above, we need financial donation, sponsorship,
            volunteers, donors and partners to help our cause. Would you
            consider making a donation, fund or give alms to assist us in our
            fundraising event? Please feel free to encourage your friends,
            colleagues and neighbours to give to our campaign. Giving a little
            is better than not giving at all. Thank you so much for reading this
            message and for being part of the journey to bring joy, hope and
            happiness to the less fortunate, disadvantaged and challenged in our
            society. Your financial donation, assistance, support and good heart
            will go a long way to bringing comfort, peace and assurance to those
            in need. Thanks again for your generosity.
          </p>
        </div>
      </div>

      {/* meet the team */}
      <div className=" py-5" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="text-md mb-5">Get to Know Us More</h2>
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
