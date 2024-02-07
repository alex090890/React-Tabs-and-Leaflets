import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyImage from './MyImage';
//import LocationMarker from "./Location";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer';
//import "leaflet/dist/leaflet.css";
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import MyMap from './MyMap';


export default function MyTabs() {

  const position = [52.3, 9.6]

    return (
        <Tabs>
      <TabList>
        <Tab>My Photo</Tab>
        <Tab>Our Location</Tab>
      </TabList>

      <TabPanel>
        <h2>My Photo</h2>
        <MyImage />
      </TabPanel>
      <TabPanel>
        {/*<h2>Our location</h2>
        //<div>
    <h1>My Map</h1>*/}
          {/*<MapContainer
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
    </MapContainer>*/}
          <MyMap />
        {/*</div>*/}

      </TabPanel>
    </Tabs>
    )
}