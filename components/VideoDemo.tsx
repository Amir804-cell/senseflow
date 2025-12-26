import React, { useState, useEffect } from 'react';
import { Scan, Cpu, Wind, RefreshCw, CheckCircle2, Activity } from 'lucide-react';

const VideoDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 0,
      icon: Scan,
      label: 'Detection',
      desc: 'Integrated sensors continuously measure indoor air quality, temperature, and humidity.',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10'
    },
    {
      id: 1,
      icon: Cpu,
      label: 'Processing',
      desc: 'An ESP32-based controller processes sensor data and calculates optimal airflow and cooling assistance.',
      color: 'text-violet-400',
      bg: 'bg-violet-400/10'
    },
    {
      id: 2,
      icon: Wind,
      label: 'Regulation',
      desc: 'Fans and the thermoelectric cooling module are adjusted in real time to support indoor comfort and air quality.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10'
    },
    {
      id: 3,
      icon: RefreshCw,
      label: 'Synchronization',
      desc: 'Operational data is stored locally and can be synchronized with a cloud platform and mobile application.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-cyan-400 text-xs font-medium mb-4">
            <Activity className="w-3 h-3" />
            System Intelligence
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">How SenseFlow Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A smart cycle of detection, processing, and regulation for optimal indoor climate control.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Interactive Timeline */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`group cursor-pointer relative p-6 rounded-2xl border transition-all duration-500 ${activeStep === index
                  ? 'bg-slate-900/80 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] translate-x-4'
                  : 'bg-slate-900/30 border-slate-800 hover:bg-slate-900/50 hover:border-slate-700'
                  }`}
              >
                <div className="flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${activeStep === index ? step.bg + ' ' + step.color : 'bg-slate-800 text-slate-500'
                    }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 transition-colors ${activeStep === index ? 'text-white' : 'text-slate-400'}`}>
                      {step.label}
                    </h3>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                  {activeStep === index && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Progress Bar for active step */}
                {activeStep === index && (
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-slate-800 overflow-hidden rounded-full">
                    <div className="h-full bg-cyan-500 animate-[flowBar_3s_linear]" style={{ width: '100%' }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Visualization Dashboard */}
          <div className="relative aspect-square md:aspect-[4/3] bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col shadow-2xl overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Header */}
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs font-mono text-slate-500">SYS_MONITOR_V1.2</div>
            </div>

            {/* Dynamic Content Container */}
            <div className="flex-1 flex items-center justify-center relative z-10">

              {/* Step 0: Detection Animation */}
              {activeStep === 0 && (
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-2 border-amber-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                    <div className="w-24 h-24 rounded-full border border-amber-500/50" />
                  </div>
                  <Scan className="w-10 h-10 text-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />

                  {/* Radar waves */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-amber-500/20 rounded-full animate-ping" />

                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                    <div className="text-amber-400 font-mono text-sm mb-1">SCANNING_ENV</div>
                    <div className="text-xs text-slate-500">Temp: 24.5°C | CO2: 450ppm</div>
                  </div>
                </div>
              )}

              {/* Step 1: Processing Animation */}
              {activeStep === 1 && (
                <div className="relative">
                  <Cpu className="w-20 h-20 text-violet-500 mb-4 mx-auto" />
                  <div className="flex gap-2 justify-center mb-6">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-2 h-8 bg-violet-500/30 rounded-full overflow-hidden">
                        <div className="w-full bg-violet-500 animate-[rise_1s_ease-in-out_infinite]" style={{ height: '100%', animationDelay: `${i * 0.2}s` }} />
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-violet-400 font-mono text-sm">PROCESSING_LOGIC</div>
                    <div className="text-xs text-slate-500 mt-1">PID Loop Active</div>
                  </div>
                </div>
              )}

              {/* Step 2: Regulation Animation */}
              {activeStep === 2 && (
                <div className="relative w-full max-w-xs">
                  <div className="flex justify-between items-center mb-2 text-xs text-cyan-400 font-mono">
                    <span>PELTIER_PWR</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-cyan-500 w-[85%] relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 animate-[flowBar_1s_linear_infinite]" />
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-4">
                    <Wind className="w-12 h-12 text-cyan-500 animate-[spin_1s_linear_infinite]" />
                    <div className="text-sm text-slate-300">
                      <div>Cooling Active</div>
                      <div className="text-xs text-slate-500">-0.5°C / min</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Sync Animation */}
              {activeStep === 3 && (
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-full animate-ping" />
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/50">
                      <RefreshCw className="w-8 h-8 text-emerald-500 animate-spin" style={{ animationDuration: '3s' }} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      200 OK
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 justify-center text-xs text-slate-400 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Data sent to AWS IoT Core</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-xs text-slate-400 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>App Dashboard Updated</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Console */}
            <div className="mt-8 border-t border-slate-800 pt-4 font-mono text-[10px] text-slate-600 flex justify-between">
              <span>UPTIME: 14D 03H 22M</span>
              <span>MEM: 42%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;