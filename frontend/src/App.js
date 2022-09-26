import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import GmapLoader from "./Components/GmapLoader";
import GmapAutocomplete from "./Components/GmapAutocomplete";
import Data from "./Components/Data";

function App() {
  return <GmapAutocomplete />;
}

export default App;
