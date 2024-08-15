import { FastifyReply, FastifyRequest } from "fastify";
import { costumersService } from "../../services/costumers/_index";
import { TCreateCostumerData } from "../../interfaces/costumers.interface";

export const create = async (
  req: FastifyRequest<{ Body: TCreateCostumerData }>,
  res: FastifyReply
) => {
  const costumer = await costumersService.create(req.body);

  return res.status(201).send(costumer);
};
