import { ICostumer } from "../../interfaces/costumers.interface";
import { costumersRepository } from "../../repositories/costumers/_index";

type Point = Pick<ICostumer, "x" | "y">;

function distance(p1: Point, p2: Point): number {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}

export const getBestRoute = async () => {
  const startPoint = { x: 0, y: 0 };
  const path: ICostumer[] = []; 

  const costumers = await costumersRepository.getMany();

  const remainingCostumers = [...costumers];

  let currentPoint = startPoint;

  while (remainingCostumers.length > 0) {
    const nearest = remainingCostumers.reduce((prev, curr) =>
      distance(currentPoint, curr) < distance(currentPoint, prev) ? curr : prev
    );
    path.push(nearest);
    remainingCostumers.splice(remainingCostumers.indexOf(nearest), 1);
    currentPoint = nearest;
  }

  return { startPoint, path };
};
