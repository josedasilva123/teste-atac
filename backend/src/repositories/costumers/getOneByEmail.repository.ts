import { client } from "../../database/client";
import { ICostumer } from "../../interfaces/costumers.interface";

export const getOneByEmail = async (email: string) => {
  const queryString = "SELECT * FROM costumers WHERE email = $1;";

  const values = [email];

  const response = await client.query<ICostumer>(queryString, values);

  return response.rows[0];
};
