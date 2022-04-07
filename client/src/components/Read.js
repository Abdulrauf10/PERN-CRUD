import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';

const Read = () => {
  const [day, setDay] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/roles')
    .then((res) => {
      setDay(res.data)
    })
  }, []);

  const setData = (id_role, monday, friday) => {
    localStorage.setItem('id_role', id_role)
    localStorage.setItem('monday', monday)
    localStorage.setItem('friday', friday)
  }

  const getData = () => {
    axios.get('http://localhost:5000/roles')
    .then((res) => {
      setDay(res.data)
    })
  };

  const deleteData = (id_role) => {
    axios.delete(`http://localhost:5000/delete/role/${id_role}`)
    .then(() => {
      getData()
    })
  };

  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Monday</th>
            <th scope="col">Friday</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {day.map((res, unikKey) => {
            return (
              <tr key={unikKey}>
                <th scope="row">{res.id_role}</th>
                <td>{res.monday}</td>
                <td>{res.friday}</td>
                <td>
                  <Link to='/update'>
                    <button 
                    type="button" 
                    className="btn btn-warning" 
                    onClick={() => setData(res.id_role, res.monday, res.friday)}>Update</button>
                  </Link>
                </td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={() => deleteData(res.id_role)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Link to='/post'>
        <button type="button" class="btn btn-primary">Add list</button>
      </Link>
    </div>
  )
}

export default Read