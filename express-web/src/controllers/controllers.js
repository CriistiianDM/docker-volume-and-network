const pool = require('../bd');


//get data asginature
const get_asignaturas = async (req,res) => {
  try {
   const search = await pool.query('SELECT * FROM asginaturas');
   console.log(search.rows , 'un saludo');
   res.json(search.rows);
  } catch (error) {
     console.log(error);
  }
}


//exportar metodos http
module.exports = {
   get_asignaturas
}
