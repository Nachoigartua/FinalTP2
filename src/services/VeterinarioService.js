import { validateVeterinario } from "../utils/validation.js";
import Factory from "../models/Factory.js";

class VeterinarioService {
  constructor() {
    this.model = Factory.get("veterinario");
  }

  getVeterinarios = async () => {
    const allVeterinarios = await this.model.getVeterinarios();
    return allVeterinarios;
  };

  postVeterinario = async (veterinario) => {
    const { error } = validateVeterinario(veterinario);
    if (error) {
      return "Error: " + error;
    }
    // Validar que la matrícula no esté repetida
    const todos = await this.getVeterinarios();
    if (todos.some((v) => v.matricula === veterinario.matricula)) {
      return "Error: La matrícula ya existe";
    }
    const postVeterinario = await this.model.postVeterinario(veterinario);
    return postVeterinario;
  };

  putVeterinario = async (id, data) => {
    // Validar que la matrícula no esté repetida (excepto para el mismo veterinario)
    const todos = await this.getVeterinarios();
    if (
      data.matricula &&
      todos.some((v) => v.matricula === data.matricula && v._id != id)
    ) {
      return "Error: La matrícula ya existe";
    }
    const updatedVeterinario = await this.model.putVeterinario(id, data);
    return updatedVeterinario;
  };

  patchVeterinario = async (id, update) => {
    // Validar que la matrícula no esté repetida (excepto para el mismo veterinario)
    const todos = await this.getVeterinarios();
    if (
      update.matricula &&
      todos.some((v) => v.matricula === update.matricula && v._id != id)
    ) {
      return "Error: La matrícula ya existe";
    }
    const patchVeterinario = await this.model.patchVeterinario(id, update);
    return patchVeterinario;
  };

  deleteVeterinario = async (id) => {
    const deleteVeterinario = await this.model.deleteVeterinario(id);
    return deleteVeterinario;
  };
}

export default VeterinarioService;
