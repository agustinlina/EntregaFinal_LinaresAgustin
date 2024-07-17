let selectedOption
let clients = []
let clientId = 0

const option = () => {
  selectedOption = prompt(
    'Ingrese una opción: (Solo el número que corresponda a su opción). \n1. Agregar cliente.\n2. Borrar Cliente.\n3. Buscar cliente.\n4. Ver todos los clientes.\n5. Salir.'
  )
  return selectedOption
}

const addClient = (name, surname, debt) => {
  clientId++
  let client = `ID: ${clientId}. Nombre: ${name} ${surname}. Deuda: ${debt}.`
  clients.push(client)
}

const deleteClient = () => {
  let idToDelete = parseInt(prompt('Ingresa el ID del cliente a borrar:'))
  if (clients[idToDelete - 1]) {
    clients.splice(idToDelete - 1, 1)
    alert('Cliente borrado con exito.')
  } else {
    alert('El ID indicado no esta asociado a ningún cliente.')
  }
}

const searchClient = () => {
  let idToSearch = parseInt(prompt('Ingrese el ID del Cliente a buscar:'))
  if (clients[idToSearch - 1]) {
    alert(clients[idToSearch - 1])
  } else {
    alert('El ID indicado no esta asociado a ningún cliente.')
  }
}

const showClients = () => {
  let itClients = () => {
    return clients.join('\n')
  }
  alert(itClients().toUpperCase())
}

let main = () => {
  let mainLoop = true
  while (mainLoop) {
    option()
    switch (selectedOption) {
      case '1':
        let name = prompt('Ingrese el nombre del cliente: ')
        let surname = prompt('Ingrese el apellido del cliente: ')
        let debt = prompt('Ingrese la deuda del cliente: ')
        addClient(name, surname, debt)
        break
      case '2':
        deleteClient()
        break
      case '3':
        searchClient()
        break
      case '4':
        showClients()
        break
      case '5':
        mainLoop = false
        break
    }
  }
}

main()
