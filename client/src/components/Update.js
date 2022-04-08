import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const navigate = useNavigate();
  const [monday, setMonday] = useState('');
  const [friday, setFriday] = useState('');
  const [id, setId] = useState(null);

   const updateData = () => {
    axios.put(`http://localhost:5000/put/role/${id}`, {
      monday,
      friday
    })
    .then(() => {
      navigate('/')
    })
  };

   useEffect(() => {
    setId(localStorage.getItem('id_role')) 
    setMonday(localStorage.getItem('monday')) 
    setFriday(localStorage.getItem('friday')) 
  },[]);

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">To do in monday</label>
          <input 
          type="text"
          value={monday} 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp"
          onChange={(e) => setMonday(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">To do in friday</label>
          <input 
          type="text"
          value={friday} 
          className="form-control" 
          id="exampleInputPassword1"
          onChange={(e) => setFriday(e.target.value)}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={updateData}>Submit</button>
      </form>
    </div>
  )
}

export default Update