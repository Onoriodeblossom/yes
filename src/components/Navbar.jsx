import React from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handleMenu = () => {
    var mobile = document.getElementById("mobile");
    mobile.classList.toggle("mobile");
  };
  return (
    <section>
      <div
        className="py-1 bg-white hidden sm:block"
        style={{ position: "sticky", top: "0px", zIndex: "11111" }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="logo" width={"70%"} />
            </div>
            {/* Links */}
            <div className="links flex items-center justify-between">
              <ul className="flex items-center justify-between mt-2">
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/about"> About Us</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/contact"> Patner with Us</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/contact"> Contact Us</Link>
                </li>
              </ul>
              <Link to="/donation">
                <button className=" bg-orange-400 py-2 -mt-1 text-white rounded-md font-semibold text-sm sm:px-4 px-3">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white sm:hidden block"
        style={{ position: "fixed", top: "0%", zIndex: "1111111" }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <img src={logo} alt="logo" width={"24%"} />
            <img src={menu} alt="menu" width={"10%"} onClick={handleMenu} />
          </div>
        </div>
        <div className="h-screen bg-gray-100 container mobile" id="mobile">
          <ul className="p-0 pt-3">
            <li className="my-3">
              <Link to="/" className="text-lg font-bold">
                Home
              </Link>
            </li>
            <li className="my-3">
              <Link to="/about" className="text-lg font-bold">
                About Us
              </Link>
            </li>
            <li className="my-3">
              <Link to="/contact" className="text-lg font-bold">
                Contact Us
              </Link>
            </li>
            <li className="my-3">
              <Link to="/health" className="text-lg font-bold">
                Health Care
              </Link>
            </li>
            <li className="my-3">
              <Link to="/education" className="text-lg font-bold">
                Education
              </Link>
            </li>
            <li className="my-3">
              <Link to="/poverty" className="text-lg font-bold">
                Food Supply
              </Link>
            </li>
            <li className="my-3">
              <Link to="/community" className="text-lg font-bold">
                Enviromental Health
              </Link>
            </li>
          </ul>
          <p className=" text-dark font-normal text-sm sm:text-sm opacity-90">
            NICHOLAS AKINWALE AGBENI FOUNDATION is a Non-Profit Organization set
            up with a mission to meet humanitarian needs in the best way as it
            can with focus centered on:
          </p>
          <div
            className="flex space-x-3 mt-3 ml-5"
            style={{ position: "fixed", bottom: "5%" }}
          >
            <Link to="/donation">
              <button className=" bg-dark py-2.5 -mt-1 border-orange-400 text-orange-400  rounded-md font-semibold text-sm sm:px-4 px-3">
                Become a Volunteer
              </button>
            </Link>
            <Link to="/donation">
              <button className=" bg-dark py-2.5 -mt-1 border-orange-400 text-orange-400  rounded-md font-semibold text-sm sm:px-4 px-3">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
