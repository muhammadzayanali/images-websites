import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import Header from "../componets/header";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

const images = [
  "/Portraits category/IMG1.jpg",
  "/Portraits category/IMG2.jpg",
  "/Portraits category/IMG3.jpg",
  "/Portraits category/IMG4.JPG",
  "/Portraits category/IMG5.JPG",
  "/Portraits category/IMG6.JPG",
  "/Portraits category/IMG7.JPG",
  "/Portraits category/IMG8.JPG",
  "/Portraits category/IMG9.JPG",
];

const Portraits = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [imageHeights, setImageHeights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setTimeout(() => setIsLoading(false), 550);
        }
      };
    });
  }, []);

  useEffect(() => {
    const heights = images.map(() => {
      if (window.innerWidth <= 425) return "auto";
      if (window.innerWidth >= 2560) return Math.floor(Math.random() * 250) + 550;
      if (window.innerWidth >= 2000 && window.innerWidth < 2560) return Math.floor(Math.random() * 220) + 500;
      if (window.innerWidth >= 1600 && window.innerWidth < 2000) return Math.floor(Math.random() * 200) + 480;
      if (window.innerWidth >= 1440 && window.innerWidth < 1600) return Math.floor(Math.random() * 180) + 350;
      if (window.innerWidth >= 768 && window.innerWidth < 1280) return Math.floor(Math.random() * 150) + 350;
      return Math.floor(Math.random() * 170) + 310;
    });

    setImageHeights(heights);
  }, [screenWidth]);

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(handleResize.timeout);
      handleResize.timeout = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="p-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-5"
          >
            <ResponsiveMasonry
              key={screenWidth}
              columnsCountBreakPoints={{
                350: 1,
                640: 2,
                768: 3,
                1024: 3,
                1280: 4,
                1440: 4,
                1600: 5,
                1920: 5,
                2000: 5,
                2560: 5,
              }}
            >
              <Masonry gutter="10px">
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    className="overflow-hidden md:p-0 p-2"
                    style={{
                      height: screenWidth <= 425 ? "auto" : `${imageHeights[index]}px`,
                      width: "100%",
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <LazyLoadImage
                      src={src}
                      alt={`Gallery item ${index + 1}`}
                      loading="lazy"
                      effect="blur"
                      className="w-full object-cover hover:scale-110 transition-transform duration-300"
                      style={{
                        height: screenWidth <= 425 ? "auto" : "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
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
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Portraits;
