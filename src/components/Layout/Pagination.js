import { motion } from "framer-motion";
import React from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  const pageIndex = Math.ceil(props.products.length / 5);
  // const page = props.page;
  //   console.log(pageIndex);

  const selectPagehandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= pageIndex &&
      selectedPage !== props.page
    )
      props.setPage(selectedPage);
  };

  return (
    <div className={classes.pagination}>
      <motion.span
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 0.9 }}
        className={props.page > 1 ? "" : `${classes.pagination__disable}`}
        onClick={() => selectPagehandler(props.page - 1)}
      >
        Prev
      </motion.span>
      {[...Array(pageIndex)].map((_, i) => {
        return (
          <motion.span
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 0.9 }}
            className={
              props.page === i + 1 ? `${classes.pagination__selected}` : ""
            }
            onClick={() => selectPagehandler(i + 1)}
            key={i}
          >
            {" "}
            {i + 1}
          </motion.span>
        );
      })}
      <motion.span
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 0.9 }}
        className={
          props.page < pageIndex ? "" : `${classes.pagination__disable}`
        }
        onClick={() => selectPagehandler(props.page + 1)}
      >
        Next
      </motion.span>
    </div>
  );
};

export default Pagination;
