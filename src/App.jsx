import Clima from './components/Clima'
import './App.css'
import MapView from './transportComponents/MapView'
// import info from './response.json'
import infoTransport from './allTransportResponse.json'
import TodoForm from './transportComponents/TodoForm'
import { useEffect, useState } from 'react'

const URL = 'https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m&hourly=temperature_2m,precipitation_probability,visibility,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FCordoba&forecast_days=1'
const URLBUS = 'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?agency_id=82&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6'
function App () {
  const [isLoading, setIsLoading] = useState(true)
  const [dataClima, setDataClima] = useState()

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setDataClima(data)
        setIsLoading(false)
      })
  }, [])

  const [loadingBus, setLoadingBus] = useState(true)
  const [dataTransp, setDataTransp] = useState(infoTransport)
  const [selected, setSelected] = useState('')
  const [filteredList, setFilteredList] = useState(dataTransp)

  useEffect(() => {
    fetch(URLBUS)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setDataTransp(data)
        setLoadingBus(false)
      })
  }, [])

  // const filter = () => {
  //   switch (selected) {
  //     case '321A a LIBERTAD':{
  //       const filtrado = [...infoTransport].filter(linea => {
  //         const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
  //         return nombreLinea === selected
  //       })
  //       setFilteredList(filtrado)
  //       break
  //     }
  //     case '321A a Est. CASTELAR':{
  //       const filtrado = [...infoTransport].filter(linea => {
  //         const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
  //         return nombreLinea === selected
  //       })
  //       setFilteredList(filtrado)
  //       break
  //     }
  //     case '253A a LIBERTAD':{
  //       const filtrado = [...infoTransport].filter(linea => {
  //         const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
  //         return nombreLinea === selected
  //       })
  //       setFilteredList(filtrado)
  //       break
  //     }
  //     case '253A a Liniers':{
  //       const filtrado = [...infoTransport].filter(linea => {
  //         const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
  //         return nombreLinea === selected
  //       })
  //       setFilteredList(filtrado)
  //       break
  //     }
  //     case '153A a B° Nuevo':{
  //       const filtrado = [...infoTransport].filter(linea => {
  //         const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
  //         return nombreLinea === selected
  //       })
  //       setFilteredList(filtrado)
  //       break
  //     }
  //     case '19A a Pte. Alsina':{
  //       const filtrado = [...infoTransport].filter(linea => {
  //         const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
  //         return nombreLinea === selected
  //       })
  //       setFilteredList(filtrado)
  //       break
  //     }
  //     case '19A a B° José Hernández':{
  //       const filtrado = [...infoTransport].filter(linea => {
  //         const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
  //         return nombreLinea === selected
  //       })
  //       setFilteredList(filtrado)
  //       break
  //     }
  //     default:
  //       setFilteredList(infoTransport)
  //   }
  // }
  const optionChoice = (option) => {
    setSelected(option)
  }
  // useEffect(() => {
  //   filter()
  // }, [selected])
  return (
    <main className='dashboard'>
      <section className='climaDashboard'>
        {isLoading && <h1>cargando ..</h1>}
        {!isLoading && <Clima data={dataClima} />}
      </section>

      <section className='transportDashboard'>
        {loadingBus && <h2>cargando .. </h2>}
        {!loadingBus && <TodoForm
          optionChoice={optionChoice}
          data={infoTransport}
        />}
        {!loadingBus && <MapView data={filteredList} />}
      </section>
    </main>
  )
}

export default App
