import { Map, Marker } from "pigeon-maps";

const MyMap = ({ restaurants }) => {
  const location = [restaurants[0].latitude, restaurants[0].longitude];
  return (
    <Map height={300} defaultCenter={location} defaultZoom={18}>
      <Marker width={25} anchor={location} />
    </Map>
  );
};
export default MyMap;
