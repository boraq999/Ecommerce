import {
  Box,
  Accordion,
  AccordionSummary,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import { Close, ExpandMore } from "@mui/icons-material";

const myArr = [
  { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "Mega menu", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "full screen menu", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "pages", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "user account", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "vendr account", subLink: ["Link1", "Link2", "Link3"] },
];

export default function MyDrawer({ toggleDrawer }) {
  return (
    <Box sx={{ width: 444, m: "60px auto 0", position: "relative", pt: 8 }}>
      {/* close Menu Icon ------ */}
      <IconButton
        onClick={toggleDrawer("top", false)}
        sx={{
          ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Close />
      </IconButton>
      {/* Menu Items ---------*/}

      {myArr.map((item, index) => {
        return (
          <Accordion key={index} elevation={0} sx={{ bgcolor: "initial" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.mainLink}</Typography>
            </AccordionSummary>

            <List sx={{ py: 0, my: 0 }}>
              {item.subLink.map((subLink, indx) => {
                return (
                  <ListItem key={indx} sx={{ my: 0, py: 0 }}>
                    <ListItemButton>
                      <ListItemText primary={subLink} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Accordion>
        );
      })}
    </Box>
  );
}
