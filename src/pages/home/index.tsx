import { Box, Button, Container } from "@mui/material";
import React from "react";
import MediaCard from "../../components/card";
import { HeaderComponent } from "../../Headers";



export const HomePage: React.FC<{}> = () => {
  return (
    <Container sx={{mt: 9}} maxWidth="xl">
     <HeaderComponent title="Descubrí todo lo que podés hacer desde la APP"/>
     <MediaCard/>
    </Container>
  );
};
