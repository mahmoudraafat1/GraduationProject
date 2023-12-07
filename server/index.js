require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Server side for the My Real Estate BlockChain is now runinng....');
  });

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Connecting to server......');
    console.log(`Server now listening on port ${port}`);
    console.log(`Now you can run localhost/${port} and see a message`);
  });
