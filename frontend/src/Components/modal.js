import React from "react";
import style from "./style/modal.module.css";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { APIKey } from "../key";

const Modal = ({}) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: APIKey.key,
  });

  const onLoad = (mapInstance) => {
    console.log(mapInstance);
  };
  const onPlaceChanged = (placeInstance) => {
    console.log(placeInstance.getPlace());
  };
  return isLoaded ? (
    <div className={style.container}>
      <h1>Enter Your Information</h1>
      <input type="text" placeholder="Your name"></input>
      <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
        fields={["geometry", "name", "address_components"]}
        types={["establishment"]}
      >
        <input type="text" placeholder="Your address"></input>
      </Autocomplete>
      <button
        onClick={(place) => {
          console.log(place.getPlace());
        }}
      >
        Save
      </button>
    </div>
  ) : (
    console.log(loadError)
  );
};

export { Modal };
