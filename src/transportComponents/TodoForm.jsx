import styles from './TodoForm.module.css'
export default function TodoForm ({ optionChoice, listaLineas }) {
  const selectHandler = (e) => {
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
