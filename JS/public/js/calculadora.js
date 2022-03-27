function calcular() {
    var camaras = parseInt(document.getElementById("nCamaras").value)
    var dias = parseInt(document.getElementById("diasGrabacion").value)
    var discos = parseInt(document.getElementById("hdd").value)


    if ((isNaN(discos) & isNaN(dias)) | (isNaN(dias) & isNaN(camaras)) | (isNaN(discos) & isNaN(camaras)) | (isNaN(dias) & isNaN(discos) & isNaN(camaras))) {
        alert("Completá dos campos para calcular el tercero")

    } else if (camaras > 0 & dias > 0 & discos > 0) {
        alert("Uno de los tres campos debe estar vacío.")

    } else if (isNaN(discos) | discos == 0) {
        var calculoDiscos = camaras * dias * 0.00833
        document.getElementById("hdd").value = Math.ceil(calculoDiscos) 

    } else if (isNaN(dias) | dias == 0) {
        var calculoDias = discos / (camaras * 0.0083)
        document.getElementById("diasGrabacion").value = Math.floor(calculoDias) 

    } else if (isNaN(camaras) | camaras == 0) {
        var calculoCamaras = discos / (dias * 0.0083)
        document.getElementById("nCamaras").value = Math.floor(calculoCamaras) 
    }    
}


