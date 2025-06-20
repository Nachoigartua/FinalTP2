class VeterinarioModelMemory {
  constructor() {
    this.veterinarios = [];
    this.currentId = 1;
  }

  async getVeterinarios() {
    return this.veterinarios;
  }

  async postVeterinario(veterinario) {
    // Validar que la matrícula no esté repetida
    if (this.veterinarios.some(v => v.matricula === veterinario.matricula)) {
      throw new Error('La matrícula ya existe');
    }
    veterinario._id = this.currentId++;
    this.veterinarios.push(veterinario);
    return veterinario;
  }

  async putVeterinario(id, update) {
    // Validar que la matrícula no esté repetida (excepto para el mismo veterinario)
    const idx = this.veterinarios.findIndex(v => v._id == id);
    if (idx !== -1) {
      if (
        update.matricula &&
        this.veterinarios.some(
          v => v.matricula === update.matricula && v._id != id
        )
      ) {
        throw new Error('La matrícula ya existe');
      }
      this.veterinarios[idx] = { ...update, _id: this.veterinarios[idx]._id };
      return this.veterinarios[idx];
    }
    return null;
  }

  async patchVeterinario(id, update) {
    const idx = this.veterinarios.findIndex(v => v._id == id);
    if (idx !== -1) {
      if (
        update.matricula &&
        this.veterinarios.some(
          v => v.matricula === update.matricula && v._id != id
        )
      ) {
        throw new Error('La matrícula ya existe');
      }
      this.veterinarios[idx] = { ...this.veterinarios[idx], ...update };
      return this.veterinarios[idx];
    }
    return null;
  }

  async deleteVeterinario(id) {
    const idx = this.veterinarios.findIndex(v => v._id == id);
    if (idx !== -1) {
      const deleted = this.veterinarios.splice(idx, 1);
      return deleted[0];
    }
    return null;
  }
}

export default VeterinarioModelMemory;
