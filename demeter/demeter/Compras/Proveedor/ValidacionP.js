function validarFormulario() {
    var Nombre = document.getElementById("Nombre_Proveedor").value;
    if (Nombre == "") {
      Swal.fire("Por favor, ingrese el nombre del proveedor")
      return false;
    }

    var Producto = document.getElementById("Producto_Proveedor").value;
    if (Producto == "") {
      Swal.fire("Por favor, complete el campo de producto")
      return false;
    }

    var Telefono = document.getElementById("Telefono_Proveedor").value;
    var ValidarNumero = /^\d{10}$/;
    if (Telefono == "" || !ValidarNumero.test(Telefono)) {
      Swal.fire("Por favor, ingrese el numero correctamente (10 digitos)")
      return false;
    }

    var Ciudad = document.getElementById("Ciudad_Prveedor").value;
    if (Ciudad == "") {
      Swal.fire("Por favor, seleccione una ciudad")
      return false;
    }

    var correo = document.getElementById("Correo_Proveedor").value;
    if (correo == "" || !correo.includes("@")) {
      Swal.fire("Por favor, ingrese correo electronico valido (con @)")
        return false;
    }

    return true;
  }
