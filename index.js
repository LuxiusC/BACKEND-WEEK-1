let express = require("express");
let path = require("path");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();
const { DATABASE_URL } = process.env;

let app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/novels/:id', async (req, res) => {
  const { id } = req.params
  const client = await pool.connect()
  try {
    const query = "SELECT * FROM Books WHERE id=$1"
    const result = await client.query(query, [id])
    if (result.rowCount === 0) {
      res.status(404).json({ "status": "Error", "message": "ID not found" })
      return
    }
    const data = result.rows[0]
    res.json({ "status": "success", "data": data })
  } catch (err) {
    console.error("error", err.message)
    res.status(500).json({ "status": "fail", "message": "server fail" })
  } finally {
    client.release()
  }
})

app.put("/novels/:id", async (req, res) => {
  const client = await pool.connect()
  try {
    const { id } = req.params
    const { title, author, year_published } = req.body
    const query = "UPDATE Books SET title=$1,author=$2,year_published = $3 WHERE id=$4"
    const result = await client.query(query, [title, author, year_published, id])
    if (result.rowCount === 0) {
      res.status(404).json({ "status": "fail", "message": "post not found" })
    }
    const data = result.rows[0]
    res.json({ "status": "success", "data": data })
  } catch (err) {
    console.error("error", err.message)
    res.status(500).json({ "status": "fail", "message": "server fail" })
  } finally {
    client.release()
  }
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});