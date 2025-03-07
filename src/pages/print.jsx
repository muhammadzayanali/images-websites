import React from "react";
import { motion } from "framer-motion"; // 👈 Import Framer Motion
import Header from "../componets/header";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa6";

const Print = () => {
  const navigate = useNavigate();

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
      {/* Header Animation */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Header />
      </motion.header>

      {/* Animated Content Section */}
      <motion.div
        className="flex gap-5 flex-col md:p-20 text-center justify-center items-center w-full"
        style={bodyStyle}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <p className="lg:px-10 px-5 text-center w-auto">
          I’m currently working on selecting which of my photos I’ll be
          offering as prints. I’m going through a mix of portraits, automotive
          shots, food, and architecture photography to decide what works best.
          Once I’ve finalised the collection, I’ll be updating this page with
          all the details.
        </p>
        <p className="lg:px-10 px-5 text-center w-auto">
          Thanks for your patience while I get everything ready – stay tuned
          for updates!
        </p>
        <p className="lg:px-10 px-5 text-center w-auto">
          In the meantime, if there’s a specific photo you’ve seen in my work
          that you’d like as a print, feel free to email me at
          <strong> raobilalsami@gmail.com</strong> and I’ll let you know if it’s possible.
        </p>
      </motion.div>

      {/* Social Media Icons with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
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
  );
};

export default Print;



// import React, { useState, useEffect } from "react";
// import Header from "../componets/header";
// import { useNavigate } from "react-router-dom";
// import { FaInstagram } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";

// const Print = () => {
//   const navigate = useNavigate();

//   const bodyStyle = {
//     fontFamily: '"Source Code Pro", monospace',
//     fontStyle: "normal",
//     fontWeight: 300,
//     textTransform: "none",
//     letterSpacing: "0em",
//     lineHeight: "1.7em",
//   };

//   const obj = [
//     {
//       src: "/pimg1.jpg",
//       label: "Winter on Port Street",
//       price: "19.00",
//       para: "The Northern Quarter’s Port Street in the snow.",
//       para2: " Please allow 7 days for printing/shipping.",
//     },
//     {
//       src: "/pimg2.jpg",
//       label: "Hotspur Press",
//       price: "19.00",
//       para: "The historic Hotspur Press building. ",
//       para2: "Please allow 7 days for printing/shipping.",
//     },
//     {
//       src: "/pimg3.jpg",
//       label: "Sankeys Soap",
//       price: "19.00",
//       para: "The iconic Sankeys Soap building in the Ancoats area of Manchester.",
//       para2:
//         " Photograph printed on Fuji Lustre DPII Professional Paper. Please allow 7 days for printing/shipping.",
//     },
//     {
//       src: "/pimg4.jpg",
//       label: "Stretford End",
//       price: "19.00",
//       para: "The famous Stretford End of Manchester United’s home. Photograph printed on Fuji Lustre DPII Professional Paper.",
//       para2: " Please allow 7 days for printing/shipping.",
//     },
//     {
//       src: "/pimg5.jpg",
//       label: "Kimpton Clocktower",
//       price: "19.00",
//       para: "The Northern Quarter’s Port Street in the snow.",
//       para2: " Please allow 7 days for printing/shipping.",
//     },
//   ];

//   const handleNavigate = (item) => {
//     navigate("/detail", {
//       state: {
//         ...item,
//       },
//     });
//   };

//   // const [showHeader, setShowHeader] = useState(true);
//   // const [lastScrollY, setLastScrollY] = useState(0);
//   // const [transitionDuration, setTransitionDuration] = useState("duration-[900ms]");

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
//       <header>
//         <header
//         // className={`w-full bg-white fixed top-0 z-50 transition-transform ${transitionDuration} ${
//         //   showHeader ? "translate-y-0" : "-translate-y-full"
//         // }`}
//         >
//           <Header />
//         </header>
//       </header>
//       <div>
//         <div
//           className="flex gap-5 flex-col md:p-20 text-center justify-center items-center w-full"
//           style={bodyStyle}
//         >
//           <p
//             className="lg:px-10 px-5 text-center w-auto"
//             style={{ fontFamily: "Source Code Pro," }}
//           >
//             I’m currently working on selecting which of my photos I’ll be
//             offering as prints. I’m going through a mix of portraits, automotive
//             shots, food, and architecture photography to decide what works best.
//             Once I’ve finalised the collection, I’ll be updating this page with
//             all the details.
//             <br />
//           </p>
//           <p className="lg:px-10 px-5 text-center w-auto">
//             Thanks for your patience while I get everything ready – stay tuned
//             for updates!
//           </p>
//           <p className="lg:px-10 px-5 text-center w-auto">
//             In the meantime, if there’s a specific photo you’ve seen in my work
//             that you’d like as a print, feel free to email me at
//             raobilalsami@gmail.com and I’ll let you know if it’s possible.
//           </p>
//         </div>
//         {/* <div className="flex flex-col justify-center items-center p-7">
//           <h1 className="text-3xl font-extrabold" style={bodyStyle}>
//             Prints
//           </h1>
//           <hr className="w-full border-gray-300 my-4" />
//           <div className="w-full">
//             <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 place-items-center h-full">
//               {obj.map((item, index) => (
//                 <button
//                   className=" my-2"
//                   key={index}
//                   onClick={() => handleNavigate(item)}
//                 >
//                   <img
//                     className="h-full w-full"
//                     src={item.src}
//                     alt={item.label}
//                   />
//                   <h1 className="text-start md:text-2xl text-xl font-light">
//                     {item.label}
//                   </h1>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div> */}
//         <div>
//           <div>
//             <ul>
//               <li className="flex flex-row justify-center items-center gap-5 p-14">
//                 <a href="https://www.instagram.com/_raobilal">
//                   <FaInstagram className="hover:text-pink-600" />
//                 </a>
//                 <a href="https://www.linkedin.com/in/raobilalsami">
//                   <FaLinkedin className="hover:text-blue-500" />
//                 </a>
//                 <a href="https://www.facebook.com/share/1PG4m9kWdV/?mibextid=wwXIfr">
//                   <FaFacebookF className="hover:text-blue-700" />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Print;
