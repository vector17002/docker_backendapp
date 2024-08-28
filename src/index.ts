import express from "express"
import dotenv from "dotenv"

const app = express();

app.use(express.json())
dotenv.configDotenv()


app.get('/' , (req, res) => {
    res.send(
         "Welcome to my basic server application");
})

app.listen(3000, () =>{
    console.log("Server running at port 3000");
})