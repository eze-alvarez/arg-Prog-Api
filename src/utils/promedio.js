export default function calcularPromedioLatLng (latitudes, longitudes) {
  if (!Array.isArray(latitudes) || !Array.isArray(longitudes)) {
    throw new Error('Latitudes y longitudes deben ser arrays')
  }

  if (latitudes.length !== longitudes.length) {
    throw new Error('Los arrays de latitudes y longitudes deben tener la misma longitud')
  }

  if (latitudes.length === 0) {
    throw new Error('Los arrays de latitudes y longitudes no pueden estar vacíos')
  }

  let sumaLatitudes = 0
  let sumaLongitudes = 0

  for (let i = 0; i < latitudes.length; i++) {
    sumaLatitudes += latitudes[i]
    sumaLongitudes += longitudes[i]
  }

  const promedioLatitud = Number((sumaLatitudes / latitudes.length).toFixed(5))
  const promedioLongitud = Number((sumaLongitudes / longitudes.length).toFixed(5))

  return [promedioLatitud, promedioLongitud]
}
