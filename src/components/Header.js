import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";

import avatar from "../avatar.jpg";

// ========== CSS STYLES ===

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#eeeeee",
    textShadow: "1px 2px 2px black",
  },
  subtitle: {
    color: "#eeeeee",
    marginBottom: "3rem",
    textShadow: "1px 2px 2px black",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
  },
}));

// ========== HEADER COMPONENT ===

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        {/* ---- Avatar ---- */}
        <Avatar className={classes.avatar} src={avatar} alt="Kevin Schmidt" />
      </Grid>

      {/* ---- Name ---- */}
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Kevin Schmidt"]} typeSpeed={60} />
      </Typography>
      <br />

      {/* ---- Subtitle ---- */}
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web Developer", "Web Designer"]}
          typeSpeed={60}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
