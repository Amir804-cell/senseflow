import React from 'react';

const Stats: React.FC = () => {
  return (
    <>
      {/* Stats */}
      <section className="py-16 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '24/7', label: 'Continuous Monitoring' },
              { val: '±0.5°C', label: 'Precision Control' },
              { val: '<25dB', label: 'Ultra-Silent Operation' },
              { val: '100%', label: 'IoT Integrated' }
            ].map((s, i) => (
              <div key={i} className="group p-6 text-center hover:bg-slate-50 rounded-2xl transition-colors cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2 group-hover:text-cyan-600 transition-colors">{s.val}</div>
                <div className="text-slate-500 text-sm font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {[
              { icon: '🇩🇰', text: 'Danish Design' },
              { icon: '♻️', text: 'Eco-Friendly' },
              { icon: '🔌', text: 'Easy Install' },
              { icon: '📡', text: 'Smart Home Ready' }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 hover:-translate-y-0.5 transition-all cursor-default select-none">
                <span className="text-2xl filter grayscale-[30%] group-hover:grayscale-0 transition-all">{badge.icon}</span>
                <span className="font-semibold text-slate-700 text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;