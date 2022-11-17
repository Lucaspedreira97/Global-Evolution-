import React from "react";
import { Container, Link, Grid, Box, Divider, Typography } from "@mui/material";

export const Footer2: React.FC<{}> = () => {
  return (
    <div>
      <footer>
        <Box
          position="sticky"
          color="white"
          px={{ xs: 3, sm: 2 }}
          py={{ xs: 3, sm: 2 }}
          bgcolor="textSecondary"
        >
          <Container maxWidth="lg">
            <Grid container spacing={0}>
              <Grid item>
                <Box>
                  <Typography
                    sx={{ fontStyle: "italic", fontSize: 15 }}
                    color="gray"
                  >
                    © Global Evolution 2022
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
      <Divider />
    </div>
  );
};
