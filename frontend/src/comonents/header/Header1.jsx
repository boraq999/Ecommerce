import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";

// import MUI
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["", "AR", "EN"];

// import icon
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// ===========================================
const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  // seting Lan ---------------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py:"4px",
        borderBottomRightRadius: 9,
        borderBottomLeftRadius: 9,
      }}
    >
      <Container>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Typography
            variant="body2"
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#d23f55",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
              borderRadius:"7px"
            }}
          >
            HOT
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 300,
              fontSize: "12px",
              color: "#fff",
            }}
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          {/* ========================= light && dark mode */}
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "17px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "17px", color: "#fff" }} />
              </IconButton>
            )}
          </div>
          {/* ========================= Lan */}
          <div style={{margin:"0 10px"}}>
            <List component="nav" aria-label="Device settings">
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{
                  bgcolor: "transparetn",
                  cursor: "pointer",
                  p: "0",
                  m: "0",
                }}
              >
                <ListItemText
                  sx={{ ".MuiTypography-root": { color: "#fff" } }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ color: "#fff" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "15px", p: "3px 10px", minHeight: "10px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          {/* ========================= Icons */}
          <TwitterIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              mx: 1,
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
