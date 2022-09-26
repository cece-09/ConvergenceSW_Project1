import "./App.css";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoaderScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Button } from "reactstrap";
import axios from "axios";
import Data from "./Components/Data";
import { APIKey } from "./key";

const containerStyle = {
  width: "100%",
  height: "100%",
  "z-index": "-100",
};
const center = {
  lat: -3.745,
  lng: -38.523,
};

function App() {
  const { isLoaded } = useJsApiLoader({
    //id: "google-map-script",
    googleMapsApiKey: APIKey.key,
  });

  if (isLoaded)
    return (
      <div className="container">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={containerStyle}
        ></GoogleMap>
      </div>
    );
}

export default App;
