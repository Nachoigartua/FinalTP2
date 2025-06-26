import supertest from "supertest"
import { expect } from "chai"

//supertest -> me ayuda a configurar la URL a dónde se apuntan las pruebas
const url = supertest("http://localhost:8080")

//describe -> agrupar un bloque de test, casos de prueba
//(describe no ejecuta ningún test!!!)
describe("Test entidad ANIMALES ", () => {
    //it define una prueba individual
    it("GET /api/animales", async () => {
        const response = await url.get("/api/animales")
        //aserción -> valor que compara si se cumple o no con una condición
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an("array")
    })

    it("POST /api/animales", async () => {
        const response = await url.post("/api/animales").send({
            nombre: "Firulais" + Date.now(),
            especie: "Perro",
            edad: 3,
            estado: "Sano"
        })
        //aserción -> valor que compara si se cumple o no con una condición
        expect(response.status).to.equal(200)
    })
})