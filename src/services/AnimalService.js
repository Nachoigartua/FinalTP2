import { validateAnimal } from "../utils/validation.js";
import Factory from "../models/Factory.js";

class AnimalService {
  constructor() {
    this.model = Factory.get("animal");
  }

  getAnimales = async () => {
    const allAnimales = await this.model.getAnimales();
    return allAnimales;
  };

  postAnimal = async (animal) => {
    const { error } = validateAnimal(animal);
    if (error) {
      return "Error: " + error;
    } else {
      const postAnimal = await this.model.postAnimal(animal);
      return postAnimal;
    }
  };

  putAnimal = async (id, data) => {
    const updatedAnimal = await this.model.putAnimal(id, data);
    return updatedAnimal;
  };

  patchAnimal = async (id, update) => {
    const patchAnimal = await this.model.patchAnimal(id, update);
    return patchAnimal;
  };

  deleteAnimal = async (id) => {
    const deleteAnimal = await this.model.deleteAnimal(id);
    return deleteAnimal;
  };

  getAnimalesByEspecie = async (especie) => {
    const data = await this.model.getAnimalesByEspecie(especie);
    return data;
  };

  getAnimalesByEstado = async (estado) => {
    const data = await this.model.getAnimalesByEstado(estado);
    return data;
  };
}

export default AnimalService;