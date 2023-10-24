const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const dayNow = new Date()

export const diaActual = diasSemana[dayNow.getDay()]
// console.log(diaActual)

export const hora = dayNow.getHours()
export const minuto = dayNow.getMinutes() < 10 ? `0${dayNow.getMinutes()}` : dayNow.getMinutes()
