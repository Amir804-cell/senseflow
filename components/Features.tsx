import React from 'react';
import { Thermometer, Gauge, Wifi, Zap, Wind, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Smart Features</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Designed for seamless integration with Danish residential and care-facility ventilation systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Thermometer,
              color: 'cyan',
              title: 'Thermoelectric Cooling Assist',
              desc: 'A compact Peltier-based cooling module provides localized inlet air temperature reduction to improve perceived comfort near ventilation outlets.',
              tags: ['Silent', 'Refrigerant-free', 'Compact']
            },
            {
              icon: Gauge,
              color: 'teal',
              title: 'Indoor Air Quality Monitoring',
              desc: 'Continuous monitoring of key indoor parameters supports a healthy indoor climate.',
              tags: ['PM1 / PM2.5 / PM10', 'Temp', 'Humidity']
            },
            {
              icon: Wifi,
              color: 'emerald',
              title: 'IoT Connectivity',
              desc: 'SenseFlow connects securely to a cloud platform for remote monitoring, historical data visualization, and OTA updates.',
              tags: ['Remote Monitoring', 'OTA Updates', 'Fallback Mode']
            },
            {
              icon: Zap,
              color: 'amber',
              title: 'Energy-Aware Control',
              desc: 'Adaptive control algorithms activate airflow and cooling assistance only when beneficial, minimizing unnecessary power consumption while maintaining comfort.',
              tags: ['Adaptive Control', 'Efficient']
            },
            {
              icon: Wind,
              color: 'blue',
              title: 'Intelligent Airflow',
              desc: 'Variable-speed, low-noise fans dynamically adjust airflow based on real-time sensor data and target comfort parameters. Designed for quiet operation.',
              tags: ['Low Noise', 'Variable Speed']
            },
            {
              icon: ShieldCheck,
              color: 'indigo',
              title: 'Secure & Reliable',
              desc: 'Encrypted communication and local control logic ensure data integrity, reliability, and safe operation in residential and professional environments.',
              tags: ['Encrypted', 'Local Logic']
            }
          ].map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-200 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${f.color}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${f.color === 'cyan' ? 'bg-cyan-50 text-cyan-600' :
                  f.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                    f.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                      f.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                        f.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                          'bg-indigo-50 text-indigo-600'
                }`}>
                <f.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{f.desc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {f.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full group-hover:bg-slate-200 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm max-w-3xl mx-auto italic border-t border-slate-200 pt-8">
            Note: SenseFlow is designed as a comfort and ventilation enhancement system and is not intended to replace traditional air conditioning or HVAC systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;