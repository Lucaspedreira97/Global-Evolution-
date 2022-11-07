import { Box, Typography, Grid, Divider } from "@mui/material";
import React from "react";

type HeaderProps = {
  title: string;
};
// type HeaderProps = {
//   title: string;
//   description: string;
//   element?: React.ReactNode | null;
// };

export const HeaderComponent: React.FC<HeaderProps> = ({
  title
}) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "350px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100" }}
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
                <Typography variant="h1" fontSize={22} textAlign="center">
                  {title}
                </Typography>
              </Grid>
              {/* <Grid item></Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};
//Descubrí todo lo que podés hacer desde la APP
