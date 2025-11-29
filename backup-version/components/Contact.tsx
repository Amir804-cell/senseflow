import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-32 -z-0" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Get In Touch</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Interested in implementing SenseFlow in your building? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center border border-cyan-100 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Email</div>
                  <div className="text-lg text-slate-800 font-medium">contact@senseflow.dk</div>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center border border-teal-100 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Location</div>
                  <div className="text-lg text-slate-800 font-medium">Odense, Denmark</div>
                  <div className="text-sm text-slate-500">Munkebjergvænget 1</div>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Phone</div>
                  <div className="text-lg text-slate-800 font-medium">+45 12 34 56 78</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all placeholder:text-slate-300"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all placeholder:text-slate-300"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..." 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all placeholder:text-slate-300 resize-none"
                />
              </div>
              
              <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-4">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;