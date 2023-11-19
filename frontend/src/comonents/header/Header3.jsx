import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
} from "@mui/icons-material";
import MyDrawer from "./MyDrawer";
import Links from "./Links";

export default function Header3() {
  // ======================================================
  // ======================================================
  // ======================================================

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              textTransform: "capitalize",
              p: 0,
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          sx={{
            // @ts-ignore
            ul: { width: 220, bgcolor: theme.palette.myColor.main },
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {/* menu item ........................... */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          {/* menu item ........................... */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          {/* menu item ........................... */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
          {/* menu item ........................... */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      {/* Links ------ */}
      {useMediaQuery("(min-width:1200px)") && (
        <Stack direction={"row"} gap={3}>
          <Links title={"Home"} />
          <Links title={"Mega menu"} />
          <Links title={"full screen menu"} />
          <Links title={"pages"} />
          <Links title={"user account"} />
          <Links title={"vendr account"} />
        </Stack>
      )}
      {/* ....................  Menu */}
      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}
      {/* Drawer ------- */}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ">div": { height: "100%" } }}
      >
        <MyDrawer toggleDrawer={toggleDrawer} />
      </Drawer>
    </Container>
  );
}
