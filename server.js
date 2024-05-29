import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import fetch from "node-fetch"

dotenv.config()
const app = express()
const PORT = 4000
const { EXCHANGE_KEY } = process.env

app.use(cors())

app.listen(PORT, ()=> {
	console.log(`Server is running on port ${PORT}`);
})

app.get("/", async (req, res)=> {
	try {
		const response = await fetch(`https://v6.exchangerate-api.com/v6/${EXCHANGE_KEY}/latest/NOK`)
		const data = await response.json()
		res.json(data.conversion_rates)
		
	} catch (error) {
		console.log(error);
		
	}
})