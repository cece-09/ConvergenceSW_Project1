import "../App.css";
import React from "react";
import {
  Autocomplete,
  GoogleMap,
  useJsApiLoader,
  LoadScript,
  PlaceResult
} from "@react-google-maps/api";
import { APIKey } from "../key";

const libs = ["places"];

function GmapLoader({ containerStyle, center, zoom }) {
  return (
    <LoadScript googleMapsApiKey={APIKey.key} libraries={libs}>
      <GoogleMap center={center} zoom={zoom} mapContainerStyle={containerStyle}>
        <Autocomplete
          onLoad={() => {
            console.log("autocomplete loaded");
          }}
          onPlaceChanged={(place) => {
            console.log(place.getPlace());
          }}
          fields = {['geometry', 'name', 'address_components']}
          types={["establishment"]}
        >
          <input
            type="text"
            placeholder="placeholder"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              top: "10px",
              left: "50%",
              marginLeft: "-120px",
            }}
          ></input>
        </Autocomplete>
      </GoogleMap>
    </LoadScript>
  );
}

function initMap() {
  return (
    <GmapLoader
      containerStyle={{
        display: "block",
        width: "100vw",
        height: "100vh",
      }}
      center={{
        lat: 37.552105,
        lng: 126.940987,
      }}
      zoom={17}
    ></GmapLoader>
  );
}

function SearchBar() {
  return;
}

export { GmapLoader, initMap, SearchBar };
