import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slide.css";
import { useTheme } from "@emotion/react";
import IconSection from "./IconSection";

const mySlider = [
  { text: "MEN", url: `src/comonents/images/banner-15.jpg` },
  { text: "WOMEN", url: `src/comonents/images/img2.webp` },
  { text: "Accessories", url: `src/comonents/images/img4.webp` },
  { text: "Accessories", url: `src/comonents/images/img5.webp` },
];
export default function Hero() {
  const theme = useTheme();
  return (
    <Container>
      <Box sx={{pt:3 ,mt: 2.5, display: "flex", alignItems: "center", gap: 3 }}>
        {/* Slider ------------------------------------ */}

        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  backgroundColor: "transparent",
                  position: "relative",
                  height: "70vh",
                }}
              >
                <Box
                  sx={{
                    cursor: "grab",
                    ":active": { cursor: "grabbing" },
                    [theme.breakpoints.down("sm")]: {
                      display: "none",
                    },
                  }}
                >
                  <img
                    style={{ borderRadius: "10px" }}
                    src={item.url}
                    alt="img"
                  />
                </Box>
                <Box
                  className="borders"
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#222" }}>
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ color: "#222", fontWeight: "400", my: 1 }}
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <Typography variant="h5" color="#333">
                      SALE UP TO
                    </Typography>
                    <Typography variant="h4" color="#d23f57">
                      30%OFF
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                  >
                    Get Free Shiping on orders over $99.00
                  </Typography>
                  <Button
                    sx={{
                      py: 1,
                      px: 5,
                      mt: 2,
                      bgcolor: "#222",
                      color: "#fff",
                      borderRadius: "5px",
                      boxShadow: "0 4px 16px rgba(43,52,69,0.1)",
                      ":hover": {
                        bgcolor: "#151515",
                        boxShadow: "0 4px 16px rgba(43,52,69,0.1)",
                      },
                    }}
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Images ------------------------------------ */}
        <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "27%" }}>
          {/* First Image ............ */}
          <Box sx={{ position: "relative" }}>
            <img
              className="imgSide"
              width={"100%"}
              src="src\comonents\images\banner-17.jpg"
              alt="img"
            />
            <Stack
              sx={{
                position: "absolute",
                left: 30,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2b3445",
                  fontSize: "18px",
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2b3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2b3445",
                }}
              >
                SALE 20% OFF
              </Typography>
              <Link
                underline="none"
                href="#"
                sx={{
                  color: "#2b3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  ":hover": { color: "#d23f57" },
                }}
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          {/* Second Image ............ */}
          <Box sx={{ position: "relative" }}>
            <img
              className="imgSide"
              width={"100%"}
              src="src\comonents\images\banner-16.jpg"
              alt="img"
            />
            <Stack
              sx={{
                position: "absolute",
                left: 30,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2b3445",
                  fontSize: "18px",
                }}
              >
                GAMMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2b3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2b3445",
                }}
              >
                LAPTOPS
              </Typography>
              <Link
                underline="none"
                href="#"
                sx={{
                  color: "#2b3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  ":hover": { color: "#d23f57" },
                }}
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection/>
    </Container>
  );
}
