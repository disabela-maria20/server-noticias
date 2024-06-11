import { Express, Request, Response } from "express";

import { Connection, MysqlError } from "mysql";
import Noticia from "../models/noticiasModel";
import { NoticiaPost } from "../interfaces/types";
import conectarBancoDeDados from "../config/database";

const connection: Connection = conectarBancoDeDados();

export default function (app: Express) {
  app.get("/noticia", async (req: Request, res: Response) => {
    Noticia.get(connection, (err: MysqlError | null, results?: NoticiaPost) => {
      if (err) {
        res.status(Number(err.code)).send(err.sqlMessage)
      }
      res.send(results);
    });
  });
}
