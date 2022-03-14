let edad = prompt("Ingresá tu edad")
let nombre = prompt("Ingresá tu nombre")
let apellido = prompt("Ingresá tu apellido")



alert(`Usted es ${nombre}`)


let sueldo = prompt("Ingresá tu sueldo")
let bonus = prompt("Ingresá el monto del bonus")
let total = parseFloat(sueldo) + parseFloat(bonus)



document.write("Tu edad es 2 " + edad + "<br>")
document.write("Tu nombre es " + nombre + apellido + "<br>")
document.write("El sueldo neto es " + total)