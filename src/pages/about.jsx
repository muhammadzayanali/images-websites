import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../componets/header";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa6";

const About = () => {
  const bodyStyle = {
    fontFamily: '"Source Code Pro", monospace',
    fontStyle: "normal",
    fontWeight: 300,
    textTransform: "none",
    letterSpacing: "0em",
    lineHeight: "1.7em",
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <div className="md:p-10">
        <div className="flex justify-start lg:flex-row flex-col md:p-14 p-5 gap-10 mt-16">
          <motion.div
            className="flex justify-center items-start font-medium w-full md:m-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} 
            viewport={{ once: true }} 
          >
            <h1
              className="text-5xl"
              style={{
                fontFamily: "'Abel', Arial",
              }}
            >
              About Me
            </h1>
          </motion.div>

          <motion.div
            className="flex justify-center w-full flex-col"
            style={bodyStyle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Hi, I’m Bilal – a photographer and videographer with a passion for
              capturing creative angles and making every shot stand out. For me,
              it’s all about aesthetics, storytelling, and turning ordinary
              moments into something memorable.
              <br />
              <br />I specialize in portrait, automotive, food, and architecture
              photography, as well as video work that brings these visuals to
              life. Whether it’s capturing the vibe of a person, the details of
              a car, the beauty of a meal, or the design of a building, I love
              showcasing the best of every subject through both photos and film.{" "}
              <br />
              <br />
              Photography and videography are more than just work for me – they’re
              creative ways to tell a story and make people feel something. I’m
              always looking to push new ideas and keep things fresh and unique.
              <br />
              <br />
              If you like my work and want to collaborate, feel free to reach out.
              I’d love to connect!
              <br /> <br />
              <br /> <br />
              raobilalsami@gmail.com
            </p>

            {/* Image with Animation */}
            <motion.div
              className="my-5"
              initial={{ opacity: 0, y: 50 }} // 👈 Start hidden & slide up
              whileInView={{ opacity: 1, y: 0 }} // 👈 Fade in & slide up
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // 👈 More delay
              viewport={{ once: true }} // 👈 Animate only once
            >
              <img className="w-full" src="IMG_7947.JPG" alt="Bilal" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }} 
        >
          <ul>
            <li className="flex flex-row justify-center items-center gap-5 p-14">
              <a href="https://www.instagram.com/_raobilal">
                <FaInstagram className="hover:text-pink-600 text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/raobilalsami">
                <FaLinkedin className="hover:text-blue-500 text-xl" />
              </a>
              <a href="https://www.facebook.com/share/1PG4m9kWdV/?mibextid=wwXIfr">
                <FaFacebookF className="hover:text-blue-700 text-xl" />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
