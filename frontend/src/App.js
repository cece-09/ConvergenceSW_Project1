import "./App.css";
import React from "react";
import { Modal } from "./Components/modal";
import { Map } from "./Components/map";
import { Navbar, Section, Layout } from "./Components/layout";

const initLatLng = {
  lat: 37.552105,
  lng: 126.940987,
};

function App() {
  return (
    <Layout>
      <Navbar>
        <div>SiteName</div>
        <ul>
          <li>menu1</li>
          <li>menu2</li>
        </ul>
      </Navbar>
      <Section>
        <Map center={initLatLng} zoom={15}></Map>
        <Modal></Modal>
      </Section>
    </Layout>
  );
}

export default App;
