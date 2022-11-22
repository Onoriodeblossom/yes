import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PaystackPop from "@paystack/inline-js";
import check from "../assets/check-mark.png";
import { ToastContainer, toast } from "react-toastify";
const Donate = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const handleAmmount = (e) => {
    e.preventDefault();
    var price = document.getElementById("price");
    price.value = e.target.value;
    setAmount(e.target.value);
  };

  const pay = (e) => {
    e.preventDefault();
    if (email == "" || name == "" || phone == "" || amount == "") {
      alert("All fields are required");
    } else {
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: "pk_test_333758610a4ecb30c56395e15428cfcbcf296c0c",
        amount: amount * 100,
        email,
        name,
        phone,
        onSuccess: () =>
          toast.success("Donation made successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
          }),
        onClose: () =>
          toast.error("Transaction Cancelled", {
            position: toast.POSITION.BOTTOM_RIGHT,
          }),
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="donate py-5">
        <div className="container">
          <div className="hero-text text-center">
            <h2 className="capitalize text-white mt-24">
              NICHOLAS AKINWALE AGBENI FOUNDATION
            </h2>
            <p className=" text-white font-normal text-sm sm:text-lg opacity-90 text-center">
              Every human should have an opportunity to be educated, Lets make
              this happen
            </p>
          </div>
        </div>
      </div>

      <div className="py-5" style={{ background: "#fafafa" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className=" bg-white p-3 rounded-md shadow-md">
                <h2>DONATE NOW</h2>
                <p className="text-gray-600 mt-4 font-normal text-sm sm:text-md opacity-90">
                  Since 1870, Erie Neighborhood House has been a classroom, a
                  second home, and a community center for thousands of
                  low-income and recent immigrant families in Chicago. Your
                  investment in Erie House supports a legacy of award-winning
                  educational programming, legal services and mental health
                  programs for the whole family, from early childhood to
                  adulthood. Our wraparound services ensure lifelong success,
                  keep families together, and help communities thrive.
                </p>
                <div className="py-2">
                  <h4 className="text-sm">Other ways to Contribute</h4>
                  <div className="flex flex-wrap ">
                    <div className="flex items-center space-x-2">
                      <img src={check} alt="check mark" width={"5%"} />
                      <h2 className="text-sm mt-2">In Kind Donation</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src={check} alt="check mark" width={"5%"} />
                      <h2 className="text-sm mt-2">Start a Fundraiser</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src={check} alt="check mark" width={"5%"} />
                      <h2 className="text-sm mt-2">Doante Stock</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src={check} alt="check mark" width={"5%"} />
                      <h2 className="text-sm mt-2">Donate Your Car</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src={check} alt="check mark" width={"5%"} />
                      <h2 className="text-sm mt-2">Planned Giving</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form action="" className="p-3">
                <div className="row">
                  <div className="col-3 my-2">
                    <button
                      onClick={handleAmmount}
                      value="20"
                      className=" bg-orange-400 py-2.5 -mt-1 w-100 text-white rounded-md font-semibold text-sm sm:px-4 px-3"
                    >
                      $20
                    </button>
                  </div>
                  <div className="col-3 my-2">
                    <button
                      onClick={handleAmmount}
                      value="50"
                      className=" bg-orange-400 py-2.5 -mt-1 w-100 text-white rounded-md font-semibold text-sm sm:px-4 px-3"
                    >
                      $50
                    </button>
                  </div>
                  <div className="col-3 my-2">
                    <button
                      onClick={handleAmmount}
                      value="70"
                      className=" bg-orange-400 py-2.5 -mt-1 w-100 text-white rounded-md font-semibold text-sm sm:px-4 px-3"
                    >
                      $70
                    </button>
                  </div>
                  <div className="col-3 my-2">
                    <button
                      onClick={handleAmmount}
                      value="100"
                      className=" bg-orange-400 py-2.5 -mt-1 w-100 text-white rounded-md font-semibold text-sm sm:px-4 px-3"
                    >
                      $100
                    </button>
                  </div>

                  <div className="col-6 my-2">
                    <input
                      type="number"
                      className="form-control text-xs"
                      placeholder="Other amount please specify"
                      id="price"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>

                  <div className="col-lg-6 my-2">
                    <input
                      type="text"
                      className="form-control text-xs"
                      placeholder="Enter your fullname"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 my-2">
                    <input
                      type="email"
                      className="form-control text-xs"
                      placeholder="Enter a valid email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="col-lg-6 my-2">
                    <input
                      type="number"
                      className="form-control text-xs"
                      placeholder="Enter a valid phone number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="col-lg-12 my-2">
                    <button
                      className="bg-orange-400 w-100 py-2 text-white rounded-md font-bold"
                      onClick={pay}
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Donate;
