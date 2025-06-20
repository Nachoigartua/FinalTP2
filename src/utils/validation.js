import Joi from "joi";

const animalSchema = Joi.object({
  nombre: Joi.string().min(2).required(),
  especie: Joi.string().min(2).required(),
  edad: Joi.number().integer().min(0).required(),
  estado: Joi.string().min(3).required(),
});

export default { animalSchema };