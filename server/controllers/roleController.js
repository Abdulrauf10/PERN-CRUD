const pool = require('../db');

module.exports = {
  getAllRole: async (req, res) => {
    try {
      const getAllRoles = await pool.query('SELECT * FROM role');

      res.status(200).json(getAllRoles.rows);
    } catch (error) {
      res.status(400).json(error.message)
    }     
  },

  getRole: async (req, res) => {
    try {
      const { id_role } = req.params;
      
      const getData = await pool.query('SELECT * FROM role WHERE id_role = $1', [id_role]);

      res.status(201).json(getData.rows[0]);
    } catch (error) {
      res.status(404).json(error.message)
    }
  },

  postRole: async (req, res) => {
    try {
      const {monday, friday} = req.body;

      const postRoles = await pool.query('INSERT INTO role (monday, friday) VALUES ($1, $2) RETURNING *', [monday, friday]);

      res.status(202).json(postRoles.rows[0])
    } catch (error) {
      res.status(402).json(error.message)
    }
  },

  updateRole: async (req, res) => {
    try {
      const { id_role } = req.params;
      const { monday, friday } = req.body;

      const updateRoles = await pool.query('UPDATE role SET monday = $1, friday = $2 WHERE id_role = $3', [monday, friday, id_role])

      res.status(203).json('role was updated');
    } catch (error) {
      res.status(403).json(error.message)
    }
  },

  deleteRole: async (req, res) => {
    try {
      const { id_role } = req.params;

      const deleteRoles = await pool.query('DELETE FROM role WHERE id_role = $1', [id_role]);

      res.status(205).json('data was deleted')
    } catch (error) {
      res.status(405).json(error.message)
    }
  }
}