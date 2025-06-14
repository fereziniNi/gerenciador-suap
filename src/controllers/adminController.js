import admin from "../models/Admin.js";

class AdminController {
    static async register(req, res) {
        try {
            const { username, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            users.push({ username, password: hashedPassword });
            console.log(users);
            res.status(201).send('User registered');
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falhou ao cadastrar!` })
        }
    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = users.find(user => user.username === username);
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).send('Login Incorreto!');
            }
            const token = jwt.sign(
                { username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: '1h', algorithm: 'HS256' }
            );
            res.json(token);
            console.log('Login efetuado pelo usuário ' + user.username);
        }catch(error){
            res.status(500).json({ message: `${error.message} - Falhou ao logar!` })
        }
    }

}

export default AlunoController;