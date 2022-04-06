const pool = require('../db');

module.exports = {
  getAllBiodata: async (req, res) => {
    try {
      const getAllData = await pool.query('SELECT * FROM biodata');
      
      res.status(200).json(getAllData.rows)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },

  getBiodata: async (req, res) => {
    try {
      const { id } = req.params;
      
      const getData = await pool.query('SELECT * FROM biodata WHERE id = $1', [id]);

      res.status(201).json(getData.rows[0])
    } catch (error) {
      res.status(404).json(error.message)
    }
  },

  postBiodata: async (req, res) => {
    try {
      const {name, email} = req.body
    
      const postData = await pool.query('INSERT INTO biodata (name, email) VALUES($1, $2) RETURNING *', [name, email]);

      res.status(202).json(postData.rows[0])
    } catch (error) {
      res.status(405).json(error.message)
    }
  },

  updateBiodata: async (req, res) => {
    try {
      const { id } = req.params;
      const {name, email} = req.body;

      const updateData = await pool.query('UPDATE biodata SET name = $1, email = $2  WHERE id = $3', [name, email, id]);

      res.status(203).json('data was updated')
    } catch (error) {
      res.status(406).json(error.message)
    }
  },

  deleteBiodata: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteData = await pool.query('DELETE FROM biodata WHERE id = $1', [id])
      
      res.status(205).json('data was deleted')
    } catch (error) {
      res.status(407).json(error.message)
    }
  }
}