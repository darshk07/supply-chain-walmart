"use client";
import AdminDashboard from "@/components/Admin/AdminDashboard";
import { config } from "@/config";
import { contractConfig } from "@/config/contractConfig";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { readContract } from "wagmi/actions";

const App = () => {
  const [role, setRole] = useState<null | string>("");
  const router = useRouter();
  const { address } = useAccount();

  //fetch role from contract based on the address;
  const fetchRole = async () => {
    const data = await readContract(config, {
      ...contractConfig,
      functionName: "getRole",
      account: address,
    });
    console.log(Number(data));
    // const role = await contract.getRole();
    // setRole(role);
    if (Number(data) === 1) setRole("admin");
  };

  useEffect(() => {
    fetchRole();
  }, []);

  useEffect(() => {
    if (role == null) {
      router.push("/unauthorized");
    }
  }, [role]);

  if (role == "admin") return <AdminDashboard />;

  return <div className="w-full">{/* ADD SKELETON LOADER */}</div>;
};

export default App;
