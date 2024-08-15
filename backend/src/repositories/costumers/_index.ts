import { create } from "./create.repository";
import { getMany } from "./getMany.repository";
import { getOneByEmail } from "./getOneByEmail.repository";

export const costumersRepository = { create, getMany, getOneByEmail }; 