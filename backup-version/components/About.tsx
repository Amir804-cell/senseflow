import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About SenseFlow</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-8 rounded-full"/>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">SenseFlow was founded in Odense, Denmark by an IT-teknolog student with a passion for IoT and embedded systems.</p>
        <p className="text-slate-600 leading-relaxed mb-8">Our mission is to bring intelligent, energy-efficient climate control to Danish homes and care facilities.</p>
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { icon: '🎓', label: 'IT Teknolog' },
            { icon: '🇩🇰', label: 'Danish Made' },
            { icon: '💡', label: 'Innovation' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-sm text-slate-600 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;