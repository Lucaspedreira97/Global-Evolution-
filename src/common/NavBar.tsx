import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import img from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

const pages = ["Descubrí Hi Five", "Contactanos"];
const pages2 = ["home", "aboutUs"];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar position="sticky" color="transparent">
      <Container
        sx={{
          backgroundColor: "#1f2023",
        }}
        maxWidth="xl"
      >
        <Toolbar disableGutters>
          <a href="/home">
            <img
              src={img}
              alt="img"
              style={{ width: 150, marginTop: 10, marginRight: 10 }}
            />
          </a>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Button
                // href={`/${page}`}
                key={pages[0]}
                onClick={() => navigate(pages2[0])}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {pages[0]}
              </Button>
              <Button
                // href={`/${page}`}
                key={pages[1]}
                onClick={() => navigate(pages2[1])}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {pages[1]}
              </Button>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              // href={`/${page}`}
              key={pages[0]}
              onClick={() => navigate(pages2[0])}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[0]}
            </Button>
            <Button
              // href={`/${page}`}
              key={pages[1]}
              onClick={() => navigate(pages2[1])}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[1]}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// {pages.map((page) => (
//   <Button
//     // href={`/${page}`}
//     key={page}
//     onClick={()=> navigate("home")}
//     sx={{ my: 2, color: 'white', display: 'block' }}
//   >
//     {page}
//   </Button>
// ))}
