import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; 

const Header = () => {
  const headingStyle = {
    fontFamily: '"Abel", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
    textTransform: "none",
    letterSpacing: "0em",
    lineHeight: "1.4em",
  };

  const bodyStyle = {
    fontFamily: '"Source Code Pro", monospace',
    fontStyle: "normal",
    fontWeight: 300,
    textTransform: "none",
    letterSpacing: "0em",
    lineHeight: "1.7em",
  };

  const location = useLocation();

  const isActive = (item) => {
    const currentPath = location.pathname;
    return (
      currentPath === item.to ||
      (item.subpages &&
        item.subpages.some((subpage) => currentPath.startsWith(subpage)))
    );
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Automotive", to: "/automotive" },
    { label: "Portraits", to: "/portraits" },
    { label: "Food", to: "/food" },
    { label: "Architectural", to: "/architecture" },
    { label: "Prints", to: "/print" },
    { label: "About", to: "/about" },
  ];

  return (
    <div>
      <Disclosure
        as="header"
        className="bg-black sticky top-0 left-0 right-0 z-50 shadow-md"
      >
        {({ open, close }) => (
          <>
            <div className="flex justify-between items-center p-6 px-8">
              <Link to="/">
                <img
                  className="w-10 h-10 hover:scale-125 cursor-pointer"
                  src="lightlogo.png"
                  alt="Logo"
                />
              </Link>

              <div className="hidden lg:block">
                <nav>
                  <ul
                    className="flex gap-4 justify-center items-center"
                    style={bodyStyle}
                  >
                    <div className="w-[550px] flex justify-center items-center flex-wrap gap-1">
                      {navItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.to}
                          className={`text-white p-1 ${
                            isActive(item)
                              ? "text-slate-800 border-b border-white p-1"
                              : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </ul>
                </nav>
              </div>

              <div className="hidden lg:flex items-center gap-5">
                <a href="https://www.instagram.com/_raobilal">
                  <FaInstagram className="hover:text-pink-600 text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/raobilalsami">
                  <FaLinkedin className="hover:text-blue-500 text-xl" />
                </a>
                <a href="https://www.facebook.com/share/1PG4m9kWdV/?mibextid=wwXIfr">
                  <FaFacebookF className="hover:text-blue-700 text-xl" />
                </a>
              </div>

              <Disclosure.Button className="lg:hidden flex flex-col gap-1.5 p-2">
                <div
                  className={`h-0.5 w-6 bg-white transform transition-transform duration-300 ${
                    open ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <div
                  className={`h-0.5 w-6 bg-white transform transition-transform duration-300 ${
                    open ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </Disclosure.Button>
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="lg:hidden fixed inset-0 bg-black z-50 flex flex-col justify-center items-center gap-10 py-9 h-screen"
                >
                  <nav>
                    <ul
                      className="flex flex-col items-center"
                      style={bodyStyle}
                    >
                      {navItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.to}
                          onClick={close}
                          className={`text-white text-3xl ${
                            isActive(item)
                              ? "text-slate-800 border-b border-white"
                              : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </ul>
                  </nav>

                  <div className="flex gap-5">
                    <a href="https://www.instagram.com/_raobilal">
                      <FaInstagram className="hover:text-pink-600" />
                    </a>
                    <a href="https://www.linkedin.com/in/raobilalsami">
                      <FaLinkedin className="hover:text-blue-500" />
                    </a>
                    <a href="https://www.facebook.com/share/1PG4m9kWdV/?mibextid=wwXIfr">
                      <FaFacebookF className="hover:text-blue-700" />
                    </a>
                  </div>

                  <Disclosure.Button className="absolute top-6 right-6 p-3">
                    <div
                      className={`h-0.5 w-8 bg-white transform transition-transform duration-300 ${
                        open ? "rotate-45 translate-y-0.5" : ""
                      }`}
                    />
                    <div
                      className={`h-0.5 w-8 bg-white transform transition-transform duration-300 ${
                        open ? "-rotate-45 -translate-y-0.5" : ""
                      }`}
                    />
                  </Disclosure.Button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
