import PricingColumn from "./PricingColumn";

import { services } from "@/data/services";

interface Props {
    currentTab: number;
}

const Pricing: React.FC<Props> = ({currentTab}) => {
    return (
        <div>
            <PricingColumn key={services[currentTab].name} tier={services[currentTab]} highlight={false} />
        </div>
    )
}

export default Pricing;