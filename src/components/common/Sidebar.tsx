"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPath = usePathname();
  const renderGeneralLinks = () => {
    const links = [
      { name: "Dashboard", route: "/" },
      { name: "Check Manufacturers", route: "/manufacturers" },
      { name: "Check Suppliers", route: "/suppliers" },
      { name: "Check Distributors", route: "/distributors" },
    ];

    return (
      <div className="flex flex-col gap-4 text-primary font-extralight mt-4">
        <h3 className="font-light">General</h3>
        <div className="self-center flex flex-col gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.route}
              className={`text-sm md:text-sm lg:text-base px-4 py-2 rounded-xl cursor-pointer 
								${currentPath === link.route ? "bg-yellow-1" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col p-4">
      <Logo size="small" />
      {renderGeneralLinks()}
    </div>
  );
};

export default Sidebar;
