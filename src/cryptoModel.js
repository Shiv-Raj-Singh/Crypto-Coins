import { model, Schema } from "mongoose";

const cryptoCoinSchema = new Schema({
    symbol: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        unique: true
    },
    marketCapUsd: String,
    priceUsd: String
})

const crypto_Model = new model("crypto-coins", cryptoCoinSchema)
export default crypto_Model

