import { Abi, Address } from "viem";
import { abi, address } from "@/contract/info";

export const contractConfig: {
  address: Address;
  abi: Abi;
} = {
  address: address,
  abi: abi,
};
