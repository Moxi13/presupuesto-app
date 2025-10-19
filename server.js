import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Configuración básica para Railway
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos (como tu formulario)
app.use(express.static(path.join(__dirname, ".")));

// Si alguien entra sin especificar nada ("/"), se muestra tu index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Puerto que Railway usa automáticamente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Servidor activo en puerto ${PORT}`)
);
