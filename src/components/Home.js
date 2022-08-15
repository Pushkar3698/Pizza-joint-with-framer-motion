import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { hoverAnimation } from "./Base";

const Home = () => {
  return (
    <motion.div
      className="home container"
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        Welcome to Pizza Joint
      </motion.h2>

      <motion.div
        className="home-btn"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, transition: 0.5 }}
      >
        <Link to="/base">
          <motion.button whileHover={hoverAnimation.hover}>
            Create Your Pizza
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
