"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-300 hover:text-white"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col items-center space-y-6">
            <Link
              href="#features"
              className="text-lg text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#integrations"
              className="text-lg text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Integrations
            </Link>
            <Link
              href="#company"
              className="text-lg text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Company
            </Link>
            <Link
              href="#support"
              className="text-lg text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Support
            </Link>
            <Link
              href="#pricing"
              className="text-lg text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#blog"
              className="text-lg text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/signup"
              className="mt-4 rounded-full bg-transparent border border-gray-800 px-6 py-2 text-white font-medium hover:bg-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
