import authMiddleware from "../middlewares/auth.js";

export const login = async (req, res) => {
    const data = req.headers;
    
    const tknGenerado = await authMiddleware.generateToken(data)

    res.send({
        token: tknGenerado,
        message: "Token generado correctamente"
    });

}

