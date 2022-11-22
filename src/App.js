import React from "react";
import Navbar from "./components/Navbar";
import poverty from "./assets/poverty.png";
import education from "./assets/b.png";
import community from "./assets/a.png";
import health from "./assets/c.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import team from "./assets/man.png";
import patner from "./assets/startup.png";
import contact from "./assets/contact.png";
import EventsLeft from "./components/EventsLeft";
import EventsRight from "./components/EventsRight";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const App = () => {
  const heroImages = [
    {
      Text: " ENCOURAGE EDUCATION, SKILLS ACQUISITION AND TRADE",
      Image: image2,
      href: "/education",
    },
    {
      Text: "COMMUNITY DEVELOPMENT PROJECT ",
      Image: image3,
      href: "/community",
    },
    {
      Text: "COMPASION FOR THE EDERLY, CARE FOR THE LONELY",
      Image: image4,
      href: "/health",
    },
    {
      Text: "RELIEVE POVERTY AND HUNGER",
      Image: image5,
      href: "/poverty",
    },
  ];

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
      <div>
        {/* Hero */}
        <div className=" her h-min-screen sm:h-screen py-5">
          <div className="container">
            <div className="hero-text text-center mt-16">
              <h2 className="capitalize text-orange-400">
                NICHOLAS AKINWALE AGBENI FOUNDATION
              </h2>
              <p className=" text-white font-normal text-sm sm:text-lg opacity-90 text-center">
                With the cold hearted happenings in our environment today, We do
                the best to let every child , youth and adult smile
              </p>
            </div>
            <div className="hero-card mt-5">
              <div className="row">
                {heroImages?.map((items, index) => {
                  const { Text, Image, href } = items;

                  return (
                    <div className="col-lg-3 my-3">
                      <div
                        className="shadow-lg rounded-md"
                        style={{ border: "1px solid #e9e5e52f" }}
                      >
                        <img src={Image} alt="image" className="rounded-md" />
                        <div className="container py-2">
                          <h1 className="  my-3 font-semi-bold text-sm text-white">
                            {Text}
                          </h1>
                          <div className="flex space-x-3">
                            <Link to={href}>
                              <button className="font-bold text-uppercase bg-white py-1.5 -mt-1 border-orange-400 text-orange-400  rounded-md font-semibold text-sm px-4">
                                View
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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

        <EventsLeft
          image={poverty}
          Snips="“The strength she needs
          could be YOU!”"
          Title="  Poverty and Hunger Relief"
          Info=" Millions of people are currently living below poverty and
                battling with hunger with every ounce of strength due to rising
                Inflation, Conflict and Disaster."
        />
        <EventsRight
          image={education}
          Snips="“The difference in Education could be you !”"
          Title="Encourage Education, skills Acquisition and Trade"
          Info=" Millions of children are currently out of school and skill acquisition centre due to extreme poverty.Join us on our mission to keep his hope and dreams alive a mission to move his mountains and a million others."
        />
        <EventsLeft
          image={community}
          Snips="“Be the difference! Lay a hand
          on your community today”"
          Title="Community Development Projects"
          Info=" Thousand of communities are currently being neglected and completely cut out of national
           budget with little to no access to basic ammenities such as Clean water, Constant supply of light, and motorable roads."
        />
        <EventsRight
          image={health}
          Snips="“A world to believe in!!”"
          Title="Compassion for the Elderly and Care for the Lonely"
          Info="Healthcare is an important sector around the globe, 
          thousands to millions of elderly ones are not well taken care, join the movement to actively put healthcare to everyone around the globe"
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
