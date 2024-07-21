import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr />
      <footer>
        <div className="py-12">
          <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col justify-between items-center ">
              <div className="flex space-x-4 text-2xl">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaTiktok />
              </div>
              <div className="mt-8 border-t border-gray-950 pt-3 flex flex-col items-center ">
                <p>&copy; your Company All Reserved </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
