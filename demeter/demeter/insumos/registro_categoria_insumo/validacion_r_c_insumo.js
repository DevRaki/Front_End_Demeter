function validarFormulario() {
    var n_c_insumo = document.getElementById("n_c_insumo").value;
    if (n_c_insumo === "") {
      Swal.fire({
          title: 'Por favor ingrese el nombre de la categoria de insumo',
          icon: 'warning'
        })
      return false;
    }

    var t_c_insumo = document.getElementById("t_c_insumo").value;
    if (t_c_insumo === "" ) {
      Swal.fire({
        title: 'Por favor ingrese el tipo de insumo',
        icon: 'warning'
      })
      return false;
    }

    return true;
}
