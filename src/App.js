import "./App.css";
import * as React from "react";

import Box from "@mui/material/Box";

import FirstSection from "./component/Firstsection/Firstsection.js";
import SecondSection from "./component/secondSection/thirdSection";
import SideDrawer from "./component/sideDrawer/sideDrawer";

function App() {
  return (
    <div className="Apps">
      <SideDrawer />
      <Box
        component="main"
        style={{ backgroundColor: "#f1eaf2" }}
        sx={{ flexGrow: 1, p: 3 }}
      >
        <FirstSection />
        <SecondSection />
      </Box>
    </div>
  );
}

export default App;
