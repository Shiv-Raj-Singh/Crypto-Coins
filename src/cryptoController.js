import axios from "axios";
import crypto_Model  from './cryptoModel.js'

const getcoins = async (req , res )=>{
    try {
        const option = {
            method : "GET" ,
            headers: {
                Authorization: " Bearer fe3442f5-8e41-4078-a13d-cabad26802e5",
              } ,
            url : "https://api.coincap.io/v2/assets",
            
        }
        const result = await axios(option)
        const {data} = result.data
        await crypto_Model.deleteMany()

        await data.forEach(a => {
           const finalDdata=  new crypto_Model(a) 
           finalDdata.save()          
        });
  
    res.status(200).send({ status:true , data :data})

    } catch (error) {
        res.send(error.message)   
    }
}

export const getcoin = getcoins
