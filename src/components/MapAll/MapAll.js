import { Map, Marker,ZoomControl } from "pigeon-maps";

import "./MapAll.css";

const MapAll = ({ restaurants }) => {
  console.log(restaurants);
 


  const avgLat=restaurants.reduce(function(acc, restaurant ) {return acc+ restaurant.latitude}, 0)/restaurants.length;
  const avgLng=restaurants.reduce(function(acc, restaurant ) {return acc+ restaurant.longitude}, 0)/restaurants.length;

  const lats = restaurants.map(restaurant => { return restaurant.latitude; });
  const lngs = restaurants.map(restaurant => { return restaurant.longitude; });

  const latsMax = Math.max(...lats);
  const latsMin = Math.min(...lats);

  const lngsMax = Math.max(...lngs);
  const lngsMin = Math.min(...lngs);

  const lngsDiff=lngsMax-lngsMin;
  const latsDiff=latsMax-latsMin;
    
  //console.log(avgLat,avgLng); 
/*   console.log(latsMin,  latsMax);
  console.log(lngsMin,  lngsMax); */
  console.log(  latsMax-latsMin);
  console.log(  lngsMax-lngsMin);


  let zoomMap;
 
  if(latsDiff>50&&lngsDiff>25) zoomMap=2;
  if(latsDiff>30&&lngsDiff<25) zoomMap=3;
  if(latsDiff>15&&lngsDiff<25) zoomMap=4;
  if(latsDiff>5&&lngsDiff<15) zoomMap=6;
  if(latsDiff>1&&lngsDiff<5) zoomMap=8;
  if(latsDiff<0.1&&lngsDiff<1) zoomMap=10;
  if(latsDiff<0.1&&lngsDiff<0.1){ zoomMap=14;}
  else {zoomMap=1; console.log("lastcase")};
  console.log(zoomMap);



    const avgLocation =[avgLat, avgLng]

    const color = `hsl(0, 100%, 50%)`

  return (
   
    <Map className="Map"  defaultCenter={avgLocation}  defaultZoom={zoomMap}>
      {restaurants.map((restaurant, index) =>  <Marker kex={index} color={color} width={45} anchor={[restaurant.latitude, restaurant.longitude]  } />   )};
      <ZoomControl />
    </Map>

  
  );
};
export default MapAll;
