import React from "react";
import ReactDOM from "react-dom/client";
import { APIKey } from "../key";

// function createUrl({ url, key, lib }) {
//   return `${url}key=${key}&libraries=${lib}callback=initMap`;
// };
// const Loader = (props) => {
//   // create script element and shift in root
//   const url = "https://maps.googleapis.com/maps/api/js?";
//   const key = APIKey.key;
//   const libraries = "places";

//   const script = React.createElement("script", 
//   {
//     src: createUrl({ url, key, libraries }),
//   });
//   return script;
// };

const SearchBar = (props) => {
    // const autocomplete = new google.maps.places.Autocomplete(
    //     document.getElementById('autocomplete'),
    //     {
    //         types: ['text'],
    //         componentRestrictions: {country: ['KO']},
    //         fields:['place_id', 'geometry', 'name'],
    //     }
    // );
}

export { /*Loader, */ SearchBar };
