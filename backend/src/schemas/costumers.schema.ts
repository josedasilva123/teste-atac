import { z } from "zod";

export const costumerSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().min(1).email(),
  phone: z.string().min(1),
});

export const costumerCreateDataSchema = costumerSchema.pick({
  name: true,
  email: true,
  phone: true,
});
