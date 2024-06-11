
import server from "./config/serve";
import noticia from "./routes/noticia";
import noticias from './routes/noticias'

const port = 3000;

noticias(server)
noticia(server)

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
