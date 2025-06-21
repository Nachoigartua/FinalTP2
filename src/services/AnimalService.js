import { validateAnimal } from "../utils/validation.js";
import Factory from "../models/Factory.js";

class AnimalService {
  constructor() {
    this.model = Factory.get("animal", process.env.PERSISTENCE);
  }

  getAnimales = async () => {
    const allAnimales = await this.model.getAnimales();
    return allAnimales;
  };

  postAnimal = async (animal) => {
    const validate = validateAnimal(animal);
    if (validate.error) {
      return "Error: " + validate.error;
    } else {
      const postAnimal = await this.model.postAnimal(animal);
      return postAnimal;
    }
  };

  putAnimal = async (id, data) => {
    const putAnimal = await this.model.putAnimal(id, data);
    return putAnimal;
  };

  patchAnimal = async (id, data) => {
    const patchAnimal = await this.model.patchAnimal(id, data);
    return patchAnimal;
  };

  deleteAnimal = async (id) => {
    const deleteAnimal = await this.model.deleteAnimal(id);
    return deleteAnimal;
  };
}

export default AnimalService;