class VeterinarioModelMemory {
  constructor() {
    this.veterinarios = [
    ];
  }

  getVeterinarios = async () => {
    return this.veterinarios;
  };

  postVeterinario = async veterinario => {
    const veterinarios = await this.getVeterinarios();
    if (veterinarios.some(v => v.matricula === veterinario.matricula)) {
      throw new Error('La matrícula ya existe');
    }
    veterinario.id =
      veterinarios.length <= 0
        ? 1
        : veterinarios[veterinarios.length - 1].id + 1;
    veterinarios.push(veterinario);
    return veterinario;
  };

  putVeterinario = async (id, update) => {
    const veterinarios = await this.getVeterinarios();
    const index = veterinarios.findIndex(v => v.id == id);
    if (index >= 0) {
      if (
        update.matricula &&
        veterinarios.some(v => v.matricula === update.matricula && v.id != id)
      ) {
        throw new Error('La matrícula ya existe');
      }
      update.id = Number(id);
      veterinarios.splice(index, 1, update);
      return update;
    } else {
      return 'Ocurrió un error al realizar la operación PUT.';
    }
  };

  patchVeterinario = async (id, update) => {
    const veterinarios = await this.getVeterinarios();
    const index = veterinarios.findIndex(v => v.id == id);
    if (index >= 0) {
      if (
        update.matricula &&
        veterinarios.some(v => v.matricula === update.matricula && v.id != id)
      ) {
        throw new Error('La matrícula ya existe');
      }
      const newVeterinario = { ...veterinarios[index], ...update, id: Number(id) };
      veterinarios.splice(index, 1, newVeterinario);
      return newVeterinario;
    } else {
      return 'Ocurrió un error al realizar la operación PATCH.';
    }
  };

  deleteVeterinario = async id => {
    const veterinarios = await this.getVeterinarios();
    const index = veterinarios.findIndex(v => v.id == id);
    if (index >= 0) {
      veterinarios.splice(index, 1);
      return 'El elemento fue borrado.';
    } else {
      return 'Ocurrió un error.';
    }
  };
}

export default VeterinarioModelMemory;
