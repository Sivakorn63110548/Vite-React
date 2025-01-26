import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import { Typography } from "@mui/material";
import L from "leaflet";

import Home_logo from "../assets/icon/home.png";
import sty_logo from "../assets/icon/sty.png";
import beg_logo from "../assets/icon/beg.png";

const santhiya: [number, number] = [7.9873156, 98.5667578];
const home: [number, number] = [7.9942339026307385, 98.58993413107699];
const BEG: [number, number] = [13.8058462,100.5020719];

const MapComponent = () => {
  const santhiya_mark = new L.Icon({
    iconUrl: sty_logo,
    iconSize: [150, 70],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const home_mark = new L.Icon({
    iconUrl: Home_logo,
    iconSize: [30, 22],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const BEG_mark = new L.Icon({
    iconUrl: beg_logo,
    iconSize: [100, 90],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center',
          zIndex: 1,
          position: 'relative',
          borderRadius: '16px',
          border: '1px solid black',
          width: '9rem',
          marginLeft: '45%',
          color: '#000',
          '& span': {
            color: '#FF6B2B',
          }
        }}
      >
        🗺️ My Map
      </Typography>

      <MapContainer
        id="map"
        center={santhiya}
        zoom={5}
        style={{
          height: "35rem",
          width: "100%",
          borderRadius: '10px'
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={santhiya} icon={santhiya_mark}>
          <Popup>
              <Typography sx={{ fontWeight: "bold", textAlign: "center", color: "#1976d2" }}>
                Santhiya Koh Yao Yai Resort & Spa
              </Typography>
              <Typography sx={{ color: "#555", textAlign: "center", marginTop: 1 }}>
                This is Currently working onsite.
              </Typography>
          </Popup>
        </Marker>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={home} icon={home_mark}>
          <Popup>
              <Typography sx={{ fontWeight: "bold", textAlign: "center", color: "#1976d2" }}>
                11/2 หมู่ 1
              </Typography>
              <Typography sx={{ color: "#555", textAlign: "center", marginTop: 1 }}>
                This is my home.
              </Typography>
          </Popup>
        </Marker>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={BEG} icon={BEG_mark}>
          <Popup>
              <Typography sx={{ fontWeight: "bold", textAlign: "center", color: "#1976d2" }}>
                Bookengine.com
              </Typography>
              <Typography sx={{ color: "#555", textAlign: "center", marginTop: 1 }}>
                Location of main company.
              </Typography>
          </Popup>
        </Marker>

      </MapContainer></>
  );
};

export default MapComponent;
