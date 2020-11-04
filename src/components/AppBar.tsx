import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function CustomAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bus Stop Crowdsourcing
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/"
            data-testid="home-page-link"
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/bus-stops"
            data-testid="stops-page-link"
          >
            Stops
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
