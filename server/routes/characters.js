import { Router } from "express"
import Characters from "../models/characters.js"

const route = Router()

route.get("/", (_, res) => {
	const result = findCharacter()
	result
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ error }));
})

route.get("/:id", (req, res) => {
	const result = findCharacter(req.params.id)
	result
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ error }));
})

const findCharacter = async(id) => {
	return id
		? await Characters.findById(id)
		: await Characters.find()
}

export default route
