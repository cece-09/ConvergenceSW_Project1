import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "./Components/modal";
import { Map } from "./Components/map";
import { Navbar, Layout } from "./Components/layout";
import { useLoadScript } from "@react-google-maps/api";
import { APIKey } from "./key";
import { initMap } from "./Components/GmapLoader";

const initLatLng = {
  lat: 37.552105,
  lng: 126.940987,
};
const libs = ["places"];
const Loading = () => {
  return <div className="loading">Loading...</div>;
};

// data list component
// const Datalist = ({ data }) => {
//   //console.log(data);
//   return (
//     <ul style={{
//       display: 'block',
//       width: '100px',
//       height: '100px',
//       backgroundColor: '#fff',
//     }}>
//       {data.data.results.map((d, i) => <li key={i}>{d}</li>)}
//     </ul>
//   )
// }

function App() {
  const [modalToggle, setModalToggle] = useState(true);
  const [placeData, setPlaceData] = useState({});
  useEffect(() => {

  }, [placeData])

  // load script for google maps api, autocomplete
  const { isLoaded } = useLoadScript({
    id: "script-loader",
    version: "weekly",
    googleMapsApiKey: APIKey.key,
    libraries: libs,
  });

  // handle Modal Submit
  const url = "http://localhost:8000/api/texts/";

  const refreshData = () => {
    axios
      .get(url)
      .then((res) => setPlaceData(res))
      .catch((err) => console.log(err));
  };

  const postData = ({ title, body }) => {
    axios({
      method: "post",
      url: url,
      data: {
        title: title,
        body: body,
      },
    });
  };
  const onModalSubmit = (item) => {
    setModalToggle(false);
    postData({
      title: item.username,
      body: item.place,
    });
    // refreshData();
    console.log(item);
  };

  // render
  const renderApp = () => (
    <Layout>
      <Navbar>
        <div>SiteName</div>
        <ul>
          <li>menu1</li>
          <li>menu2</li>
        </ul>
      </Navbar>
      <Map center={initLatLng} zoom={15}>
        <Modal onSave={onModalSubmit} toggle={modalToggle}></Modal>
        
      </Map>
    </Layout>
  );
  return isLoaded ? renderApp() : <Loading />;
}

export default App;

//
