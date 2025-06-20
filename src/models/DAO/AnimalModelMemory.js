class AnimalModelMemory {
  constructor() {
    this.animales = [];
    this.currentId = 1;
  }

  async getAnimales() {
    return this.animales;
  }

  async postAnimal(animal) {
    animal._id = this.currentId++;
    this.animales.push(animal);
    return animal;
  }

  async putAnimal(id, update) {
    const idx = this.animales.findIndex(a => a._id == id);
    if (idx !== -1) {
      this.animales[idx] = { ...update, _id: this.animales[idx]._id };
      return this.animales[idx];
    }
    return null;
  }

  async patchAnimal(id, update) {
    const idx = this.animales.findIndex(a => a._id == id);
    if (idx !== -1) {
      this.animales[idx] = { ...this.animales[idx], ...update };
      return this.animales[idx];
    }
    return null;
  }

  async deleteAnimal(id) {
    const idx = this.animales.findIndex(a => a._id == id);
    if (idx !== -1) {
      const deleted = this.animales.splice(idx, 1);
      return deleted[0];
    }
    return null;
  }

  async getAnimalesByEspecie(especie) {
    return this.animales.filter(a => a.especie === especie);
  }

  async getAnimalesByEstado(estado) {
    return this.animales.filter(a => a.estado === estado);
  }
}

export default AnimalModelMemory;