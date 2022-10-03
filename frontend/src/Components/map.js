import React from "react";
import style from "./style/map.module.css";
import { APIKey } from "../key";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const libs = ["places"];

const Map = ({ center, zoom, children }) => {
  return (
    <LoadScript googleMapsApiKey={APIKey.key} libraries={libs}>
      <GoogleMap
        center={center}
        zoom={zoom}
        mapContainerClassName={style.container}
      >
        {children}
      </GoogleMap>
    </LoadScript>
  );
};

export { Map };
