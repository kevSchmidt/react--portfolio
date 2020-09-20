import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import { Menu, AccountBox, Home, Apps, Drafts } from "@material-ui/icons";

import Footer from "./Footer";

import avatar from "../avatar.jpg";

// ========== CSS STYLES ===

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 280,
    background: "#222831",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#eeeeee",
  },
}));

// ========== MENU ITEMS ===

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AccountBox />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <Drafts />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

// ===== NAVBAR COMPONENT ===

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      {/* ---- Avatar ---- */}
      <Avatar className={classes.avatar} src={avatar} alt="Kevin Schmidt" />
      <Divider />

      {/* ---- List Item ---- */}
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222831" }}>
          <Toolbar>
            {/* ---- Icon ---- */}
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu style={{ color: "#eeeeee" }} />
            </IconButton>

            {/* ---- Title ---- */}
            <Typography variant="h5" style={{ color: "#eeeeee" }}>
              Portfolio
            </Typography>

            {/* ---- Mobil Slider ---- */}
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
