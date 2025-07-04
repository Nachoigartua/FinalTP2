class AnimalModelMemory {
    constructor() {
        this.animales = [
        ];
    }

    getAnimales = async () => {
        return this.animales;
    }

    postAnimal = async (animal) => {
        const animales = await this.getAnimales();
        animal.id = animales.length <= 0 ? 1 : animales[animales.length - 1].id + 1;
        animales.push(animal);
        return animal;
    }

    putAnimal = async (id, update) => {
        const animales = await this.getAnimales();
        const index = animales.findIndex((a) => a.id == id);
        if (index >= 0) {
            update.id = Number(id);
            animales.splice(index, 1, update);
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
            return "El elemento fue borrado.";
        } else {
            return "Ocurrió un error.";
        }
    }
}

export default AnimalModelMemory;