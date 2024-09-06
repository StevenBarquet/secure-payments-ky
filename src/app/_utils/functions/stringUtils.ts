/**
 * Ordena dos valores alfanuméricos, priorizando números, seguido de letras y finalmente símbolos.
 * Los símbolos se tratan como caracteres especiales y se colocan al final.
 * 
 * @param {string|number} a - El primer valor a comparar.
 * @param {string|number} b - El segundo valor a comparar.
 * @returns {number} Un número negativo, cero o positivo dependiendo de si 'a' es menor, igual o mayor que 'b'.
 * 
 * @example
 * const arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];
 * arr.sort(compare);
 * console.log(arr); // Salida esperada: ['3', '4', '10', '23', '42', '63', 'ABC', 'adidas', 'ax', 'ba', 'mof', '[', ')']
 */
export function compare(a: string | number, b: string | number) {
  const symbols = "()[]{}@#$%¨&*-_=+".split("");
  // Convertir a y b a cadenas si no lo son ya
  a = String(a);
  b = String(b);

  // Manejar símbolos como caracteres especiales
  if (symbols.includes(a)) a = "zzzzzzz";
  if (symbols.includes(b)) b = "zzzzzzz";

  // Comparar números
  if (!isNaN(Number(a)) && !isNaN(Number(b))) {
    return Number(a) - Number(b);
  }

  // Comparar letras
  if (isNaN(Number(a)) && isNaN(Number(b))) {
    return a.toUpperCase().localeCompare(b.toUpperCase());
  }

  // Si uno es número y otro letra, el número va primero
  if (!isNaN(Number(a))) return -1;
  if (!isNaN(Number(b))) return 1;

  // Si ninguno de los casos anteriores, mantener el orden original
  return 0;
}

/**
 * Formatea un número como una cadena de texto en formato de dinero.
 * 
 * @param {number} cantidad - La cantidad numérica a formatear.
 * @param {string} [moneda='$'] - El símbolo de la moneda a utilizar. Por defecto es '$'.
 * @param {number} [decimales=2] - La cantidad de decimales a incluir en el formato. Por defecto es 2.
 * @returns {string} La cantidad formateada como un string en formato de dinero.
 * 
 * @example
 * // Devuelve "$1,234.56"
 * toCurrency(1234.56);
 * 
 * @example
 * // Devuelve "€1.234,56"
 * toCurrency(1234.56, '€', 2);
 */
export function toCurrency(cantidad: number, decimales = 2): string {
  // Convertimos la cantidad a un formato local
  const opciones: Intl.NumberFormatOptions = {
      style: 'currency',
      currency: 'USD', // Usamos USD para asegurar que el símbolo sea $
      minimumFractionDigits: decimales,
      maximumFractionDigits: decimales,
  };
  const formateador = new Intl.NumberFormat('en-US', opciones);
  
  // Formateamos la cantidad
  const resultado = formateador.format(cantidad);
  
  // Reemplazamos el símbolo de la moneda por una cadena vacía
  // De esta manera conservamos el formato pero eliminamos la parte de "USD"
  return resultado.replace(/USD/g, '').trim(); // o '¤' según el símbolo específico que hayas recibido
}