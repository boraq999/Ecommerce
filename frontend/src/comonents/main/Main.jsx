/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ProductsDetails from "./ProductsDetails";
import { Article, Close } from "@mui/icons-material";
import { useGetproductByNameQuery } from "../../Redux/product";
import ReactLoading from "react-loading";

export default function Main() {
  const [alignment, setAlignment] = useState("all");
  const myCategory = {
    all: "products?populate=*",
    men: "products?populate=*&filters[category][$eq]=men",
    women: "products?populate=*&filters[category][$eq]=women",
  };

  const [myDataApi, setMyDataApi] = useState(myCategory.all);
  console.log(Object.keys(myCategory)[0]);
  const handleAlignment = (event, newApi) => {
    setAlignment(newApi);
    setMyDataApi(myCategory[newApi]);
  };

  const { data, error, isLoading } = useGetproductByNameQuery(myDataApi);

  // const getData = async () => {
  //   const url = `http://localhost:1337/api/products?populate=*`;
  //   const response = await axios.get(url);
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   getData();
  // });

  return (
    <Container sx={{ mt: 6, pb: 6 }}>
      {/* first section ====>  Type */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography variant="h6">Selected Product</Typography>
          <Typography variant="body1" fontWeight={300}>
            All our arrivals in a exslusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          sx={{ gap: "10px" }}
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            className="myButton"
            value={"all"}
            aria-label="left aligned"
          >
            all products
          </ToggleButton>
          <ToggleButton
            className="myButton"
            value={"men"}
            aria-label="centered"
          >
            men
          </ToggleButton>
          <ToggleButton
            className="myButton"
            value={"women"}
            aria-label="right aligned"
          >
            women
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <hr />
      {/* second section ====>  Card */}
      <Stack
        gap={2}
        direction={"row"}
        justifyContent={{ xs: "center", lg: "flex-start" }}
        flexWrap={"wrap"}
      >
        {/* -------------------------------------------------------------- */}
        {data ? (
          data.data.map((item, index) => {
            console.log(item);
            return <MyCard key={index} data={item} />;
          })
        ) : isLoading ? (
          <LoadingComponent />
        ) : error ? (
          <ErrorComponent />
        ) : null}

        {/* -------------------------------------------------------------- */}

        {/* {["aaa", "bbb", "ccc", 1, 2].map((item, index) => {
          return <MyCard key={index} />;
        })} */}
      </Stack>
    </Container>
  );
}

function MyCard({ data }) {
  const productData = data.attributes;
  const img = productData.img.data.map((item, index) => {
    return item.attributes.url;
  });
  console.log(img);
  // console.log(productData.img.data[0].attributes.url);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // ===============================================
    // ===============================================
    // ===============================================
    <Card
      className="my_cardDark"
      sx={{
        maxWidth: 333,
        mt: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "10px",
        ".MuiCardMedia-root": {
          borderRadius: "10px",
          boxShadow: "0 0 10px rgb(27, 62, 4)   !important",
          margin: "10px",
        },
        ":hover .MuiCardMedia-root": {
          rotate: "1deg",
          scale: "1.05",
          transition: "0.3s",
        },
      }}
    >
      {/* Image */}
      <CardMedia
        sx={{ height: 277 }}
        // @ts-ignore
        image={img[0]}
        title="green iguana"
      />
      {/* Name & Price */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flexGrow: 1,
          // alignItems:"flex-start"
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography gutterBottom variant="h6" component={"div"} my={0}>
            {productData.title}
          </Typography>
          <Typography variant="subtitle1" component={"p"}>
            {productData.price}$
          </Typography>
        </Stack>
        {/* Discrtion */}
        <Typography>{productData.description}</Typography>
      </CardContent>
      {/* Last section */}
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button onClick={handleClickOpen} size="large">
          <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
          add to cart
        </Button>
        <Rating
          precision={0.1}
          name="read-only"
          value={productData.rating}
          readOnly
        />
      </CardActions>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "98%", md: 800 },
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            ":hover": { rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
        >
          <Close />
        </IconButton>
        <ProductsDetails />
      </Dialog>
    </Card>
  );
}

const LoadingComponent = () => (
  <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
    <ReactLoading type={"bars"} color="#fff" />
  </Stack>
);

function ErrorComponent() {
  return (
    <Box
      sx={{
        width: "50%",
        height: "50px",
        color: "white",
        bgcolor: "tomato",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
      }}
    >
      <Typography>check your api</Typography>
    </Box>
  );
}
