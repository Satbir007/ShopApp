
import React from 'react'
import classes from "./Pagination.module.css";

const Pagination = (props) => {

    const pageIndex = Math.ceil(props.products.length / 5);
    // const page = props.page;
//   console.log(pageIndex);

    const selectPagehandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= pageIndex && selectedPage !== props.page)
          props.setPage(selectedPage);
      };

  return (
    <div className={classes.pagination}>
    <span
      className={props.page > 1 ? "" : `${classes.pagination__disable}`}
      onClick={() => selectPagehandler(props.page - 1)}
    >
      Prev
    </span>
    {[...Array(pageIndex)].map((_, i) => {
      return (
        <span
          className={
            props.page === i + 1 ? `${classes.pagination__selected}` : ""
          }
          onClick={() => selectPagehandler(i + 1)}
          key={i}
        >
          {" "}
          {i + 1}
        </span>
      );
    })}
    <span
      className={props.page < pageIndex ? "" : `${classes.pagination__disable}`}
      onClick={() => selectPagehandler(props.page + 1)}
    >
      Next
    </span>
  </div>
  )
}

export default Pagination