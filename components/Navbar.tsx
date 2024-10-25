// components/Navbar.tsx
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              HA JIN
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/skill" className="hover:text-gray-600">
              Skill
            </Link>
            <Link href="/career" className="hover:text-gray-600">
              Career
            </Link>
            <Link href="/projects" className="hover:text-gray-600">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
