import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { costumersRoutes } from "./routes/costumers.routes";
export const app = fastify();

app.register(cors);

app.register(helmet);

app.register(costumersRoutes, {
  prefix: "/costumers",
});
