import "./App.css";
import React from "react";
import * as GMAP from "./Components/GmapLoader";
import Data from "./Components/Data";
import { SearchBar } from "./Components/google-maps-api";
// import {Flex} from '@mui/material'

function App() {
  return (
    <div>
      <GMAP.initMap/>
    </div>
  );
}

export default App;
