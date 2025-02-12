import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());


app.post("/api/computers", async (req: Request, res: Response) => {
  const { ip, nameComputer, nameUser, anydeskId, setor, ramal } = req.body;

  if (!ip || !setor || !nameComputer || !nameUser || ramal === undefined) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const computer = await prisma.computer.create({
      data: { ip, nameComputer, nameUser, anydeskId, setor, ramal },
    });
    return res.status(201).json(computer);
  } catch (error) {
    console.error("Erro ao criar computador:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
});


app.get("/api/computers", async (_req: Request, res: Response) => {
  try {
    const computers = await prisma.computer.findMany();
    return res.status(200).json(computers);
  } catch (error) {
    console.error("Erro ao listar computadores:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
});



app.put("/api/computers/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ip, nameComputer, nameUser, anydeskId, setor, ramal } = req.body;

  if (!ip && !nameComputer && !nameUser && !anydeskId && !setor && ramal === undefined) {
    return res.status(400).json({ error: "Pelo menos um campo para atualizar é necessário" });
  }

  try {
    const updatedComputer = await prisma.computer.update({
      where: { id: Number(id) },
      data: { ip, nameComputer, nameUser, anydeskId, setor, ramal },
    });

    return res.status(200).json(updatedComputer);
  } catch (error) {
    console.error("Erro ao atualizar computador:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
});
app.delete("/api/computers/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedComputer = await prisma.computer.delete({
      where: { id: Number(id) },
    });
    return res.status(200).json({ message: "Computador deletado com sucesso", deletedComputer });
  } catch (error) {
    console.error("Erro ao deletar computador:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
