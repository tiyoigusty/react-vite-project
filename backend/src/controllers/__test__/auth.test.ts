import request from "supertest"
import { app } from "../../index"

describe("POST /register", () => {
    it("new user created and return status code 201", async () => {
        const res = await request(app).post("/api/v1/auth/register").send({
            fullName: "Gigih",
            username: "gigih",
            email: "gigih@gmail.com",
            password: "gigih"
        })

        expect(res.statusCode).toEqual("201")
    })
})