import { TCreateCostumerData } from "../../interfaces/costumers.interface";
import { costumersRepository } from "../../repositories/costumers/_index";

export const create = async (body: TCreateCostumerData) => {
    const costumer = costumersRepository.create(body);

    return costumer;
}