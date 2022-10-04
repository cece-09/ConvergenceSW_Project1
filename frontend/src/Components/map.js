import React from "react";
import style from "./style/map.module.css";
import { GoogleMap } from "@react-google-maps/api";

const libs = ["places"];

const Map = ({ center, zoom, children }) => {
  return (
    <GoogleMap
      center={center}
      zoom={zoom}
      mapContainerClassName={style.container}
    >
      {children}
    </GoogleMap>
  );
};

export { Map };
