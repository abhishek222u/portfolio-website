import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/20">
      <p>&copy; {new Date().getFullYear()} Designed & Built with ❤️ by Abhishek Jain.</p>
    </footer>
  );
}
