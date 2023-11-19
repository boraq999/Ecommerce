import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

export default function Scroll() {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
      onClick={() => { 
        window.scroll(0,0)
       }}
        variant="extended"
        sx={{ position: "fixed", bottom: "33px", right: "33px" }}
        size="small"
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
}
