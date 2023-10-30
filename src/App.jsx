import Clima from './components/Clima'
import './App.css'
// import MapView from './transportComponents/MapView'
// import info from './response.json'
// import TodoForm from './transportComponents/TodoForm'
import useClimaInfo from './hooks/useClimaInfo'
import BusDashboard from './transportComponents/BusDashboard'
// import { useTransporte } from './hooks/useTransporte'

function App () {
  const { isLoading, dataClima } = useClimaInfo()
  // const { loadingBus, optionChoice, filteredList, listaLineas } = useTransporte()
  return (
    <main className='dashboard'>
      <section className='climaDashboard'>
        {isLoading && <h1>cargando ..</h1>}
        {!isLoading && <Clima data={dataClima} />}
      </section>

      {/* <section className='transportDashboard'>
        <TodoForm
          optionChoice={optionChoice}
          listaLineas={listaLineas}
        />
        {!loadingBus && <MapView data={filteredList} />}
      </section> */}
      <BusDashboard />
    </main>
  )
}

export default App
