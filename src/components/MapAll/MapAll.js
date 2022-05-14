import { Map, Marker } from "pigeon-maps";

const MapAll = ({ restaurants }) => {

  const location1 = [restaurants[0].latitude, restaurants[0].longitude];
  const location2 = [restaurants[1].latitude, restaurants[1].longitude];

  return (
     <div>
    <Map height={300} defaultCenter={location1} defaultZoom={4}>
      <Marker width={25} anchor={location1}  />
       <Marker width={25} anchor={location2}/> 
    </Map>

    </div> 
  );
};
export default MapAll;
