import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const HomePage = () => {
  useEffect(() => {
    document.title = "Crowdsourcing App";
  }, []);

  return (
    <Container maxWidth={"md"}>
      <Box
        display="flex"
        width={"100%"}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant={"h2"}>Home Page</Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
