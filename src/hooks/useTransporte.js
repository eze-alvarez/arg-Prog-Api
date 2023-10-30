import { useEffect, useState } from 'react'
import infoTransport from '../allTransportResponse.json'
import { filtrarLista } from '../utils/filtrar'

export function useTransporte () {
  const [dataTransp, setDataTransp] = useState(infoTransport)
  const [selected, setSelected] = useState('')
  const [filteredList, setFilteredList] = useState([])
  const [loadingBus, setLoadingBus] = useState(true)

  const URLBUS = 'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?agency_id=82&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6'

  const optionChoice = (option) => {
    setSelected(option)
  }

  const filter = () => {
    switch (selected) {
      case '321A a LIBERTAD':{
        const filtrado = [...dataTransp].filter(linea => {
          const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
          return nombreLinea === selected
        })
        setFilteredList(filtrado)
        break
      }
      case '321A a Est. CASTELAR':{
        const filtrado = [...dataTransp].filter(linea => {
          const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
          return nombreLinea === selected
        })
        setFilteredList(filtrado)
        break
      }
      case '253A a LIBERTAD':{
        const filtrado = [...dataTransp].filter(linea => {
          const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
          return nombreLinea === selected
        })
        setFilteredList(filtrado)
        break
      }
      case '253A a Liniers':{
        const filtrado = [...dataTransp].filter(linea => {
          const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
          return nombreLinea === selected
        })
        setFilteredList(filtrado)
        break
      }
      case '153A a B° Nuevo':{
        const filtrado = [...dataTransp].filter(linea => {
          const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
          return nombreLinea === selected
        })
        setFilteredList(filtrado)
        break
      }
      case '19A a Pte. Alsina':{
        const filtrado = [...dataTransp].filter(linea => {
          const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
          return nombreLinea === selected
        })
        setFilteredList(filtrado)
        break
      }
      case '19A a B° José Hernández':{
        const filtrado = [...dataTransp].filter(linea => {
          const nombreLinea = `${linea.route_short_name} ${linea.trip_headsign}`
          return nombreLinea === selected
        })
        setFilteredList(filtrado)
        break
      }
      default:
        setFilteredList(dataTransp)
    }
  }
  useEffect(() => {
    fetch(URLBUS)
      .then(response => response.json())
      .then(data => {
        setDataTransp(data)
        setLoadingBus(false)
      })

    setInterval(() => {
      console.log('aca')
      fetch(URLBUS)
        .then(response => response.json())
        .then(data => {
          setDataTransp(data)
          setLoadingBus(false)
        })
    }, 31000)
  }, [])

  useEffect(() => {
    filter()
  }, [selected])

  const lineas = []
  dataTransp.forEach(colectivo => {
    const recorrido = `${colectivo.route_short_name} ${colectivo.trip_headsign}`
    lineas.push(recorrido)
  })
  const listaLineas = filtrarLista(lineas)

  return { loadingBus, optionChoice, filteredList, listaLineas }
}
