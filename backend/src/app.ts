import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
export const app = fastify();

app.register(cors);

app.register(helmet);
