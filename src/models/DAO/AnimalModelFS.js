import fs from "fs";

class AnimalModelFS {
    constructor() {
        this.path = "animales.txt";
    }

    getAnimales = async () => {
        let allAnimales = await fs.promises.readFile(this.path, "utf8");
        if (!allAnimales.trim()) allAnimales = "[]";
        return JSON.parse(allAnimales);
    }

    postAnimal = async (animal) => {
        const animales = await this.getAnimales();
        animal.id = animales.length <= 0 ? 1 : animales[animales.length - 1].id + 1;
        animales.push(animal);
        await fs.promises.writeFile(this.path, JSON.stringify(animales), "utf-8");
        return animal;
    }

    putAnimal = async (id, update) => {
        const animales = await this.getAnimales();
        const index = animales.findIndex((a) => a.id == id);
        if (index >= 0) {
            update.id = Number(id);
            animales.splice(index, 1, update);
            await fs.promises.writeFile(this.path, JSON.stringify(animales), "utf-8");
            return update;
        } else {
            return "Ocurrió un error al realizar la operación PUT.";
        }
    }

    patchAnimal = async (id, update) => {
        const animales = await this.getAnimales();
        const index = animales.findIndex((a) => a.id == id);
        if (index >= 0) {
            const newAnimal = { ...animales[index], ...update, id: Number(id) };
            animales.splice(index, 1, newAnimal);
            await fs.promises.writeFile(this.path, JSON.stringify(animales), "utf-8");
            return newAnimal;
        } else {
            return "Ocurrió un error al realizar la operación PATCH.";
        }
    }

    deleteAnimal = async (id) => {
        const animales = await this.getAnimales();
        const index = animales.findIndex((a) => a.id == id);
        if (index >= 0) {
            animales.splice(index, 1);
            fs.promises.writeFile(this.path, JSON.stringify(animales), "utf-8");
            return "El elemento fue borrado.";
        } else {
            return "Ocurrió un error.";
        }
    }
}

export default AnimalModelFS;
