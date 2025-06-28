import authMiddleware from "../middlewares/auth.js";

class LoginController {
    login = async (req, res) => {
        const data = req.headers;
        const generateTkn = await authMiddleware.generateToken(data);
        res.send(generateTkn);
    };
}

export default LoginController;

