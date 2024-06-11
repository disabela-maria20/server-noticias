import { Connection, MysqlError } from "mysql";
import { NoticiaPost } from "../interfaces/types";

const Noticia = {
  getAll: (
    connection: Connection ,
    callback: (err: MysqlError | null, result?: NoticiaPost) => void
  ) => {
    const sql = 'SELECT * FROM noticias';
    connection.query(sql, (err: MysqlError, results: any) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },
  get: (
    connection: Connection ,
    callback: (err: MysqlError | null, result?: NoticiaPost) => void
  ) => {
    const sql = 'SELECT * FROM noticias WHERE id = 1';
    connection.query(sql, (err: MysqlError, results: any) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },
};

export = Noticia