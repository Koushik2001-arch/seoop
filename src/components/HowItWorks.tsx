import { Code, Sparkles, Rocket, BarChart3 } from 'lucide-react';
import { useEffect, useState } from 'react';

const steps = [
  {
    icon: Code,
    title: 'Add the Tag',
    description: 'Paste our meta tag into your HTML head section. That\'s literally all the setup required.',
    color: 'bg-blue-500'
  },
  {
    icon: Sparkles,
    title: 'AI Awakens',
    description: 'Our neural network immediately begins analyzing your site structure, content, and technical aspects.',
    color: 'bg-cyan-500'
  },
  {
    icon: Rocket,
    title: 'Auto-Optimize',
    description: 'Algorithms apply industry-proven SEO techniques, schema markup, and structural improvements.',
    color: 'bg-green-500'
  },
  {
    icon: BarChart3,
    title: 'Track Growth',
    description: 'Monitor real-time improvements in rankings, visibility, and organic traffic through our dashboard.',
    color: 'bg-orange-500'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-black via-blue-950/10 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-500/30 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-cyan-300">The Process</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            From Tag to
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Top Rankings
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            See how simple it is to transform your website into an SEO powerhouse in just four steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`mb-6 cursor-pointer transition-all duration-500 group ${
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                  }`}
                >
                  <div
                    className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/50'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${step.color} ${
                          isActive ? 'scale-110' : ''
                        }`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10">
                            Step {index + 1}
                          </span>
                          {isActive && (
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
                          style={{
                            width: `${progress}%`,
                            transition: 'width 0.05s linear'
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative">
                <div className="bg-gray-950 rounded-2xl p-6 mb-6">
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-cyan-400">
                      <span className="text-gray-600">{'<'}</span>
                      <span className="text-yellow-300">meta</span>
                      <span className="text-blue-400"> seo-auto</span>
                      <span className="text-gray-600">{' />'}</span>
                    </div>
                    <div className="text-gray-600 mt-4">
                      <div className="flex items-center space-x-2 text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Analyzing structure...</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-white font-bold mb-4 text-lg">What Happens Behind the Scenes</h4>
                <ul className="space-y-3">
                  {[
                    'Scans entire site architecture',
                    'Identifies SEO opportunities',
                    'Generates optimized metadata',
                    'Creates schema markup',
                    'Improves content structure',
                    'Monitors performance metrics'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { label: 'Setup Time', value: '< 1 Min' },
            { label: 'Results Start', value: '24 Hours' },
            { label: 'Full Impact', value: '30-60 Days' }
          ].map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
