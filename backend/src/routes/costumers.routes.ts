import { FastifyInstance } from "fastify";
import { costumersController } from "../controllers/costumers/_index";

export const costumersRoutes = async (router: FastifyInstance) => {
  router.post("/", costumersController.create);
  router.get("/", costumersController.getMany);
};
