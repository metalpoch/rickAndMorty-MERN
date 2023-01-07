import { Router } from "express"
import Characters from "../models/characters.js"

const route = Router()

route.get("/", (_, res) => {
	const result = characterStatus()
	result
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ error }));
})

const characterStatus = async () => {
  const res = await Characters.find().select("species -_id");
  const data = {};

  res.forEach((item) => {
    const speciesList = ["human", "alien", "humanoid"];
    const value = item.species.toLowerCase();
    const species = speciesList.includes(value) ? `${value}s` : "others";

    data[species] ??= 0;
    data[species] += 1;
  });

  return data;
};

export default route
