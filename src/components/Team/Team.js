import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./team.css"

function Team() {
  const [teams, setTeams] = useState([])
  const [statusNote, setStatusNote] = useState("")
  const url = 'https://fakerapi.it/api/v1/persons?_quantity=10'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setStatusNote("")
          setTeams(response.data.data)
        } else {
          setStatusNote("Error while loading data, please Kindly refresh the page!")
        }
      })

  }, [])
  console.log(teams)

  return (
    <div className='teams'>
        <h2>Team Members</h2>
        <p className='error'>
          {statusNote}
        </p>
        <div className='team_container'>
         <table className='team_table'>
            <thead>
              <td>Id</td>
              <td>Full name</td>
              <td>Email</td>
              <td>Phone number</td>
              <td>Gender</td>
              <td>Images</td>
            </thead>
            {
              teams ? teams.map((teams, id) =>
                
                  <tr className='team_table'>
                    
                    <td>{teams.id}</td>
                    <td>{teams.firstname + " " + teams.lastname}</td>
                    <td>{teams.email}</td>
                    <td>{teams.phone}</td>
                    <td>{teams.gender}</td>
                    <td><img src={teams.image} alt="team"/></td>
                  </tr>
                
              )
                : null
            }
          </table>
        </div>
    </div>
  )
}
export default Team 