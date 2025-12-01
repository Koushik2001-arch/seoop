import { useEffect, useState } from 'react';
import { TrendingUp, Users, Zap } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 60;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}{suffix}</span>;
};

export default function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      label: 'Average Traffic Increase',
      value: 240,
      suffix: '%',
      description: 'Verified improvement in organic traffic'
    },
    {
      icon: Users,
      label: 'Active Clients',
      value: 1200,
      suffix: '+',
      description: 'Growing community of satisfied users'
    },
    {
      icon: Zap,
      label: 'Optimization Time Saved',
      value: 95,
      suffix: '%',
      description: 'Hours saved per year per client'
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-blue-900/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real data from real clients achieving extraordinary SEO results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>

                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all text-center">
                  <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-6" />

                  <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {stat.label}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
