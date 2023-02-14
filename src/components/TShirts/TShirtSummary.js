import classes from "./TShirtSummary.module.css";
import { motion } from "framer-motion";

const TShirtSummary = () => {
  return (
    <motion.section
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}
      whileHover={{ scale: 1.1 }}
      className={classes.summary}
    >
      <h2>Stylish TShirt, Delivered To You</h2>
      <p>
        Choose your favorite TShirt from our broad selection of available
        TShirts and get ready to show your style.
      </p>
      <p>
        All our TShirts are made with high-quality fibre, and have 100 days
        money back guarantee!
      </p>
    </motion.section>
  );
};

export default TShirtSummary;
