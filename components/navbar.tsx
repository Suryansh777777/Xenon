import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <header className="w-full py-5 px-4 md:px-8 lg:px-16 absolute top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-500 bg-clip-text text-transparent"
        >
          Xenon
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <Link
            href="#features"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#integrations"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Integrations
          </Link>
          <Link
            href="#company"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Company
          </Link>
          <Link
            href="#support"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Support
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#blog"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/signup"
            className="rounded-full bg-transparent border border-gray-800 px-5 py-1.5 text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            Sign Up
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
