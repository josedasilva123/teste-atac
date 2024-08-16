import { CreateCostumerForm } from "../../scructures/forms/CreateCostumerForm";
import { CostumerList } from "./CostumerList";

export function CostumersSection(){
    return(
        <section>
            <CreateCostumerForm />
            <CostumerList />
        </section>
    )
}