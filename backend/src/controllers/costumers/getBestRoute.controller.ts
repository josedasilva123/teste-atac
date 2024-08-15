import { FastifyReply, FastifyRequest } from "fastify";
import { costumersService } from "../../services/costumers/_index";

export const getMany = async (req: FastifyRequest, res: FastifyReply) => {
  const data = await costumersService.getBestRoute();

  return res.status(200).send(data);
};
