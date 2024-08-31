export const successAlertClientAdd = () => {
  Swal.fire({
    title: 'Cliente agregado con exito',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    background: '#333',
    color: '#fff',
    customClass: {
      confirmButton: 'swal2-add' // Apply the custom class to the button
    }
  })
}

export let wantToDeleteClient = () => {
  return Swal.fire({
    title: '¿Desea eliminar el cliente seleccionado?',
    icon: 'warning',
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    background: '#333',
    color: '#fff',
    customClass: {
      confirmButton: 'swal2-add'
    }
  }).then(result => {
    return result
  })
}

export const successAlertClientDel = () => {
  Swal.fire({
    title: 'Cliente eliminado',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    background: '#333',
    color: '#fff',
    customClass: {
      confirmButton: 'swal2-add'
    }
  })
}
