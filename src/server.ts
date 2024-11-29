import "dotenv/config";
import cors from "cors";
import express from "express";
import { UsuarioRoutes } from "./routes/usuario.routes";
import { TwitterRoutes } from "./routes/twitter.routes";
import { AuthRoutes } from "./routes/auth.routes";

// Servidor express
const app = express();
const porta = process.env.PORTA;

// Middlewares
app.use(cors());
app.use(express.json());

// ROTA PADRÃO
app.get("/", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Api GrowTwitter 💛",
  });
});

// ROTA AUTH ROUTES
app.use(AuthRoutes.execute())

// ROTA USUÁRIO
app.use(UsuarioRoutes.execute());

// ROTA TWEETS
app.use(TwitterRoutes.execute());

// Iniciar o servidor
app.listen(porta, () => {
  console.log(`Servidor rodando na porta: ${porta} 💛`);
});
