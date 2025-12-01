import { useState } from 'react';
import { Mail, Bell, CheckCircle, Zap } from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="coming-soon" className="py-32 bg-gradient-to-b from-black via-blue-950/5 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-500/30 mb-8">
          <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Join the Revolution
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
          Be Part of the
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            SEO Transformation
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Our AI-powered SEO automation tool is launching soon. Join thousands of forward-thinking businesses securing early access and exclusive founder benefits.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 whitespace-nowrap"
              >
                Secure Access
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto mb-12 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg border border-green-500/30 rounded-2xl p-6 flex items-center justify-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-green-200 font-semibold">
              You're on the list. Check your email!
            </span>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-xl rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              1,200+
            </div>
            <div className="text-gray-400 font-semibold">Early Adopters</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-xl rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Q1 2026
            </div>
            <div className="text-gray-400 font-semibold">Official Launch</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-xl rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-400 font-semibold">Automated</div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-xl rounded-2xl border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Early Supporter Perks</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {['50% Lifetime Discount', 'Priority Support', 'Custom Integration', 'Private Beta Access'].map((perk, i) => (
              <div key={i} className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="font-semibold">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
