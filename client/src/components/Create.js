import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const navigate = useNavigate();
  const [monday, setMonday] = useState('');
  const [friday, setFriday] = useState('');

  const postData = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/post', {
      monday,
      friday
    })
    .then(() => {
      navigate('/')
    }).catch((err) => {
      console.log(err)
    });
  };

  return (
    <div>
      <form onSubmit={postData}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">To do in monday</label>
          <input type="text" 
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
          className="form-control" 
          id="exampleInputPassword1"
          onChange={(e) => setFriday(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Create