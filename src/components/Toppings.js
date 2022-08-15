import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonAnimation, hoverAnimation, containerVar } from "./Base";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVar}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.2 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>
      {pizza.toppings.length > 0 && (
        <motion.div
          className="toppings-btn"
          variants={buttonAnimation}
          initial="initial"
          animate="animate"
        >
          <Link to="/order">
            <motion.button whileHover={hoverAnimation.hover}>
              Order
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Toppings;
