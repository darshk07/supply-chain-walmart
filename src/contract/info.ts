import { Address } from "viem";
import { Abi } from "viem";

export const address: Address = "0x4C01df44e3de0905BEa36a69C21F11B5B1eA931b";

export const abi: Abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "addr", type: "address" },
      { indexed: true, internalType: "uint256", name: "role", type: "uint256" },
    ],
    name: "RoleAssigned",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_role", type: "uint256" },
      { internalType: "address", name: "_addr", type: "address" },
    ],
    name: "addRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRole",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_addr", type: "address" }],
    name: "removeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
