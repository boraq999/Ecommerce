import { useState } from "react";

import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// ============================================== Search

const Search = styled("div")(({ theme }) => ({
  flexGrow:0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "2px solid #777",
  "&:hover": {
    border: "2px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color:"#777",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// ---------------------------------------------- Search
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  const options = ["Men", "Wommen", "Children"];

  const theme = useTheme();
  // ========================================================================
  // ========================================================================
  // ========================================================================
  return (
    <div>
      <Container
        sx={{ my: 3, display: "flex", justifyContent: "space-between" }}
      >
        {/* Cart ------------------ */}
        <Stack alignItems={"center"}>
          <ShoppingCartOutlined />
          <Typography>E-commerce</Typography>
        </Stack>
        {/* Search ------------------ */}
        <Search
          sx={{
            borderRadius: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent:"space-between",
            overflow: "hidden",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              // @ts-ignore
              sx={{ bgcolor: theme.palette.myColor.main,p:0,minHeight:"100%" }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{
                    width: "95px",
                    textAlign: "center",
                    "&:hover": { cursor: "pointer" },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
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
                sx={{
                  fontSize:"13px"
                }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>
        {/* Icons ------------------ */}
        <Stack direction={"row"} alignItems={"center"}>
          <IconButton>
            <Person2OutlinedIcon />
          </IconButton>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Stack>
      </Container>
    </div>
  );
}
