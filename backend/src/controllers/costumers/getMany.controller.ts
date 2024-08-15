import { FastifyReply, FastifyRequest } from "fastify";
import { costumersService } from "../../services/costumers/_index";
import { ICostumerSearchParams } from "../../interfaces/costumers.interface";

export const getMany = async (
  req: FastifyRequest<{ Querystring: ICostumerSearchParams }>,
  res: FastifyReply
) => {
  const costumers = await costumersService.getMany(req.query);

  return res.status(200).send(costumers);
};
