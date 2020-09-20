import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

import Navbar from "./Navbar";

// ========== CSS STYLES ===

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#393e46",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #eeeeee",
      right: "40px",
      boxShadow: "0 2px 2px black",
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
    borderBottom: "2px solid #eeeeee",
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
      borderColor: "#00adb5 #00adb5 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#eeeeee",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #00adb5 #00adb5",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    boxShadow: "0 2px 4px black",
    borderRadius: "5px",
    background: "#00adb5",
    color: "#eeeeee",
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
    color: "#eeeeee",
    textShadow: "0px 1px 2px black",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#eeeeee",
    textShadow: "1px 2px 2px black",
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
        <Typography variant="h2" align="center" className={classes.heading}>
          skills
        </Typography>

        <Box component="div" className={classes.timeLine}>
          {/* ======== First Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Aug 2020
          </Typography>

          {/* ---- Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              MERN stack
            </Typography>

            <Typography variant="body1" style={{ color: "#00adb5" }}>
              Digital Career Institute
            </Typography>

            <Typography variant="subtitle1" style={{ color: "#eeeeee" }}>
              MongoDB | Express | React | Node <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique libero velit tempore rem suscipit inventore aut
              voluptates! Recusandae necessitatibus ut qui sed.
            </Typography>
          </Box>

          {/* ======== Second Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Jun 2020
          </Typography>

          {/* ----Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              react
            </Typography>

            <Typography variant="body1" style={{ color: "#00adb5" }}>
              Digital Career Institute
            </Typography>

            <Typography variant="subtitle1" style={{ color: "#eeeeee" }}>
              React Router | React Lifecycle | React Hooks | Redux <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae at natus et, quas adipisci fugiat nesciunt laudantium
              similique aliquid, placeat excepturi unde odit.
            </Typography>
          </Box>

          {/* ======== Third Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Mai 2020
          </Typography>

          {/* ---- Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              DOM
            </Typography>

            <Typography variant="body1" style={{ color: "#00adb5" }}>
              Digital Career Institute
            </Typography>

            <Typography variant="subtitle1" style={{ color: "#eeeeee" }}>
              Document Object Model | Package JSON | API <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              iste possimus perferendis, beatae ut quaerat, ipsa ullam
              dignissimos consequatur.
            </Typography>
          </Box>

          {/* ======== Fourth Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Mar 2020
          </Typography>

          {/* ---- Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              html & css
            </Typography>

            <Typography variant="body1" style={{ color: "#00adb5" }}>
              Digital Career Institute
            </Typography>

            <Typography variant="subtitle1" style={{ color: "#eeeeee" }}>
              HTML | CSS | SASS | Bootstrap <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              eligendi inventore consequuntur, vel expedita nesciunt obcaecati
              dicta vitae!
            </Typography>
          </Box>

          {/* ======== Fifth Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Jan 2020
          </Typography>

          {/* ---- Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              Javascript
            </Typography>

            <Typography variant="body1" style={{ color: "#00adb5" }}>
              Digital Career Institute
            </Typography>

            <Typography variant="subtitle1" style={{ color: "#eeeeee" }}>
              Javascript Basics | Objects-Functions | ES6 <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus ipsa accusantium, maiores harum unde cupiditate
              consectetur esse.
            </Typography>
          </Box>

          {/* ======== Sixth Timeline === */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Dec 2019
          </Typography>

          {/* ---- Text ---- */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              GitHub
            </Typography>

            <Typography variant="body1" style={{ color: "#00adb5" }}>
              Digital Career Institute
            </Typography>

            <Typography variant="subtitle1" style={{ color: "#eeeeee" }}>
              Terminal | Git <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              possimus voluptate nisi nesciunt obcaecati iusto! Similique,
              nostrum.
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Resume;
