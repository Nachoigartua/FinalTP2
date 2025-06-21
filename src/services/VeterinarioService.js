import { validateVeterinario } from "../utils/validation.js";
import Factory from "../models/Factory.js";

class VeterinarioService {
  constructor() {
    this.model = Factory.get("veterinario", process.env.PERSISTENCE);
  }

  getVeterinarios = async () => {
    const allVeterinarios = await this.model.getVeterinarios();
    return allVeterinarios;
  };

  postVeterinario = async (veterinario) => {
    const validate = validateVeterinario(veterinario);
    if (validate.error) {
      return "Error: " + validate.error;
    } else {
      const postVeterinario = await this.model.postVeterinario(veterinario);
      return postVeterinario;
    }
  };

  putVeterinario = async (id, data) => {
    const putVeterinario = await this.model.putVeterinario(id, data);
    return putVeterinario;
  };

  patchVeterinario = async (id, data) => {
    const patchVeterinario = await this.model.patchVeterinario(id, data);
    return patchVeterinario;
  };

  deleteVeterinario = async (id) => {
    const deleteVeterinario = await this.model.deleteVeterinario(id);
    return deleteVeterinario;
  };
}

export default VeterinarioService;
