import { z } from "zod";
import {
  costumerCreateDataSchema,
  costumerSchema,
} from "../schemas/costumers.schema";

export type ICostumer = z.infer<typeof costumerSchema>;

export type TCreateCostumerData = z.infer<typeof costumerCreateDataSchema>;

export interface ICostumerSearchParams {
  name?: string;
}
