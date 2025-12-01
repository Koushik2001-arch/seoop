import { Code2, Twitter, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white">Niko</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 font-light">
              Revolutionizing SEO with intelligent automation. Built for startups and enterprises who want results without complexity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-11 h-11 bg-white/10 hover:bg-blue-600/30 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 hover:bg-blue-600/30 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 hover:bg-blue-600/30 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 hover:bg-blue-600/30 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-cyan-400 transition-colors">How It Works</a></li>
              <li><a href="#coming-soon" className="text-gray-400 hover:text-cyan-400 transition-colors">Early Access</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-light">
            © {currentYear} Niko Private Limited. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-white/10 hover:bg-blue-600/30 rounded-full transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
