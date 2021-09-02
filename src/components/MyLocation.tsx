import { LatLngExpression } from "leaflet";
import React,{ useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"

const MyLocation :React.FC  = ()=> {
    const [position,setPosition] = useState<LatLngExpression | null>(null);
    const map = useMapEvents({
        dblclick: () => {
          map.locate()
        },
        locationfound: (location) => {
          console.log(location.latlng)
          setPosition(location.latlng)
          map.flyTo(location.latlng, map.getZoom())
        },
      })
      return position === null ? null : (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )

    
}
export default MyLocation;