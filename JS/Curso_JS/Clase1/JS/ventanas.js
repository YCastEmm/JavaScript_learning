//Ventanas

let edad = prompt("Ingrese su edad")


let años = prompt("Cuantos años desea sumar a su edad")

let suma = parseInt(edad) + parseInt(años)// Lo convierto a número con parseInt para que el programa pueda sumarlos correctamente y no simplemente los concatene (los una)


alert(`Esta es su edad ${suma}`)
