import AnimalService from "../services/AnimalService.js";

class AnimalController {
  constructor() {
    this.service = new AnimalService();
  }

  getAnimales = async (req, res) => {
    try {
      const allAnimales = await this.service.getAnimales();
      res.send(allAnimales);
    } catch (err) {
      console.error("Error en getAnimales:", err);
      res.status(500).send({ error: "Error al obtener animales" });
    }
  };

  postAnimal = async (req, res) => {
    try {
      const animal = req.body;
      const newAnimal = await this.service.postAnimal(animal);
      res.send(newAnimal);
    } catch (err) {
      console.error("Error en postAnimal:", err);
      res.status(500).send({ error: "Error al crear animal" });
    }
  };

  putAnimal = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedAnimal = await this.service.putAnimal(id, data);
      res.send(updatedAnimal);
    } catch (err) {
      console.error("Error en putAnimal:", err);
      res.status(500).send({ error: "Error al reemplazar animal" });
    }
  };

  patchAnimal = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const patchedAnimal = await this.service.patchAnimal(id, data);
      res.send(patchedAnimal);
    } catch (err) {
      console.error("Error en patchAnimal:", err);
      res.status(500).send({ error: "Error al actualizar animal" });
    }
  };

  deleteAnimal = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAnimal = await this.service.deleteAnimal(id);
      res.send(deletedAnimal);
    } catch (err) {
      console.error("Error en deleteAnimal:", err);
      res.status(500).send({ error: "Error al eliminar animal" });
    }
  };
}

export default AnimalController;