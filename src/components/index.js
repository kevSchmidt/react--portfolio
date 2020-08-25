import React from "react";

import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

import Navbar from "./Navbar";
import Header from "./Header";

// ========== CSS STYLES ===

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: "0.3",
  },
});

// ========== HOME ===

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </React.Fragment>
  );
};

export default Home;
