import React from 'react';
import { Thermometer, Gauge, Wifi, Zap, Wind, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Smart Features</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Advanced IoT technology designed for seamless integration with Danish ventilation systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Thermometer, color: 'cyan', title: 'Peltier Cooling', desc: 'Efficient thermoelectric cooling module that quietly regulates room temperature without refrigerants.', tags: ['Silent', 'Eco-Friendly'] },
            { icon: Gauge, color: 'teal', title: 'Air Quality Sensors', desc: 'Precision monitoring of CO2, TVOC, humidity, and particulate matter ensures a healthy indoor climate.', tags: ['CO2', 'Humidity'] },
            { icon: Wifi, color: 'emerald', title: 'IoT Connected', desc: 'Full cloud connectivity allows for remote monitoring, historical data analysis, and OTA updates.', tags: ['Remote App', 'Cloud'] },
            { icon: Zap, color: 'amber', title: 'Energy Efficient', desc: 'Smart algorithms optimize power consumption based on occupancy and real-time environmental needs.', tags: ['A++ Rated', 'Smart'] },
            { icon: Wind, color: 'blue', title: 'Intelligent Airflow', desc: 'Variable speed MagLev fans adjust airflow dynamically to maintain target temperature with minimal noise.', tags: ['<25dB', 'Auto-Flow'] },
            { icon: ShieldCheck, color: 'indigo', title: 'Secure & Reliable', desc: 'Enterprise-grade encryption for all data transmissions with local fallback modes for connection loss.', tags: ['Encrypted', 'Local Mode'] }
          ].map((f, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-200 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${f.color}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  f.color === 'cyan' ? 'bg-cyan-50 text-cyan-600' : 
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
      </div>
    </section>
  );
};

export default Features;