import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2b3345",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        color={"HighlightText"}
        variant="h6"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 18,
        }}
      >
        Designed & Developed By
        <Button
        variant="text"
        color="primary"
          sx={{
            fontSize: 18,
            color: "#ff7790",
            textTransform: "capitalize",
            mx: 0.5,
          }}
        >
          Hyber X
        </Button>
        @2023
      </Typography>
    </Box>
  );
}
