"use client";
import Link from "next/link";
import Logo from "../common/Logo";
import { Login } from "./Login";

const Navbar = () => {
  const links = [
    { name: "Features", route: "/features" },
    { name: "Accounts", route: "/accounts" },
    { name: "Company", route: "/company" },
    { name: "Insight", route: "/insight" },
  ];

  return (
    <div className="flex flex-row w-full justify-between py-10 px-10 items-center">
      <Logo />
      <div className="flex flex-row gap-8 items-center">
        {links.map((link, index) => (
          <Link href={link.route} key={index} className="">
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Login />
      </div>
    </div>
  );
};
export default Navbar;
