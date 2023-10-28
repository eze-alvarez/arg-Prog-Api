export function filtrarLista (lista) {
  const hash = []
  const resultado = []

  for (let i = 0; i < lista.length; i++) {
    if (!hash[lista[i]]) {
      hash[lista[i]] = true
      resultado.push(lista[i])
    }
  }

  return resultado
}
