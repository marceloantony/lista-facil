import React from "react";
import { Box, Container } from "./styles";
import { Dashboard, Logo, ListsRecent } from "../../components";

export function Home() {
  return (
    <Container>
      <Box>
        <Logo />
        <Dashboard />
      </Box>
      <ListsRecent />
    </Container>
  );
}
