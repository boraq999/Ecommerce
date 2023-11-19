import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";

export default function ProductsDetails() {
  const matches = useMediaQuery("(min-width:600px)");
  // return <Box>{matches ? <FirstDetials /> : <SecondDetials />}</Box>;
  return (
    <Box>
      <FirstDetials />
    </Box>
  );
}

const myArray = [
  `src/comonents/images/img6.webp`,
  `src/comonents/images/img6.webp`,
];

function FirstDetials() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={300} src="src\comonents\images\img6.webp" alt="img" />
      </Box>
      <Box py={4} sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">WOMENS FASHION</Typography>
        <Typography color={"crimson"} fontSize={"22px"} my={0.4}>
          12.99$
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={{ xs: "center", sm: "left" }}
          gap={1}
          my={2}
        >
          {myArray.map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt="img"
                width={90}
                style={{ borderRadius: "5px" }}
              />
            );
          })}
        </Stack>
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          <Typography>Bay Now</Typography>
        </Button>
      </Box>
    </Box>
  );
}

function SecondDetials() {
  return (
    <Box>
      <h1>Second Media</h1>
    </Box>
  );
}
