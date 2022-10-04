import React, { useEffect, useState } from "react";
import style from "./style/modal.module.css";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";

const Modal = ({ onSave, toggle }) => {
  // use state to save input
  const [item, setItem] = useState({});
  const [autocomplete, setAutocomplete] = useState({});
  useEffect(() => {
    //console.log(item);
  }, [item]);

  // functions binded
  const onLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };
  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();
    setItem({...item, ['place']:place})
  };
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  // render Modal component
  return toggle ? (
    <div className={style.container}>
      <div className={style.modal}>
        <h1>Enter Your Information</h1>
        <form>
          <input
            type="text"
            placeholder="Your name"
            name="username"
            autoComplete="off"
            onChange={handleChange}
          ></input>
          <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
            fields={["geometry", "name", "address_components"]}
            types={["establishment"]}
          >
            <input
              type="text"
              placeholder="Your address"
              name="userlocation"
            ></input>
          </Autocomplete>
        </form>
        <button onClick={() => onSave(item)}>Save</button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export { Modal };
