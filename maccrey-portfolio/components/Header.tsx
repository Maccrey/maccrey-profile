'use client';

import { Link } from "@/routing";
import { useTranslations } from "next-intl";
import { ThemeToggleButton } from "./ThemeToggleButton";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto flex justify-between items-center p-4 text-gray-900 dark:text-white">
        <div className="font-bold text-xl">
          <Link href="/">Maccrey</Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("home")}</Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("about")}</Link>
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("projects")}</Link>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("blog")}</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("contact")}</Link>
          <ThemeToggleButton />
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggleButton />
          <LanguageSwitcher />
          {/* TODO: Mobile menu button can be added here */}
        </div>
      </nav>
    </header>
  );
}
