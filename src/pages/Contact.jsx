import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import contactImg from "../assets/contact.svg";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_jhyicad",
        "template_3j9qkbv",
        e.target,
        "Slb2v-Fwu2LDXgAMp"
      )
      .then(
        (result) => {
          setLoading(false);

          toast.success("Email sent successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Navbar />
      <div className="contact py-5">
        <div className="container">
          <div className="hero-text text-center mt-16">
            <h2 className="capitalize text-orange-400">
              NICHOLAS AKINWALE AGBENI FOUNDATION
            </h2>
            <p className=" text-white font-normal text-sm sm:text-lg opacity-90 text-center">
              Send us a message for patnership information and to learn more
              about us
            </p>
          </div>
        </div>
      </div>

      <div className="border  py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <form
                action=""
                className="p-4 border rounded-md shadow-md "
                onSubmit={sendEmail}
              >
                <h2 className="text-md">Send Us a Message</h2>
                <div className="input-group my-3">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your fullname"
                  />
                </div>
                <div className="input-group my-3">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter a valid email"
                  />
                </div>
                <div className="input-group my-3">
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    className="form-control"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-100 bg-orange-400 py-2 text-white font-bold"
                >
                  {loading ? "Please wait..." : "Send Message"}
                </button>
              </form>
            </div>
            <div className="col-lg-6">
              <h2 className="text-md">Contact Details</h2>
              <p className="lead">
                Email: naafnig22@gmail.com <br /> Reg. No 189612 <br /> Date of
                Reg: 6/10/2022 <br />
                NAA FOUNDATION 8 Ebumawe Avenue, Ajaguro Village, Ikorodu Lagos
                Nigeria +234 8098881004
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border container  py-5"></div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default Contact;
