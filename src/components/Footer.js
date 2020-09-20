import React from "react";

import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

// ========== CSS STYLES ===

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

// ========== FOOTER COMPONENT ===

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      {/* ---- LinkedIn ---- */}
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        href="https://www.linkedin.com/in/kev-schmidt"
        target="blank"
        rel="noopener"
        icon={<LinkedIn />}
      />

      {/* ---- GitHub ---- */}
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        href="https://github.com/kevSchmidt"
        target="blank"
        rel="noopener"
        icon={<GitHub />}
      />

      {/* ---- Instagram ---- */}
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        href="https://www.instagram.com/tete.dans.la.lune"
        target="blank"
        rel="noopener"
        icon={<Instagram />}
      />
    </BottomNavigation>
  );
};

export default Footer;
