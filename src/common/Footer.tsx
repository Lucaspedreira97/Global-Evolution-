import React from "react";
import { Container, Link, Grid, Box, Divider, Typography } from "@mui/material";

export const Footer: React.FC<{}> = () => {
  return (
    <div>
      <footer>
        <Box
          position="sticky"
          color="white"
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 3, sm: 10 }}
          bgcolor="textSecondary"
        >
          <Container maxWidth="lg"  style={{ backgroundColor: "#1f2023" }}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1}><Typography variant="subtitle2" >Hi-Five APP</Typography></Box>
                <Box style={{ marginTop:15 }}>
                  <Link style={{textDecoration:"none", fontSize:17}} href="/" color="inherit">
                    Logo
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1}><Typography variant="subtitle2" >Contactanos</Typography></Box>
                <Box style={{ marginTop:15 }}>
                  <Link style={{textDecoration:"none", fontSize:17}} href="/" color="inherit">
                    Mail & WPP
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1}><Typography variant="subtitle2" >Copyrigth</Typography></Box>
                <Box style={{ marginTop:15 }}>
                  <Link style={{textDecoration:"none", fontSize:17}} href="/" color="inherit">
                    Link
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1}><Typography variant="subtitle2" >Politicas de Privacidad</Typography></Box>
                <Box style={{ marginTop:15 }}>
                  <Link style={{textDecoration:"none", fontSize:17}} href="/" color="inherit">
                    Link P&P
                  </Link>
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
