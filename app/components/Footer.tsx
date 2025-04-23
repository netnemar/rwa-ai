import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 bg-black/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo className="w-40 h-auto" />
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} RWA AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
