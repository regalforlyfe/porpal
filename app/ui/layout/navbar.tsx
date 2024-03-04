"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "About", href: "/about" },
  { name: "Exp", href: "/exp" },
  { name: "Project", href: "/project" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="w-full h-10 border-y-2 border-[#dbd8d8] flex flex-row items-center font-semibold px-5">
      <div className="basis-5/12">
        <Link href="/">P</Link>
      </div>
      <div className="basis-2/12 text-center">
        <div className="flex flex-row">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("flex-1", {
                "text-teal": pathname === link.href,
              })}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="basis-5/12 text-end">
        <Link href="/contact">C</Link>
      </div>
    </div>
  );
}
