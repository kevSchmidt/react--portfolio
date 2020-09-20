import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import Navbar from "./Navbar";

// ========== CSS STYLES ===

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "#00adb5",
    borderColor: "#00adb5",
  },
}));

// ========== INPUT FIELD ===

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#00adb5",
    },
    "& label": {
      color: "#eeeeee",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#eeeeee",
      },
      "&:hover fieldset": {
        borderColor: "#eeeeee",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#eeeeee",
      },
    },
  },
})(TextField);

// ========== CONTACTS COMPONENT ===

const Contacts = () => {
  const classes = useStyles();

  return (
    <Box component="div" style={{ background: "#393e46", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          {/* ---- Title ---- */}
          <Typography
            variant="h5"
            style={{
              color: "#00adb5",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Let's keep in touch...
          </Typography>

          {/* ---- Name Field ---- */}
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />

          {/* ---- Email Field ---- */}
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />

          {/* ---- Company Field ---- */}
          <InputField
            fullWidth={true}
            label="Company"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />

          {/* ---- Submit Button ---- */}
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
