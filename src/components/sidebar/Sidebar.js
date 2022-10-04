import React, { createContext, useState } from "react";
import "./style.css";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch, BiCog, BiDonateHeart } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { GiTireIronCross } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const WidthChange = createContext();
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <FaUser />,
  },
  {
    path: "/",
    name: "Message",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/filemanager",
    name: "FileManager",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/cart",
    name: "Cart",
    icon: <BsCartCheck />,
  },
  {
    path: "/like",
    name: "Like",
    icon: <BiDonateHeart />,
  },
  {
    path: "/setting",
    name: "Settings",
    icon: <BiCog />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [width, setwidth] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "160px",
      padding: "5px 15px",
      transition: {
        duration: 0.5,
      },
    },
  };

  const linkAnimation = {
    hidden: {
      width: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <WidthChange.Provider value={width}>
      <div className="main-container">
        <motion.div
          animate={{ width: isOpen ? "300px" : "50px" , height:"100vh"}}
          className="side-bar"
        >
          <AnimatePresence>
            <div className="logoSec">
              {isOpen && (
                <motion.h1
                  variants={linkAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  Logo
                </motion.h1>
              )}

              <div className="bars">
                {!isOpen ? (
                  <FaBars
                    className="cross"
                    onClick={() => {
                      toggle();
                      setwidth(!width);
                    }}
                  />
                ) : (
                  <GiTireIronCross
                    className="cross"
                    onClick={() => {
                      toggle();
                      setwidth(!width);
                    }}
                  />
                )}
              </div>
            </div>
          </AnimatePresence>
          <div className="search">
            <div className="iconSearch">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  variants={inputAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  type="text"
                  placeholder="search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route) => (
              <NavLink className="links" key={route.name} to={route.path}>
                <div className="icons">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={linkAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link-text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <main style={{width:"100%"}}>{children}</main>
      </div>
    </WidthChange.Provider>
  );
};

// export default Sidebar;
export { WidthChange, Sidebar };
