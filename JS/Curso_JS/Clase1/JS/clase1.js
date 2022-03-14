alert('Bienvenidos a JS')

alert("A continuación veremos el concepto de VARIABLES")

var nombre // Creo la variable "nombre"
nombre = "Frank Marcano" // inicializo la variable (le doy un valor)
console.log(nombre)
console.log(`Nombre de variable ${nombre}`)

nombre = 145
console.log(nombre)
console.log(typeof(nombre)) //Muestra el tipo de dato

nombre = 145.577
console.log(nombre)
console.log(typeof(nombre)) //Muestra el tipo de dato


nombre = true
console.log(nombre)
console.log(typeof(nombre)) //Muestra el tipo de dato


alert("A continuaión veremos el concepto de CONSTANTES")
const CURSO = "Javascript desde cero"

console.clear()
console.log(CURSO)
console.log(typeof(CURSO))

// CURSO = "JavaScript inicial"  No se puede cambiar el valor de una constante
// console.log(CURSO)

nombre = "Nestor"
console.clear()
console.log(nombre)
console.log(typeof(nombre))


document.write(`A continuación veremos el valor de la variable nombre: ${nombre}`)