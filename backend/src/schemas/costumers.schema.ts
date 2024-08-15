import { z } from "zod";

export const costumerSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().min(1).email(),
  phone: z.string().min(1),
  x: z.number(),
  y: z.number(),
});

export const costumerCreateDataSchema = costumerSchema.pick({
  name: true,
  email: true,
  phone: true,
  x: true,
  y: true,
});
