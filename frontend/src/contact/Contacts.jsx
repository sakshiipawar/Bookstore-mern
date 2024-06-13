import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";

function Contacts() {
  return (
    <>
      <Navbar textColor="text-white" />
      <div className="min-h-screen">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
