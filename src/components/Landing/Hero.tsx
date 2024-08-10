import buyer from "@/assets/buyer.png";
import distri from "@/assets/distributer.png";
import manu from "@/assets/manufacturer.png";
import suppli from "@/assets/supplier.png";
import Image from "next/image";
import { Button } from "../lib/Button";

export default function Hero() {
  const heading = "Your Decentralized Solution for Smarter Supply Chains";
  const description =
    "Your gateway to a revolutionary decentralized enterprise resource planning solution designed for modern supply chain management. Our platform seamlessly connects manufacturers, suppliers, and distributors, ensuring real-time product tracking and efficient resource management.";

  return (
    <div className="flex flex-row px-20 mt-10">
      <div className="flex-1">
        <h1 className="text-6xl ">{heading}</h1>
        <div className="text-sm w-[60%] mt-8">{description}</div>
        <Button type="secondary" cn="mt-4">
          Register as Manufacturer
        </Button>
      </div>
      <div className="flex-1 grid grid-cols-2 h-min">
        <Image src={manu} alt="buyer" />
        <Image src={distri} alt="buyer" />
        <Image src={suppli} alt="buyer" />
        <Image src={buyer} alt="buyer" />
      </div>
    </div>
  );
}
