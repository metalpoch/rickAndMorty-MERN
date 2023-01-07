import { Router } from "express"
import Characters from "../models/characters.js"

const route = Router()

route.get("/", (_, res) => {
	const result = characterStatus()
	result
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ error }));
})

const characterStatus = async() => {
	const res = await Characters.find().select("status -_id")
	const data = {}

	res.forEach((item) => {
		const status = item.status.toLowerCase()
		data[status] ??= 0
		data[status] += 1
	})
	
	return data
}

export default route
