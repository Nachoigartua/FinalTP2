import jwt from 'jsonwebtoken';
import fs from 'fs';

const tokenPath = "tuToken.txt";

const generateToken = async (data) => {
    const payload = {
        credenciales: data.credenciales
    }
    // Se genera el token 
    const token = await jwt.sign(payload, process.env.SECRETKEY, { expiresIn: '5m' });
    
    // Se guarda el token en un archivo para facil copiado (fines academicos)
    await fs.promises.writeFile(tokenPath, token, "utf-8");

    return token;
};

const verifyToken = async (req,res,next) => {
    // Se verifica el token
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Token no proporcionado" });
    }
    const decoded = await jwt.verify(token, process.env.SECRETKEY);

    if(!decoded) {
        return res.status(401).json({ error: "Token inválido o expirado" });
    }
    next();
};

export default { generateToken, verifyToken };