import { costumersApi } from "../../api/costumers.api";
import { ICostumer } from "../../interfaces/costumers.interface";

type Body = Omit<ICostumer, "id">;

type Response = ICostumer;

export async function create(body: Body) {
  const response = await costumersApi.post<Response>("/costumers", body);

  return response.data;
}
