import supertest from "supertest"
import { expect } from "chai"

const url = supertest("http://localhost:8080")

describe("Test entidad ANIMALES", () => {
    it("GET con TKN ", async () => {
        const resToken = await url.post("/api/login").set({ email: "test", password: "test" });
        const token = resToken.text;
        const response = await url.get("/api/animales").set("Authorization", token);
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an("array")
    })

    it("GET sin TKN ", async () => {
        const response = await url.get("/api/animales");
        expect(response.status).to.equal(401)
    })

    it("POST ", async () => {
        const resToken = await url.post("/api/login").set({ email: "test", password: "test" });
        const token = resToken.text;
        const response = await url.post("/api/animales")
            .set("Authorization", token)
            .send({
                nombre: "Firulais" + Date.now(),
                especie: "Perro",
                edad: 3,
                estado: "Sano"
            })
        expect(response.status).to.equal(200)
    })
})