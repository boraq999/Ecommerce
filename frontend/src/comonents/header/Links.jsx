import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

export default function Links({title}) {
  return (
    <Box
      sx={{
        ":hover > .aaa": { display: "block" },
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography>{title}</Typography>
      <ExpandMore />
      <Box
        className="aaa"
        sx={{
          minWidth: "170px",
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
          paddingTop: "10px",
          zIndex:"2"
        }}
      >
        <Paper>
          <nav aria-label="secondary mailbox folders">
            <List>
              {/* ___________________________________________________________ */}
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: "0", px: 1.5 }}>
                  <ListItemText
                    primary="Dashboard"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              {/* ___________________________________________________________ */}
              <ListItem
                disablePadding
                sx={{
                  ":hover .subLink": { display: "block" },
                  position: "relative",
                }}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: "0",
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    primary="products"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>

                {/* subLink------------ */}
                <Box
                  className="subLink"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    paddingLeft: "10px",
                    display: "none",
                  }}
                >
                  <Paper sx={{ minWidth: 150 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ display: "flex", p: "0", px: 1.5 }}
                          >
                            <ListItemText
                              primary="Add product"
                              sx={{
                                ".MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: "300",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ display: "flex", p: "0", px: 1.5 }}
                          >
                            <ListItemText
                              primary="Edit product"
                              sx={{
                                ".MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: "300",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
                {/* subLink------------ */}
              </ListItem>
              {/* ___________________________________________________________ */}
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: "0", px: 1.5 }}>
                  <ListItemText
                    primary="orders"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              {/* ___________________________________________________________ */}
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: "0", px: 1.5 }}>
                  <ListItemText
                    primary="Profile"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
