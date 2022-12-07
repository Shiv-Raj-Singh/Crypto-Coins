import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bloggingSite:project123@project-01-group-3.2zpxn0w.mongodb.net/Crypto-Coins-assignment" , {
    useNewUrlParser : true ,
    
}).then(()=>{ console.log("MongoDB / Data-Base is Connected Succesfully")})
.catch((err)=> { console.log(err.message)})

