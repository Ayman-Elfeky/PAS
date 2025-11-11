import { clsx } from "clsx";
import { CircleCheckBig } from "lucide-react";
import { IPricing } from "@/types";
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";
import { IService } from "@/data/services";

interface Props {
    tier: IService;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, src, price, color } = tier;
    const message = `Hello! I’m interested in booking the ${name} service.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=201210007708&text=${encodeURIComponent(message)}`;


    console.log(tier);
    return (
        <div className={`bg-[#000] max-w-full mx-auto rounded-xl border lg:max-w-full`} style={{ borderColor: color }}>
            <div className="p-6 rounded-t-xl">
                <h3 className={`text-2xl md:text-4xl font-semibold mb-4`} style={{ color }}>{name}</h3>
                <p className="text-md md:text-2xl font-bold mb-6">
                    Starts From <span style={{ color }}>{price}</span><span className="text-sm"> EGP</span>
                    {/* <span className={clsx({ "text-secondary": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span> */}
                    {/* {typeof price === 'number' && <span className="text-lg font-normal text-[#2CAEE0]">/mo</span>} */}
                </p>
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="">
                    <Button>
                        {"Book Now"}
                    </Button>
                </Link>
            </div>
            <div className="mt-1 h-[300px] md:h-[500px]">
                <Image
                    src={src}
                    alt={name}
                    className="w-[100%] md:w-[100%] h-[100%] rounded-lg mb-6 mx-auto rounded-b-xl"
                />
                {/* <p className="font-bold mb-0">FEATURES</p>
                <p className="text-foreground-accent mb-5">Everything in basic, plus...</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <CircleCheckBig className="h-5 w-5 text-secondary mr-2 text-[#2CAEE0]" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    )
}

export default PricingColumn