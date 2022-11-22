import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" py-5 bg-gray-900">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="p-3">
              <Link to="/">
                <img src={logo} alt="logo" width={"25%"} />
              </Link>
              <h1 className="text-white" style={{ fontSize: "20px" }}>
                Nicholas Akinwale Agbeni Foundation
              </h1>
              <p className=" text-gray-100 font-normal text-sm sm:text-sm opacity-90">
                A Non-Profit Organization set up with a mission to meet
                humanitarian needs in the best way as it can.
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="p-3">
              <h3 className="text-orange-400">Company</h3>
              <ul className="footer m-0 p-0">
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Our Mission</Link>
                </li>
                <li>
                  <Link>Our Vision</Link>
                </li>
                <li>
                  <Link>Meet the Team</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="p-3">
              <h3 className="text-orange-400">Events</h3>
              <ul className="footer m-0 p-0">
                <li>
                  <Link to="/poverty">Food Supply</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/health">Healthcare</Link>
                </li>
                <li>
                  <Link to="/community">Enviromentals</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="p-3">
              <h3 className="text-orange-400">Contact Us</h3>
              <ul className="footer m-0 p-0">
                <li>
                  <Link>Uyi Avenue, Wuse II, Abuja, Nigeria</Link>
                </li>
                <li>
                  {" "}
                  <Link>support@naaf.com</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
