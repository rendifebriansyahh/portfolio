import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-16 text-center bg-gray-100 text-gray-700 dark:bg-neutral-900 dark:text-gray-300 transition-colors duration-500 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="font-semibold"></span> — All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
          Crafted with ❤️ by Rendi Febriansyah
        </p>
      </div>
    </footer>
  );
}
