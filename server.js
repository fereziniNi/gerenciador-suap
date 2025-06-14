import app from "./src/app.js";
import "dotenv/config";

// Definindo a porta:
const PORT = 3000;
app.listen(PORT,
    () => {
        console.log("Servidor ativo e aguardando requisições...");
    }
);