import supertest from "supertest"
import { expect } from "chai"

const url = supertest("http://localhost:8080")

describe("Test entidad VETERINARIOS ", () => {
    it("GET /api/veterinarios", async () => {
        const response = await url.get("/api/veterinarios")
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an("array")
    })

    it("POST /api/veterinarios", async () => {
        const response = await url.post("/api/veterinarios").send({
            nombre: "Dr. House1",
            especialidad: "General",
            //en este caso tiraria error ya que la matricula ya existe, se deja asi para que haya un caso de error
            matricula: "12345"
        })
        expect(response.status).to.equal(200)
    })

})
