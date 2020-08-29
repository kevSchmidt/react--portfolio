import React from "react";

import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

import Navbar from "./Navbar";
import Header from "./Header";

// ========== CSS STYLES ===

const useStyles = makeStyles({
  particlesCanva: {
    background: "#264653",
    position: "absolute",
    opacity: "0.3",
  },
});

// ========== HOME COMPONENT ===

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Header />

      {/* ---- Background Animation ---- */}
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 850,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 4,
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
                opacity_min: 0.3,
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
