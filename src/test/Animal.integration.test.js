import supertest from "supertest"
import { expect } from "chai"

const url = supertest("http://localhost:8080")

describe("Test entidad ANIMALES ", () => {
    it("GET /api/animales", async () => {
        const response = await url.get("/api/animales")
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
        expect(response.status).to.equal(200)
    })
})