import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

import Navbar from "./Navbar";

// ========== CSS STYLES ===

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

// ========== RESUME COMPONENT ===

const Resume = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        {/* ---- Title --- */}
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>

        <Box component="div" className={classes.timeLine}>
          {/* ======== First Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2013
          </Typography>

          {/* ---- Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              Web Design
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              Company name where worked
            </Typography>

            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptatem fuga doloribus quibusdam ratione delectus officia
              possimus dolor. Excepturi, dolores!
            </Typography>
          </Box>

          {/* ======== Second Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2014
          </Typography>

          {/* ----Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              html & css
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              Company name where worked
            </Typography>

            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptatem fuga doloribus quibusdam ratione delectus officia
              possimus dolor. Excepturi, dolores!
            </Typography>
          </Box>

          {/* ======== Third Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015
          </Typography>

          {/* ---- Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              javascript full stack
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              Company name where worked
            </Typography>

            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptatem fuga doloribus quibusdam ratione delectus officia
              possimus dolor. Excepturi, dolores!
            </Typography>
          </Box>

          {/* ======== Fourth Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>

          {/* ---- Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              React & Redux
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              Company name where worked
            </Typography>

            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptatem fuga doloribus quibusdam ratione delectus officia
              possimus dolor. Excepturi, dolores!
            </Typography>
          </Box>

          {/* ======== Fifth Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018-2020
          </Typography>

          {/* ---- Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              mern stack
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              Company name where worked
            </Typography>

            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptatem fuga doloribus quibusdam ratione delectus officia
              possimus dolor. Excepturi, dolores!
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Resume;
