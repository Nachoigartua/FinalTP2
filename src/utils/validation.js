import Joi from "joi";

const animalSchema = Joi.object({
  nombre: Joi.string().min(2).required(),
  especie: Joi.string().min(2).required(),
  edad: Joi.number().integer().min(0).required(),
  estado: Joi.string().min(3).required(),
});

const veterinarioSchema = Joi.object({
  nombre: Joi.string().min(2).required(),
  matricula: Joi.string().min(2).required(),
  especialidad: Joi.string().min(2).required(),
});

export function validateAnimal(data) {
  return animalSchema.validate(data);
}

export function validateVeterinario(data) {
  return veterinarioSchema.validate(data);
}