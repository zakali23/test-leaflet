import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet'
import './style/App.css';
import DrawMap from './components/DrawMap';
import MyLocation from './components/MyLocation';
function App() {

  return ( 
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} doubleClickZoom={false}  >
      <TileLayer
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
      />
      <DrawMap />
      <MyLocation/>
</MapContainer>
  );
}

export default App;
