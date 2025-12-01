import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className={`text-lg font-black transition-colors ${
              scrolled ? 'text-white' : 'text-white'
            }`}>
              Niko
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#features"
              className="font-semibold text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="font-semibold text-gray-300 hover:text-cyan-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#coming-soon"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              Get Early Access
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-black/50 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <a
              href="#features"
              className="block font-semibold text-gray-300 hover:text-cyan-400 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block font-semibold text-gray-300 hover:text-cyan-400 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#coming-soon"
              className="block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Early Access
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
