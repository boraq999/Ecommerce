import Header1 from "./comonents/header/Header1";
import Header2 from "./comonents/header/Header2";
import Header3 from "./comonents/header/Header3";
import Hero from "./comonents/hero/Hero";
import Main from "./comonents/main/Main";
import Footer from "./comonents/footer/Footer";
import Scroll from "./comonents/scroll/Scroll";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />

        <Box
          sx={{
            bgcolor:
              // @ts-ignore
              theme.palette.myColor.bgColor,
          }}
        >
          <Hero />
          <Main/>
        </Box>
        <Footer/>
        <Scroll/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
