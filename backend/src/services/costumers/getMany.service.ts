import { ICostumerSearchParams } from "../../interfaces/costumers.interface";
import { costumersRepository } from "../../repositories/costumers/_index";

export const getMany = async (params: ICostumerSearchParams) => {
  const costumers = await costumersRepository.getMany(params);

  return costumers;
};
