class Client {
  constructor (id, name, surname, debt) {
    this.id = id
    this.name = name
    this.surname = surname
    this.debt = debt
  }
}

let clients = JSON.parse(localStorage.getItem('clients')) || []

let saveClients = () => {
  localStorage.setItem('clients', JSON.stringify(clients))
}

let renderClients = () => {
  const clientTableBody = document.querySelector('#clientTable tbody')
  clientTableBody.innerHTML = ''

  clients.forEach(client => {
    const row = document.createElement('tr')

    row.innerHTML = `
            <tr class="d-flex align-items-center justify-content-center">
            <th>${client.id}</th>
            <td>${client.name}</td>
            <td>${client.surname}</td>
            <td>${client.debt}</td>
            <td><button class="btn btn-danger" data-id="${client.id}">Eliminar</button></td>
            </tr>
        `

    clientTableBody.appendChild(row)
  })

  document.querySelectorAll('button[data-id]').forEach(button => {
    button.addEventListener('click', function () {
      deleteClient(parseInt(this.getAttribute('data-id')))
    })
  })
}

let addClient = event => {
  event.preventDefault()

  const name = document.getElementById('inputName').value
  const surname = document.getElementById('inputSurname').value
  const debt = document.getElementById('inputDebt').value

  const id = clients.length > 0 ? clients[clients.length - 1].id + 1 : 1
  const newClient = new Client(id, name, surname, debt)

  clients.push(newClient)
  saveClients()
  renderClients()

  document.getElementById('clientForm').reset()
}

let deleteClient = id => {
  clients = clients.filter(client => client.id !== id)
  saveClients()
  renderClients()
}

document.getElementById('clientForm').addEventListener('submit', addClient)
renderClients()
