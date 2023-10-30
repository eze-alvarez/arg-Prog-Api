import { useTransporte } from '../hooks/useTransporte'
import MapView from './MapView'
import TodoForm from './TodoForm'

export default function BusDashboard () {
  const { loadingBus, optionChoice, filteredList, listaLineas } = useTransporte()
  return (
    <section className='transportDashboard'>
      {loadingBus && <h2>cargando .. </h2>}
      {!loadingBus && (
        <TodoForm
          optionChoice={optionChoice}
          listaLineas={listaLineas}
        />
      )}
      {!loadingBus && <MapView data={filteredList} />}
    </section>
  )
}
