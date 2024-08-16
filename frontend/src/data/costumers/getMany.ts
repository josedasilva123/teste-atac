import { costumersApi } from "../../api/costumers.api";
import { ICostumer } from "../../interfaces/costumers.interface";

interface Params {
  name?: string;
}

type Response = ICostumer[];

export async function getMany(params: Params) {
  const response = await costumersApi.get<Response>("/costumers", {
    params,
  });

  return response.data;
}
