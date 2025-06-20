import VeterinarioService from "../services/VeterinarioService.js";

class VeterinarioController {
  constructor() {
    this.service = new VeterinarioService();
  }

  getVeterinarios = async (req, res) => {
    try {
      const allVeterinarios = await this.service.getVeterinarios();
      res.send(allVeterinarios);
    } catch (err) {
      console.error("Error en getVeterinarios:", err);
      res.status(500).send({ error: "Error al obtener veterinarios" });
    }
  };

  postVeterinario = async (req, res) => {
    try {
      const veterinario = req.body;
      const newVeterinario = await this.service.postVeterinario(veterinario);
      res.send(newVeterinario);
    } catch (err) {
      console.error("Error en postVeterinario:", err);
      res.status(500).send({ error: "Error al crear veterinario" });
    }
  };

  putVeterinario = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedVeterinario = await this.service.putVeterinario(id, data);
      res.send(updatedVeterinario);
    } catch (err) {
      console.error("Error en putVeterinario:", err);
      res.status(500).send({ error: "Error al reemplazar veterinario" });
    }
  };

  patchVeterinario = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const patchedVeterinario = await this.service.patchVeterinario(id, data);
      res.send(patchedVeterinario);
    } catch (err) {
      console.error("Error en patchVeterinario:", err);
      res.status(500).send({ error: "Error al actualizar veterinario" });
    }
  };

  deleteVeterinario = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedVeterinario = await this.service.deleteVeterinario(id);
      res.send(deletedVeterinario);
    } catch (err) {
      console.error("Error en deleteVeterinario:", err);
      res.status(500).send({ error: "Error al eliminar veterinario" });
    }
  };
}

export default VeterinarioController;
