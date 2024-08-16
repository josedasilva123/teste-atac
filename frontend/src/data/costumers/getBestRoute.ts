import { costumersApi } from "../../api/costumers.api";
import { ICostumer } from "../../interfaces/costumers.interface";

interface Response {
  startPoint: { x: number; y: number };
  path: ICostumer[];
}

export async function getBestRoute() {
  const response = await costumersApi.get<Response>("/costumers/bestroute");

  return response.data;
}
