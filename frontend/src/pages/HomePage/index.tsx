import { CostumerProvider } from "../../components/costumers/providers/CostumersProvider";
import { CostumersSection } from "../../components/costumers/sections/CostumersSection";

export function HomePage() {
  return (
    <main>
      <CostumerProvider>
        <CostumersSection />
      </CostumerProvider>
    </main>
  );
}
