function validarFormulario() {
    var Cat_Insumo = document.getElementById("cat_insumo").value;
    if (Cat_Insumo === "") {
      Swal.fire({
          title: 'Por favor ingrese la categoria del insumo',
          icon: 'warning'
        })
      return false;
    }

    var N_insumo = document.getElementById("n_insumo").value;
    if (N_insumo === "" ) {
      Swal.fire({
        title: 'Por favor ingrese el nombre del insumo',
        icon: 'warning'
      })
      return false;
    }

    var Can_insumo = document.getElementById("can_insumo").value;
    if (Can_insumo === "" || !Number.isInteger(Number(Can_insumo))) {
      Swal.fire({
        title: 'Por favor ingrese la cantidad del insumo',
        icon: 'warning'
      })
      return false;
    }

    return true;
}