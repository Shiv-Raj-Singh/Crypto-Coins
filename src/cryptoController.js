import axios from "axios";
import crypto_Model  from './cryptoModel.js'

const getcoins = async (req , res )=>{
    try {
        const option = {
            method : "GET" ,
            url : "https://api.coincap.io/v2/assets",
        }

        const result = await axios(option)
        const {data} = result.data
        const finalData = data.map(a => {
            return {
                symbol : a.symbol ,
                name : a.name , 
                marketCapUsd : a.marketCapUsd , 
                priceUsd : a.priceUsd , 
                changePercent24Hr : a.changePercent24Hr,
                Shivraj : a.marketCapUsd
            }
        });
    await finalData.forEach(a => {
           const finalD=  new crypto_Model(a) 
            finalD.save()          
        });
  
        res.send(finalData)

    } catch (error) {
        res.send(error.message)   
    }
}

export const getcoin = getcoins
