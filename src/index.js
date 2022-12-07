import  express  from "express";
import "./dbConnection.js";
import {getcoin} from "./cryptoController.js";
const app = express()
const port = 3000 || process.env.PORT

app.use(express.json())

app.use(express.Router().get('/crypto-coins' , getcoin))

app.listen(port , ()=>{
    console.log('your server is running on '+ port)
})



