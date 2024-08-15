import { create } from "./create.controller";
import { getBestRoute } from "../../services/costumers/getBestRoute.service";
import { getMany } from "./getMany.controller";

export const costumersController = { create, getBestRoute, getMany };
