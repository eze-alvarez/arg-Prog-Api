import { filtrarLista } from '../utils/filtrar'
import styles from './TodoForm.module.css'
export default function TodoForm ({ optionChoice, data }) {
  const lineas = []
  data.forEach(colectivo => {
    const recorrido = `${colectivo.route_short_name} ${colectivo.trip_headsign}`
    lineas.push(recorrido)
  })
  const listaLineas = filtrarLista(lineas)
  // console.log(lineas)

  const selectHandler = (e) => {
    // console.log(e.currentTarget.value)
    optionChoice(e.currentTarget.value)
  }
  return (
    <>
      <div className={styles.select}>
        <label>
          <span>
            Linea de Colectivos
          </span>
        </label>
        <select className={styles.selection} name='todos' onChange={selectHandler}>
          <option defaultValue='all'>Todas las lineas</option>
          {
            listaLineas.map(linea => {
              return (
                <option key={linea} value={linea}>
                  {linea}
                </option>
              )
            })
          }
        </select>
      </div>
    </>
  )
}
