import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
// import bus from '../picture/bus.png'
import { buses } from '../utils/busOpc'
import promedio from '../utils/promedio'
function iconn (icono) {
  return L.icon({
    iconUrl: icono,

    iconSize: [64, 64], // size of the icon
    shadowSize: [64, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  })
}
// const busIcon = L.icon({
//   iconUrl: bus,

//   iconSize: [64, 64], // size of the icon
//   shadowSize: [64, 64], // size of the shadow
//   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62], // the same for the shadow
//   popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
// })
// console.log(busIcon.options.iconUrl)

export default function MapView ({ data }) {
  const dataIcons = [...data]
  dataIcons.forEach(bus => {
    const nombreLinea = `${bus.route_short_name} ${bus.trip_headsign}`
    bus.imageBus = buses[nombreLinea]
  })
  // console.log(dataIcons)
  const arrayLat = []
  const arrayLong = []
  data.forEach(bus => {
    arrayLat.push(bus.latitude)
    arrayLong.push(bus.longitude)
  })
  const position = promedio(arrayLat, arrayLong)
  const [posProm, setPosProm] = useState(position)
  useEffect(() => {
    setPosProm(position)
  }, [data])
  return (
    <MapContainer center={posProm} zoom={11} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {
        dataIcons.map(colectivo => {
          return (
            <Marker key={`${colectivo.route_id}-${colectivo.id}-${colectivo.tip_id}`} position={[colectivo.latitude, colectivo.longitude]} icon={iconn(colectivo.imageBus)}>
              <Popup>
                {colectivo.route_short_name}<br /> {colectivo.trip_headsign}
              </Popup>
            </Marker>
          )
        })
      }
    </MapContainer>
  )
}
