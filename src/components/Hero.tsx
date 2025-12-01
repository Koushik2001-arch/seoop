import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>

      <div
        className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          transition: 'all 0.3s ease-out'
        }}
      ></div>

      <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-blue-500/10 rounded-full"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `rotate ${30 + i * 10}s linear infinite`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
              }}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-500/30 mb-8 hover:border-blue-500/60 transition-all">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              The Future of SEO is Here
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            SEO Automation
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent animate-pulse">
              Reimagined
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Add one intelligent tag to your code. Watch as our AI-powered system automatically transforms your website into a search engine powerhouse. Professional SEO, zero complexity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="#coming-soon"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a
              href="#demo"
              className="group px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 rounded-full font-bold text-lg hover:border-cyan-400 hover:text-cyan-200 transition-all hover:bg-cyan-500/5 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all">
              <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                2.4x
              </div>
              <div className="text-sm text-gray-400 mt-1">Traffic Growth</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all">
              <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-sm text-gray-400 mt-1">Time Saved</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all">
              <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-gray-400 mt-1">Automated</div>
            </div>
          </div>
        </div>

        <div className="relative mt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-1 border border-white/20 overflow-hidden">
            <div className="bg-gray-950 rounded-3xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <code className="text-sm sm:text-base leading-relaxed">
                <div className="text-cyan-400">
                  <span className="text-gray-600">{'<!-- '}</span>
                  <span className="text-cyan-300 font-semibold">Simply add our tag</span>
                  <span className="text-gray-600">{' -->'}</span>
                </div>
                <div className="text-blue-300 mt-3">
                  <span className="text-blue-400">{'<meta'}</span>
                  <span className="text-yellow-300 ml-2">seo-auto</span>
                  <span className="text-blue-400">{' />'}</span>
                </div>
                <div className="text-gray-600 mt-6">
                  {'<!-- '}
                  <span className="text-green-400">That's it. Optimization begins immediately.</span>
                  {' -->'}
                </div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
