import { FastifyReply, FastifyRequest } from "fastify";
import { ZodError, ZodSchema } from "zod";

export const bodyValidator = (schema: ZodSchema) => {
  return async (req: FastifyRequest, res: FastifyReply) => {
    try {
      req.body = schema.parse(req.body);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(422).send({ errors: error });
      }
    }
  };
};
