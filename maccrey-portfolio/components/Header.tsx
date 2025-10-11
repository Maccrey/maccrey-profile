import Link from "next/link";
import { ThemeToggleButton } from "./ThemeToggleButton";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center p-4 text-white">
        <div className="font-bold text-xl">
          <Link href="/">Maccrey</Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          <ThemeToggleButton />
        </div>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </nav>
    </header>
  );
}
