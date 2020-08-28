import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import Navbar from "./Navbar";

import project1 from "../images/movie-selection.png";
import project2 from "../images/vinyl-store.png";
import project3 from "../images/paris.png";
import project4 from "../images/todolist.png";

// ========== CSS STYLES ===

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    borderRadius: "5px",
    boxShadow: "0 3px 4px black",
    margin: "3rem auto",
  },
});

// ========== PORTFOLIO COMPONENT ===

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* ======== Project 1 === */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              {/* ---- Image ---- */}
              <CardMedia
                component="img"
                alt="Project 1"
                height="180"
                image={project1}
              />

              {/* ---- Title ---- */}
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Movie Selection
                </Typography>

                {/* ---- Text ---- */}
                <Typography variant="body2" color="textSecondary" component="p">
                  This project use the DOM to generate a list of movies from a
                  local database. The user can discover more information about a
                  movie when selected.
                </Typography>
              </CardContent>
            </CardActionArea>

            {/* ---- Buttons ---- */}
            <CardActions>
              <Button size="small" color="primary">
                code
              </Button>
              <Button size="small" color="primary">
                preview
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* ======== Project 2 === */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              {/* ---- Image ---- */}
              <CardMedia
                component="img"
                alt="Project 2"
                height="180"
                image={project2}
              />
              <CardContent>
                {/* ---- Title ---- */}
                <Typography gutterBottom variant="h5">
                  Vinyl Store
                </Typography>

                {/* ---- Text ---- */}
                <Typography variant="body2" color="textSecondary" component="p">
                  Online store made only for learning purposes using React. I am
                  using my own vinyls collection to exercise on a large
                  e-commerce website.
                </Typography>
              </CardContent>
            </CardActionArea>

            {/* ---- Buttons --- */}
            <CardActions>
              <Button size="small" color="primary">
                code
              </Button>
              <Button size="small" color="primary">
                preview
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* ======== Project 3 === */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              {/* ---- Image ---- */}
              <CardMedia
                component="img"
                alt="Project 3"
                height="180"
                image={project3}
              />
              <CardContent>
                {/* ---- Title ---- */}
                <Typography gutterBottom variant="h5">
                  Paris XIX
                </Typography>

                {/* ---- Text ---- */}
                <Typography variant="body2" color="textSecondary" component="p">
                  Touristic website made only for learning purposes using
                  Bootstrap. Discover the 19th district of Paris.
                </Typography>
              </CardContent>
            </CardActionArea>

            {/* ---- Buttons --- */}
            <CardActions>
              <Button size="small" color="primary">
                code
              </Button>
              <Button size="small" color="primary">
                preview
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* ======== Project 4 === */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              {/* ---- Image ---- */}
              <CardMedia
                component="img"
                alt="Project 4"
                height="180"
                image={project4}
              />
              <CardContent>
                {/* ---- Title ---- */}
                <Typography gutterBottom variant="h5">
                  ToDo List
                </Typography>

                {/* ---- Text ---- */}
                <Typography variant="body2" color="textSecondary" component="p">
                  This project was made in school to practice React. The user
                  can add new items to the list, check them as done or delete
                  them.
                </Typography>
              </CardContent>
            </CardActionArea>

            {/* ---- Buttons --- */}
            <CardActions>
              <Button size="small" color="primary">
                code
              </Button>
              <Button size="small" color="primary">
                preview
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
