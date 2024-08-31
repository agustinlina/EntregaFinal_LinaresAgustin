import { successAlertClientAdd, wantToDeleteClient } from './alerts.js'
import { Client } from './classClient.js'

let clients = JSON.parse(localStorage.getItem('clients')) || []

let saveClients = () => {
  localStorage.setItem('clients', JSON.stringify(clients))
}

try {
  const bodyHTML = document.getElementById('body')
  let loading = document.createElement('div')
  loading.innerHTML =
    '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'
  bodyHTML.appendChild(loading)
  setTimeout(() => {
    // Chequea que, si el JSON fue cargado una vez, no lo vuelve a cargar
    const jsonIsLoaded = localStorage.getItem('jsonLoadedOnce?')

    if (!jsonIsLoaded) {
      fetch('js/db/db.json')
        .then(res => res.json())
        .then(data => {
          data.forEach(e => {
            const clientExists = clients.some(client => client.id === e.id)

            if (!clientExists) {
              const newClient = new Client(e.id, e.name, e.surname, e.debt)
              clients.push(newClient)
              saveClients()
              renderClients()
            } else {
              console.log(`Cliente con ID ${e.id} ya existe en el DOM`)
            }
          })
          localStorage.setItem('jsonLoadedOnce?', 'true')
        })
        .catch(err => console.log(err, 'an error'))
        .finally(() => {
          loading.style.display = 'none'
        })
    } else {
      console.log('El JSON ya fue cargado previamente.')
      loading.style.display = 'none'
    }
  }, 1000)
} catch (err) {
  console.log(err, 'an error')
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
      wantToDeleteClient().then(result => {
        if (result.isConfirmed) {
          deleteClient(parseInt(this.getAttribute('data-id')))
        }
      })
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
  successAlertClientAdd()
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
