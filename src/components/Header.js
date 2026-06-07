"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLight } from "react-icons/ci";
import { toast } from "react-toastify";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [Theam,setTheam] =  useState()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutUs" },
    // { name: "Packages", href: "/package" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    // { name: "Contact", href: "/contactUs" },
  ];

  const handleBGTheam =()=>{
      toast.info("This feature is coming soon!", {
        position: "top-right",
        autoClose: 3000,
      });
    }

  return (
    <header className="sticky top-0 z-50 bg-pink-100 shadow">
      <div className="container mx-auto flex justify-between items-center px-5 py-3">

        <Link href="/">
          <img
            src="/Images/A.jpg"
            alt="Logo"
            className="h-14"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium ${
                pathname === item.href
                  ? "text-pink-600"
                  : "text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          className="hidden lg:block bg-pink-600 text-white px-5 py-2 rounded cursor-pointer"
          onClick={handleBGTheam}
        >
          <CiLight/>
        </button>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-pink-100 p-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2"
            >
              {item.name}
            </Link>
          ))}

          <button className="w-full mt-4 bg-pink-600 text-white py-2 rounded" onClick={handleBGTheam}>
            <CiLight/>
          </button>
        </div>
      )}
    </header>
  );
}