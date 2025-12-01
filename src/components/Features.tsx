import { Zap, Target, Shield, TrendingUp, Cpu, Clock, CheckCircle, Lightbulb } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Instant Integration',
    description: 'Add a single tag to your codebase and activate enterprise-grade SEO automation instantly.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Cpu,
    title: 'AI-Powered Engine',
    description: 'Machine learning algorithms continuously analyze and optimize every aspect of your site.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Strategic keyword placement, semantic optimization, and intent-based content structure.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Clock,
    title: 'Real-Time Adaptation',
    description: 'Continuous monitoring and automatic adjustments as search algorithms evolve.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Growth Acceleration',
    description: 'Watch rankings climb steadily with proven optimization techniques applied automatically.',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Future-Proof SEO',
    description: 'Stay compliant with every algorithm update without lifting a finger.',
    gradient: 'from-rose-500 to-pink-500'
  }
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-cyan-900/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-500/30 mb-6">
            <Lightbulb className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">Powerful Features</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Enterprise-Grade
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SEO Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every feature is built for scale, precision, and results. No compromises, no limitations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>

                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Included</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">What You Get</h3>
            <ul className="space-y-3">
              {['Complete SEO Analysis', 'Keyword Research & Optimization', 'Meta Tag Generation', 'Content Structure Enhancement', 'Link Profile Analysis', 'Technical SEO Audit'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Setup Requirements</h3>
            <ul className="space-y-3">
              {['No Technical Knowledge Required', 'Single Line of Code', 'Works with Any Framework', 'No Configuration Needed', 'Instant Activation', 'Zero Maintenance'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
