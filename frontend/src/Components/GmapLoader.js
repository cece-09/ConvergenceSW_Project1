import "../App.css";
import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { APIKey } from "../key";

function GmapLoader({ containerStyle, center }) {
  const { isLoaded } = useJsApiLoader({
    //id: "google-map-script",
    googleMapsApiKey: APIKey.key,
  });

  if (isLoaded)
    return (
      <div className="container">
        <GoogleMap
          center={center}
          zoom={17}
          mapContainerStyle={containerStyle}
        ></GoogleMap>
      </div>
    );
}

export default GmapLoader;
