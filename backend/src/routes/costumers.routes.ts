import { FastifyInstance } from "fastify";
import { costumersController } from "../controllers/costumers/_index";
import { bodyValidator } from "../middlewares/bodyValidator.middleware";
import { costumerCreateDataSchema } from "../schemas/costumers.schema";
import { TCreateCostumerData } from "../interfaces/costumers.interface";

export const costumersRoutes = async (router: FastifyInstance) => {
  router.post<{ Body: TCreateCostumerData }>(
    "/",
    { preHandler: bodyValidator(costumerCreateDataSchema) },
    costumersController.create
  );
  router.get("/", costumersController.getMany);
  router.get("/bestroute", costumersController.getBestRoute);
};
