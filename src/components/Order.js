import React from "react";
import { motion } from "framer-motion";

const containerVar = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      durtion: 0.2,
      delay: 0.1,
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVar = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVar}
      initial="initial"
      animate="animate"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVar}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <div className="pizza-topping">
        {pizza.toppings.map((topping) => (
          <motion.div variants={childVar} key={topping}>
            {topping}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Order;
