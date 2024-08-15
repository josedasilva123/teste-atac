import { AppError } from "../../errors/app.error";
import { TCreateCostumerData } from "../../interfaces/costumers.interface";
import { costumersRepository } from "../../repositories/costumers/_index";

export const create = async (body: TCreateCostumerData) => {
  const existingCostumer = await costumersRepository.getOneByEmail(body.email);

  if (existingCostumer) {
    throw new AppError("Costumer already registered.", 403);
  }

  const costumer = await costumersRepository.create(body);

  return costumer;
};
