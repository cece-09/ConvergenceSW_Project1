import "../App.css";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";
import { APIKey } from "../key";

const lib = ["places"];
function GmapAutocomplete() {
  const { isLoaded } = useJsApiLoader({
    //id: "google-map-script",
    googleMapsApiKey: APIKey.key,
    libraries: lib,
  });

  if (isLoaded)
    return (
      <div className="container">
        <Autocomplete
          onPlaceChanged={(place) => {
            console.log(place);
          }}
          options={{
            //types: ["ko"],
            componentRestrictions: { country: "ko" },
          }}
        ></Autocomplete>
      </div>
    );
}

export default GmapAutocomplete;
