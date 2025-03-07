import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from "../componets/header";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Live = () => {
  const images = [
    "IMG_16.JPG",
    "IMG_17.JPG",
    "IMG_18.JPG",
    "IMG_19.JPG",
    "IMG_20.JPG",
    "IMG_1.JPG",
    "IMG_2.JPG",
    "IMG_3.JPG",
    "IMG_4.JPG",
    "IMG_5.JPG",
    "IMG_6.JPG",
    "IMG_7.JPG",
    "IMG_8.JPG",
    "IMG_9.JPG",
    "IMG_10.JPG",
    "IMG_11.JPG",
    "IMG_12.JPG",
    "IMG_13.jpg",
    "IMG_14.JPG",
  ];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(handleResize.timeout);
      handleResize.timeout = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // use to clean up the event listener
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="p-4">
        <div className="mt-5">
          <ResponsiveMasonry
            key={screenWidth}
            columnsCountBreakPoints={{
              350: 1,
              640: 2,
              1024: 3,
              1280: 4,
            }}
          >
            <Masonry gutter="10px">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden object-fill md:p-0 p-10"
                  style={{
                    height:
                      screenWidth >= 768
                        ? `${Math.floor(Math.random() * 170) + 300}px`
                        : "auto",
                  }}
                >
                  <LazyLoadImage
                    src={src}
                    alt={`Gallery item ${index + 1}`}
                    effect="blur"
                    loading="Lazy"
                    placeholderSrc={`thumbnails/${src}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <div>
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
        </div>
      </main>
    </div>
  );
};

export default Live;

// import React, { useState, useEffect } from "react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import Header from "../componets/header";
// import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

// const Live = () => {
//   const images = [
//     "img1.jpg",
//     "img2.jpg",
//     "img3.jpg",
//     "img4.jpg",
//     "img5.jpg",
//     "img6.jpg",
//     "img7.jpg",
//     "img8.jpg",
//     "img9.jpg",
//     "img10.jpg",
//     "img11.jpg",
//     "img12.jpg",
//     "img13.jpg",
//     "img14.jpg",
//     "img15.jpg",
//     "img16.jpg",
//     "img17.jpg",
//   ];

//   // const [showHeader, setShowHeader] = useState(true);
//   // const [lastScrollY, setLastScrollY] = useState(0);
//   // const [transitionDuration, setTransitionDuration] =
//   //   useState("duration-[900ms]");

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const currentScrollY = window.scrollY;

//   //     if (currentScrollY > lastScrollY && currentScrollY > 100) {
//   //       setTransitionDuration("duration-[50ms]");
//   //       setShowHeader(false);
//   //     } else if (currentScrollY < lastScrollY) {
//   //       setTransitionDuration("duration-[1500ms]");
//   //       setShowHeader(true);
//   //     }
//   //     setLastScrollY(currentScrollY);
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, [lastScrollY]);

//   return (
//     <div>
//       <header
//       // className={`w-full bg-white fixed top-0 z-50 transition-transform ${transitionDuration} ${
//       //   showHeader ? "translate-y-0" : "-translate-y-full"
//       // }`}
//       >
//         <Header />
//       </header>

//       <main className="p-4 pt-[80px]">
//         <div className="mt-7">
//           <ResponsiveMasonry
//             columnsCountBreakPoints={{
//               350: 1,
//               640: 2,
//               1024: 2,
//               1280: 4,
//             }}
//           >
//             <Masonry gutter="10px">
//               {images.map((src, index) => (
//                 <div key={index} className="overflow-hidden">
//                   <img
//                     src={src}
//                     alt={`Gallery item ${index + 1}`}
//                     className="w-96 h-auto object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               ))}
//             </Masonry>
//           </ResponsiveMasonry>
//         </div>
//         <div>
//           <div>
//             <ul>
//               <li className="flex flex-row justify-center items-center gap-5 p-14">
//                 <FaInstagram />
//                 <FaTwitter />
//                 <FaFacebookF />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Live;
