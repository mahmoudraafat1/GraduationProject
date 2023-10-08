const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

console.log(process.env.NODE_ENV)

const app = express()

// app config
app.use(cors());
app.use(express.json());

// port and DB config
const DATABASE_CONNECTION = process.env.DATABASE_URL;

const PORT = process.env.PORT || 8000;
  
app.get('/', (req, res) => {
  res.send('Welcome server side is now open!')
})

app.listen(PORT, () => {
  console.log(`The Port is : ${PORT}`)
  console.log(`My Real Estate app listening on port ${PORT}`)
})

mongoose
    .connect(DATABASE_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server is running at : http://localhost:${PORT}`),
        )
        
    )
    .catch((error) => {
        console.log(error);
      });
    