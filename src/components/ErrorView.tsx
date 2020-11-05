import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import BackIcon from "@material-ui/icons/ArrowBack";
import ReloadIcon from "@material-ui/icons/Refresh";
import MainPageIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    paddingTop: theme.spacing(2),
  },
  buttonGroup: {
    marginTop: theme.spacing(2),
    maxWidth: "100%",
  },
}));

type ErrorViewProps = {
  errorMessage?: string;
};

const ErrorView = ({ errorMessage }: ErrorViewProps): ReactElement => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Something is wrong :(</Typography>
      <Typography variant="body1">
        {errorMessage && errorMessage.toString()}
      </Typography>
      <ButtonGroup
        size="large"
        color="primary"
        aria-label="Error page actions"
        variant="text"
        className={classes.buttonGroup}
      >
        <Button
          onClick={() => {
            navigate(-1); // equivalent of v5 history.goBack()
          }}
          startIcon={<BackIcon></BackIcon>}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            window.location.reload();
          }}
          startIcon={<ReloadIcon></ReloadIcon>}
        >
          Reload
        </Button>
        <Button
          component={Link}
          to="/"
          startIcon={<MainPageIcon></MainPageIcon>}
        >
          Main Page
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ErrorView;
