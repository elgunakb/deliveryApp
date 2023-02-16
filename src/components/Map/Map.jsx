import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Map() {
  const containerStyle = {
    width: "100%",
    height: "450px",
    borderRadius: "16px",
    marginTop: "32px",
  };

  const center = {
    lat: 40.36011942253913,
    lng: 49.810304448895074,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB4MemUnrRmqLoJhfk0ovjv5IJTf3MO5vQ">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
}

export default Map;
