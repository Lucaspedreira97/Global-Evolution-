import { Box, Typography, Grid, Divider } from "@mui/material";
import React from "react";

type HeaderProps = {
  title: string;
};

export const HeaderComponent: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "150px",
        }}
      >
        <Grid item xs={5}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100" }}
          >
            <Grid item>
              <Typography variant="h1" fontSize={44} textAlign="center">
                {title}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
//Descubrí todo lo que podés hacer desde la APP
