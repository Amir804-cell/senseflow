import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2, Info, Microchip, Fan, Thermometer, Box, RotateCcw } from 'lucide-react';
import { explainComponent } from '../services/geminiService';

// Predefined data structure for instant feedback
const COMPONENT_DETAILS: Record<string, {
  title: string;
  description: string;
  specs: Record<string, string>;
  icon: React.ReactNode;
  aiInsight: string; // Predefined AI-style technical insight
}> = {
  heatsink: {
    title: 'Aluminum Heatsink Array',
    description: 'High-efficiency aluminum alloy heatsink designed to dissipate thermal energy from the Peltier hot side. Optimized fin geometry maximizes surface area within the compact enclosure.',
    specs: { 'Material': 'Al 6063-T5', 'Thermal Res': '0.85 °C/W', 'Fin Count': '24', 'Dimensions': '120x120mm' },
    icon: <Box className="w-6 h-6 text-slate-600" />,
    aiInsight: 'Think of this as the device\'s cooling fins - just like the radiator in your car. It pulls heat away from the cooling chip and spreads it out across many metal fins, where it naturally disappears into the air. More fins mean better cooling!'
  },
  peltier: {
    title: 'Thermoelectric Cooler (TEC)',
    description: 'Solid-state active cooling module using the Peltier effect. Transfers heat from one side to the other when current flows, creating a temperature differential without moving parts.',
    specs: { 'Model': 'TEC1-12706', 'Qmax': '60W', 'Delta Tmax': '66°C', 'Vmax': '15.4V' },
    icon: <Thermometer className="w-6 h-6 text-indigo-600" />,
    aiInsight: 'This is the magic cooling chip! When electricity flows through it, one side gets cold while the other gets hot - no moving parts needed. It\'s like a heat pump for your room, silently moving warmth from where you don\'t want it to where it can be safely removed.'
  },
  front: {
    title: 'Smart Interface Panel',
    description: 'Injection-molded front housing integrating airflow vents and a high-contrast OLED display for real-time system metrics and status visualization.',
    specs: { 'Display': '0.96" OLED', 'Resolution': '128x64 px', 'Material': 'ABS Fire-Retardant', 'Interface': 'I2C' },
    icon: <Info className="w-6 h-6 text-cyan-600" />,
    aiInsight: 'This is what you see and interact with! The small screen shows you the current temperature and system status at a glance. The vents let air flow through to help with cooling, while keeping the design sleek and modern.'
  },
  esp32: {
    title: 'ESP32 Control Unit',
    description: 'Dual-core microcontroller managing PID temperature control loops, sensor data acquisition, and secure WiFi/MQTT connectivity to the SenseFlow cloud.',
    specs: { 'SoC': 'ESP32-WROOM', 'Clock': '240MHz', 'Flash': '4MB', 'Connectivity': '2.4GHz WiFi + BT' },
    icon: <Microchip className="w-6 h-6 text-green-600" />,
    aiInsight: 'This tiny computer chip is the brain of SenseFlow. It constantly checks the temperature, decides how much cooling is needed, and adjusts everything automatically. It also connects to your WiFi so you can control and monitor your device from your phone!'
  },
  sensor: {
    title: 'Multi-Sensor Array',
    description: 'Integrated environmental sensing suite monitoring ambient temperature, relative humidity, and air quality (eCO2/TVOC) for autonomous regulation.',
    specs: { 'Temp Precision': '±0.5°C', 'Humidity': '±2% RH', 'Response': '< 2s', 'Protocol': 'Digital Bus' },
    icon: <Sparkles className="w-6 h-6 text-amber-600" />,
    aiInsight: 'These are SenseFlow\'s eyes and nose! They constantly measure the temperature, humidity, and air quality in your room. This information helps the device know exactly when and how much to cool, keeping you comfortable automatically.'
  },
  fan: {
    title: 'MagLev Silent Fan',
    description: 'Pulse-Width Modulation (PWM) controlled active cooling fan. Uses magnetic levitation bearings for ultra-quiet operation and extended lifespan.',
    specs: { 'RPM': '600-1500', 'Noise': '< 18 dBA', 'Airflow': '45 CFM', 'Bearing': 'MagLev' },
    icon: <Fan className="w-6 h-6 text-slate-600" />,
    aiInsight: 'This whisper-quiet fan helps move air across the cooling fins, making them work even better. It uses magnetic levitation (like a maglev train!) so there\'s almost no friction or noise. It automatically speeds up when needed and slows down when things are cool.'
  }
};

const InteractiveProduct: React.FC = () => {
  const [exploded, setExploded] = useState(false);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [bumpedPart, setBumpedPart] = useState<string | null>(null);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);

  // Hardcoded temp for visual consistency with hero
  const temp = 24.0;

  // Fetch AI insight when a part is selected
  useEffect(() => {
    if (selectedPart) {
      setIsLoadingInsight(true);
      setAiInsight(''); // Reset previous insight

      const partInfo = COMPONENT_DETAILS[selectedPart];

      // Use predefined insight for instant, accurate feedback
      if (partInfo && partInfo.aiInsight) {
        // Simulate a brief loading for better UX
        setTimeout(() => {
          setAiInsight(partInfo.aiInsight);
          setIsLoadingInsight(false);
        }, 300);
      } else {
        setAiInsight("Technical insight unavailable for this component.");
        setIsLoadingInsight(false);
      }
    } else {
      setAiInsight('');
    }
  }, [selectedPart]);

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExploded(false);
    setSelectedPart(null);
  };

  const handlePartClick = (e: React.MouseEvent, partId: string) => {
    e.stopPropagation();
    setSelectedPart(partId);

    // Trigger visual bump animation
    setBumpedPart(partId);
    setTimeout(() => {
      setBumpedPart(null);
    }, 200); // Short duration for snappy feedback
  };

  return (
    <section id="product" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Engineered for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> Danish Homes</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Click on the device to explore its components. Every part designed for optimal performance.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Interactive 3D Device */}
          <div className="flex flex-col items-center sticky top-24">
            <div
              className="relative w-72 h-72 cursor-pointer group/container"
              onClick={() => setExploded(!exploded)}
            >
              {/* Reset View Button */}
              {(exploded || selectedPart) && (
                <button
                  onClick={handleReset}
                  className="absolute -top-6 -right-6 md:-right-12 p-2.5 bg-white border border-slate-200 text-slate-500 rounded-full shadow-lg hover:text-cyan-600 hover:border-cyan-200 hover:scale-110 transition-all duration-300 z-30 flex items-center gap-2 group/btn"
                  title="Reset View"
                >
                  <RotateCcw className="w-4 h-4 group-hover/btn:-rotate-180 transition-transform duration-500" />
                  <span className="text-xs font-medium pr-1 hidden md:block opacity-0 group-hover/btn:opacity-100 transition-opacity absolute right-full mr-2 whitespace-nowrap bg-slate-800 text-white px-2 py-1 rounded">Reset View</span>
                </button>
              )}

              {/* Subtle glow */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-teal-400/20 blur-2xl transition-all duration-700 ${exploded ? 'scale-150 opacity-50' : 'scale-100 opacity-100'}`}
              />

              {/* Device layers - exploded view */}
              <div className="absolute inset-0 flex items-center justify-center">

                {/* Back layer - Heatsink */}
                <div
                  className={`absolute w-44 h-44 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 shadow-lg transition-all cursor-pointer ${bumpedPart === 'heatsink' ? 'duration-150 scale-110 brightness-110' : 'duration-700 hover:scale-105'} ${exploded ? '-translate-y-28' : ''} ${!bumpedPart && exploded ? 'scale-90' : ''} ${selectedPart === 'heatsink' ? 'ring-4 ring-cyan-400' : ''}`}
                  onClick={(e) => handlePartClick(e, 'heatsink')}
                >
                  <div className="w-full h-full rounded-full flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-1">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-3 h-8 bg-slate-500 rounded-sm" />
                      ))}
                    </div>
                  </div>
                  {exploded && <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-600 whitespace-nowrap">Heatsink</div>}
                </div>

                {/* Middle layer - Peltier */}
                <div
                  className={`absolute w-32 h-32 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-lg transition-all flex items-center justify-center cursor-pointer ${bumpedPart === 'peltier' ? 'duration-150 scale-110 brightness-110' : 'duration-700 hover:scale-105'} ${exploded ? '-translate-y-6' : ''} ${selectedPart === 'peltier' ? 'ring-4 ring-cyan-400' : ''}`}
                  onClick={(e) => handlePartClick(e, 'peltier')}
                >
                  <div className="w-24 h-24 rounded bg-indigo-800 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-5 h-5 bg-indigo-300 rounded-sm" />
                      ))}
                    </div>
                  </div>
                  {exploded && <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-indigo-600 whitespace-nowrap">Peltier Module</div>}
                </div>

                {/* Front layer - Main unit (NO ROTATION) */}
                <div
                  className={`absolute w-56 h-56 rounded-full bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-2xl border-4 border-slate-200 transition-all cursor-pointer ${bumpedPart === 'front' ? 'duration-150 scale-110 brightness-105' : 'duration-700 hover:scale-105'} ${exploded ? 'translate-y-16' : ''} ${!bumpedPart && exploded ? 'scale-90' : ''} ${selectedPart === 'front' ? 'ring-4 ring-cyan-400' : ''}`}
                  onClick={(e) => handlePartClick(e, 'front')}
                >
                  <div className="w-full h-full rounded-full flex flex-col items-center justify-center p-6">
                    {/* Vents */}
                    <div className="flex flex-col gap-2 mb-3">
                      {[0, 1, 2].map(i => (
                        <div key={i} className="w-24 h-2.5 bg-slate-300 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"
                            style={{ animation: 'pulse 2s infinite', animationDelay: `${i * 0.2}s` }} />
                        </div>
                      ))}
                    </div>
                    {/* Display */}
                    <div className="bg-slate-900 px-4 py-2 rounded-lg">
                      <span className="text-xl font-mono text-cyan-400">{temp.toFixed(1)}°C</span>
                    </div>
                  </div>
                  {exploded && <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-cyan-600 whitespace-nowrap">Front Panel</div>}
                </div>

                {/* ESP32 chip - shows when exploded */}
                <div
                  className={`absolute w-16 h-10 rounded bg-gradient-to-br from-green-500 to-green-700 shadow-lg transition-all flex items-center justify-center cursor-pointer ${bumpedPart === 'esp32' ? 'duration-150 scale-110 brightness-110' : 'duration-700 hover:scale-110'} ${exploded ? 'translate-x-36 translate-y-4 opacity-100' : 'translate-x-0 translate-y-0 opacity-0 scale-50'} ${selectedPart === 'esp32' ? 'ring-4 ring-cyan-400' : ''}`}
                  onClick={(e) => handlePartClick(e, 'esp32')}
                >
                  <div className="text-xs text-white font-bold">ESP32</div>
                  {exploded && <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-green-600 whitespace-nowrap">Controller</div>}
                </div>

                {/* Sensor - shows when exploded */}
                <div
                  className={`absolute w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg transition-all flex items-center justify-center cursor-pointer ${bumpedPart === 'sensor' ? 'duration-150 scale-110 brightness-110' : 'duration-700 hover:scale-110'} ${exploded ? '-translate-x-36 translate-y-8 opacity-100' : 'translate-x-0 translate-y-0 opacity-0 scale-50'} ${selectedPart === 'sensor' ? 'ring-4 ring-cyan-400' : ''}`}
                  onClick={(e) => handlePartClick(e, 'sensor')}
                >
                  <div className="w-4 h-4 bg-amber-200 rounded-full" />
                  {exploded && <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-amber-600 whitespace-nowrap">Sensors</div>}
                </div>

                {/* Fan - shows when exploded */}
                <div
                  className={`absolute w-14 h-14 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 shadow-lg transition-all flex items-center justify-center cursor-pointer ${bumpedPart === 'fan' ? 'duration-150 scale-110 brightness-110' : 'duration-700 hover:scale-110'} ${exploded ? '-translate-x-32 -translate-y-20 opacity-100' : 'translate-x-0 translate-y-0 opacity-0 scale-50'} ${selectedPart === 'fan' ? 'ring-4 ring-cyan-400' : ''}`}
                  onClick={(e) => handlePartClick(e, 'fan')}
                >
                  <svg className="w-10 h-10 text-slate-400" style={{ animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                  {exploded && <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-600 whitespace-nowrap">Silent Fan</div>}
                </div>
              </div>
            </div>

            {/* Interaction hint */}
            <button
              onClick={() => { setExploded(!exploded); setSelectedPart(null); }}
              className={`mt-16 px-6 py-2.5 rounded-full font-medium transition-all z-10 relative ${exploded ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl'}`}
            >
              {exploded ? '← Assemble View' : 'Explode View →'}
            </button>
          </div>

          {/* Specifications Panel */}
          <div className="space-y-6">
            {/* Main Details Card */}
            <div className={`p-6 rounded-2xl border-2 transition-all duration-500 min-h-[300px] flex flex-col ${selectedPart ? 'bg-white border-cyan-200 shadow-lg' : 'bg-slate-50 border-slate-200 shadow-inner'}`}>

              {selectedPart && COMPONENT_DETAILS[selectedPart] ? (
                <>
                  <div className="flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 flex items-center justify-center border border-cyan-100">
                      {COMPONENT_DETAILS[selectedPart].icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800 leading-tight">
                        {COMPONENT_DETAILS[selectedPart].title}
                      </h3>
                      <p className="text-xs font-medium text-cyan-600 uppercase tracking-wider mt-0.5">Component Selected</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-75">
                    {COMPONENT_DETAILS[selectedPart].description}
                  </p>

                  {/* Dynamic AI Insight Section */}
                  <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-100 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-400 to-purple-500"></div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <div className="w-full">
                        <h4 className="text-sm font-bold text-slate-700 mb-1 flex items-center justify-between">
                          AI Technical Insight
                          {isLoadingInsight && <Loader2 className="w-3 h-3 text-indigo-400 animate-spin" />}
                        </h4>
                        {isLoadingInsight ? (
                          <div className="space-y-2 mt-2">
                            <div className="h-2 bg-slate-200 rounded w-3/4 animate-pulse"></div>
                            <div className="h-2 bg-slate-200 rounded w-5/6 animate-pulse"></div>
                          </div>
                        ) : (
                          <p className="text-xs text-slate-500 italic leading-relaxed">
                            "{aiInsight || 'Analysis available via backend service...'}"
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12 opacity-50">
                  <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mb-4">
                    <Box className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-400 mb-2">No Component Selected</h3>
                  <p className="text-slate-400 text-sm max-w-xs">Click on any part of the exploded view to reveal its technical specifications and AI analysis.</p>
                </div>
              )}
            </div>

            {/* Technical Specs Table */}
            {selectedPart && COMPONENT_DETAILS[selectedPart] && (
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                <div className="p-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <h3 className="font-bold text-sm text-slate-700">Technical Data</h3>
                  <div className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">Verified</div>
                </div>
                <div className="divide-y divide-slate-100">
                  {Object.entries(COMPONENT_DETAILS[selectedPart].specs).map(([key, value], i) => (
                    <div key={key} className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors">
                      <span className="text-xs font-medium text-slate-500">{key}</span>
                      <span className="text-xs font-mono font-semibold text-slate-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProduct;