import React, { useState, useEffect } from 'react';
import { Thermometer, Wind, Zap, ArrowRight, Droplets, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  const [temp, setTemp] = useState(24);
  const [cooling, setCooling] = useState(true);
  const [airQuality, setAirQuality] = useState(98);
  const [humidity, setHumidity] = useState(45);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Temperature animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(prev => {
        if (cooling && prev > 19.5) return prev - 0.1;
        if (!cooling && prev < 24.5) return prev + 0.1;
        // Hysteresis to prevent rapid switching
        if (cooling && prev <= 19.5) setCooling(false);
        if (!cooling && prev >= 24.5) setCooling(true);
        return prev;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [cooling]);

  // Fluctuating sensor values
  useEffect(() => {
    const interval = setInterval(() => {
      setAirQuality(Math.floor(95 + Math.random() * 4));
      setHumidity(Math.floor(42 + Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-20 md:pt-20 relative overflow-hidden bg-gradient-to-br from-navy-50 via-white to-primary-50/30">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-400/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
        {/* Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-navy-200 rounded-full text-navy-600 text-sm mb-8 font-medium shadow-soft animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
            </span>
            <span>🇩🇰 Designed in Denmark</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-navy-900 tracking-tight animate-fade-in-up delay-100">
            SenseFlow <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Smart Ventilation & Indoor Air Quality Control
            </span>
          </h1>

          <p className="text-navy-600 mb-10 leading-relaxed text-lg md:text-xl max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-200">
            SenseFlow is a compact IoT-based climate assist system designed to enhance existing ventilation systems with real-time air quality monitoring, intelligent airflow control, and optional localized thermoelectric cooling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300 mb-8">
            <button onClick={() => scrollTo('features')} className="group px-8 py-4 bg-navy-900 text-white rounded-2xl font-semibold shadow-soft-lg hover:shadow-xl hover:bg-navy-800 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Explore Features
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollTo('contact')} className="px-8 py-4 bg-white border-2 border-navy-200 rounded-2xl hover:bg-navy-50 hover:border-primary-300 transition text-navy-700 font-semibold shadow-soft hover:shadow-md">
              Contact Sales
            </button>
          </div>


        </div>

        {/* Animation Container - Hub & Satellite Layout */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center py-10 lg:py-0 animate-fade-in-up delay-200">
          {/* This fixed size container ensures satellites have space and don't get cut off */}
          <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] flex items-center justify-center select-none">

            {/* 1. Visual Tethers (SVG Lines) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-40">
              {/* Center points are roughly 50% 50% */}
              {/* Line to Top Right Satellite */}
              <path
                d="M50% 50% L82% 20%"
                className="stroke-slate-300"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 4"
              />
              <circle cx="82%" cy="20%" r="3" className="fill-cyan-500" />

              {/* Line to Bottom Left Satellite */}
              <path
                d="M50% 50% L15% 75%"
                className="stroke-slate-300"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 4"
              />
              <circle cx="15%" cy="75%" r="3" className="fill-teal-500" />

              {/* Line to Bottom Right Satellite */}
              <path
                d="M50% 50% L85% 65%"
                className="stroke-slate-300"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 4"
              />
              <circle cx="85%" cy="65%" r="3" className="fill-indigo-500" />
            </svg>

            {/* 2. Ambient Glow Behind Device */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-[80px] transition-all duration-1000 ${cooling ? 'opacity-100 scale-110' : 'opacity-40 scale-90'}`} />

            {/* 3. The Main Hub Device */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center transition-transform hover:scale-[1.02] duration-500">

              {/* Ceramic-like outer rim */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-slate-100 border border-white shadow-inner" />

              {/* Status Ring */}
              <div className="absolute inset-2 rounded-full border-[3px] border-slate-100"></div>
              <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] -rotate-90 z-10" viewBox="0 0 100 100">
                <circle
                  cx="50" cy="50" r="48"
                  fill="none"
                  stroke={cooling ? "#06b6d4" : "#cbd5e1"}
                  strokeWidth="3"
                  strokeDasharray="300"
                  strokeDashoffset={cooling ? 100 : 300}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1.5s ease-in-out, stroke 0.5s' }}
                />
              </svg>

              {/* Black Glass Face */}
              <div className="absolute inset-5 rounded-full bg-slate-900 shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center overflow-hidden">

                {/* Reflection/Gloss */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-full pointer-events-none" />

                {/* Digital Display Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-slate-400 text-[10px] font-bold tracking-[0.2em] mb-1">CURRENT TEMP</span>
                  <div className="flex items-start">
                    <span className={`text-6xl font-sans font-medium tracking-tighter transition-colors duration-700 ${cooling ? 'text-white' : 'text-slate-200'}`}>
                      {temp.toFixed(1)}
                    </span>
                    <span className="text-xl text-cyan-500 mt-2 font-light">°</span>
                  </div>

                  {/* Status Indicator */}
                  <div className={`mt-4 flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${cooling ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${cooling ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                    {cooling ? 'Cooling' : 'Standby'}
                  </div>
                </div>

                {/* Animated Mist Particles */}
                {cooling && (
                  <div className="absolute bottom-0 w-full h-full pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bottom-10 left-1/2 w-8 h-8 bg-cyan-500/10 rounded-full blur-xl"
                        style={{
                          transform: 'translateX(-50%)',
                          animation: `riseUp ${2 + i * 0.5}s infinite ease-out`,
                          animationDelay: `${i * 0.3}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 4. Satellite: Target Temp (Top Right) */}
            <div className="absolute top-[5%] right-[0%] md:right-[-5%] z-20 animate-float" style={{ animationDelay: '0s' }}>
              <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 w-40">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target</div>
                  <div className="text-lg font-bold text-slate-800">19.5°</div>
                </div>
              </div>
            </div>

            {/* 5. Satellite: Air Quality (Bottom Left) */}
            <div className="absolute bottom-[10%] left-[0%] md:left-[-5%] z-20 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 w-44">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <Wind className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Air Quality</div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-bold text-slate-800">{airQuality}%</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Satellite: Humidity (Bottom Right) */}
            <div className="absolute bottom-[20%] right-[0%] md:right-[-8%] z-20 animate-float" style={{ animationDelay: '2.5s' }}>
              <div className="bg-white/90 backdrop-blur-xl p-3 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-4 h-4 text-indigo-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Humidity</div>
                  <div className="text-sm font-bold text-slate-800">{humidity}%</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;