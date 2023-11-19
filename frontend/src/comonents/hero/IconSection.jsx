/* eslint-disable react/prop-types */
import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import {
  ElectricBolt,
  CreditScoreOutlined,
  WorkspacePremiumOutlined,
  AccessAlarmOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export default function IconSection() {
  const theme = useTheme()
  return (
    <Container>
      <Stack
      borderRadius={2}
        bgcolor={theme.palette.mode === "dark" ? "#000":"#fff"}
        divider={ useMediaQuery('(min-width:600px)')? <Divider orientation="vertical" flexItem />:null}
        direction={"row"}
        alignItems={"center"}
        mt={2}
        flexWrap={"wrap"}
      >
        <MyBox
          icon={<ElectricBolt fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start From 10$"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlined fontSize="large" />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlined fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
}

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent:  useMediaQuery('(max-width:600px)')? "left":"center",
        gap: 2,
        flexGrow: 1,
        width: 250,
        py: 1.6,

      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
