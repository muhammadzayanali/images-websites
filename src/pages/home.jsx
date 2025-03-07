import React from "react";
import { motion } from "framer-motion";
import Header from "../componets/header";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div className="bg-black">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }} 
        >
          <Header />
        </motion.header>

        <motion.div
          className="p-4 pt-[50px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img className="object-fill w-full" src="IMG_7567.JPG" alt="Home" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }} 
      >
        <ul>
          <li className="flex flex-row justify-center items-center gap-5 p-14">
            <a href="https://www.instagram.com/_raobilal">
              <FaInstagram className="hover:text-pink-600 text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/raobilalsami">
              <FaLinkedin className="hover:text-blue-500 text-2xl" />
            </a>
            <a href="https://www.facebook.com/share/1PG4m9kWdV/?mibextid=wwXIfr">
              <FaFacebookF className="hover:text-blue-700 text-2xl" />
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Home;
