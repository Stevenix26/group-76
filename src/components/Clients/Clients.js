import React,{useState,useEffect} from 'react'
import "./client.css"
import axios from 'axios'

function Clients() {
  const [client, setClient] = useState([])
  const [statusNote, setStatusNote] = useState("")
  const url = 'https://fakerapi.it/api/v1/companies?_quantity=1'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setStatusNote("")
          setClient(response.data.data)
        } else {
          setStatusNote("Error while loading data, please Kindly refresh the page!")
        }
      })

  }, [])
  console.log(client)

  return (
    <div className='client'>
      <h2>Clients</h2>
      <p className='error'>
        {statusNote}
      </p>
      <div className='clents_container'>
        <table className='clients_table'>
          <thead>
            <td>Id</td>
            <td>Full name</td>
            <td>Email</td>
            <td>Phone number</td>
            <td>Gender</td>
            <td>Images</td>
          </thead>
          {
            client ? client.map((client, id) =>
              <tr className='client_table'>
                
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.gender}</td>
                  <td><img src={client.image} alt="client"/></td>
                 
              </tr>
            )
              : null
          }
        </table>
      </div>

    </div>
  )
}

export default Clients