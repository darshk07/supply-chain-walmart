"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Button } from "../lib/Button";
import { useRouter } from "next/navigation";
import { readContract } from "wagmi/actions";
import { config } from "@/config";
import { contractConfig } from "@/config/contractConfig";

export const Login = () => {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      localStorage.setItem("isConnected", "true");
    } else {
      localStorage.removeItem("isConnected");
    }
  }, [isConnected]);

  useEffect(() => {
    const fetchRole = async () => {
      const data = await readContract(config, {
        ...contractConfig,
        functionName: "Role",
        account: address,
      });
      const roleId = Number(data);
      console.log(roleId);
      if (roleId === 1) {
        localStorage.setItem("role", "admin");
      } else if (roleId === 2) {
        localStorage.setItem("role", "manufacturer");
      } else if (roleId === 3) {
        localStorage.setItem("role", "storage");
      } else if (roleId === 4) {
        localStorage.setItem("role", "distributor");
      } else if (roleId === 5) {
        localStorage.setItem("role", "retailer");
      } else {
        localStorage.removeItem("role");
      }
    };
    if (localStorage.getItem("isConnected")) {
      fetchRole();
    }
  }, [localStorage.getItem("isConnected")]);
  // useEffect(() => {
  //   const fetchRole = async () => {
  //     const data = await readContract(config, {
  //       ...contractConfig,
  //       functionName: "Role",
  //       account: address,
  //     });
  //     const roleId = Number(data);
  //     console.log(roleId);
  //     if (roleId === 1) {
  //       localStorage.setItem("role", "admin");
  //     } else if (roleId === 2) {
  //       localStorage.setItem("role", "manufacturer");
  //     } else if (roleId === 3) {
  //       localStorage.setItem("role", "storage");
  //     } else if (roleId === 4) {
  //       localStorage.setItem("role", "distributor");
  //     } else if (roleId === 5) {
  //       localStorage.setItem("role", "retailer");
  //     } else {
  //       localStorage.removeItem("role");
  //     }
  //   };
  //   if (isConnected) {
  //     fetchRole();
  //   }
  // }, []);

  function handleNavigate() {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      router.push("/a");
    } else if (role === "manufacturer") {
      router.push("/m");
    } else if (role === "storage") {
      router.push("/s");
    } else if (role === "distributor") {
      router.push("/d");
    } else if (role === "retailer") {
      router.push("/r");
    }
  }

  return (
    <>
      {isConnected && <Button onClick={handleNavigate}>Go to Dashboard</Button>}
      <w3m-button />
    </>
  );
};
