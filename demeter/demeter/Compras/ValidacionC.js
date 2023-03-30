function validarFormulario() {
    var Nombre_Insumo = document.getElementById("N_Insumo").value;
    if (Nombre_Insumo == "") {
      Swal.fire('Por favor ingrese el nombre del insumo')
      return false;
    }

    var Fecha = document.getElementById("Fecha_Compra").value;
    if (Fecha == "" ) {
      Swal.fire('Complete el campo de fecha')
      return false;
    }

    var Valor_Compra = document.getElementById("Valor_Compra").value;
    if (Valor_Compra == "") {
      Swal.fire('Ingrese el valor de la compra')
      return false;
    }

    var Cantidad = document.getElementById("Cantidad").value;
    if (Cantidad == "" || !Number.isInteger(Number(Cantidad))) {
      Swal.fire('Indique la cantidad')
      return false;
    }

    var Proveedor = document.getElementById("Proveedor").value;
    if (Proveedor == "") {
      Swal.fire('Seleccione un proveedor')
      return false;
    }
    if (Nombre_Insumo != "" || Fecha != "" || Valor_Compra != "" || Cantidad != "" || Proveedor != ""){
      Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'success'
      )
    }
    return true;

    
  
}

