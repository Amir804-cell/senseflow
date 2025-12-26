import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Shield, Leaf, Award } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-900 text-navy-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4">SenseFlow</h3>
                        <p className="text-navy-300 text-sm leading-relaxed mb-6">
                            Danish innovation in smart climate control. Bringing sustainable, intelligent cooling solutions to modern homes.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-full bg-navy-800 hover:bg-primary-600 flex items-center justify-center transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-navy-800 hover:bg-primary-600 flex items-center justify-center transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-navy-800 hover:bg-primary-600 flex items-center justify-center transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Product</h4>
                        <ul className="space-y-2.5">
                            <li><a href="#features" className="text-navy-300 hover:text-primary-400 text-sm transition-colors">Features</a></li>
                            <li><a href="#product" className="text-navy-300 hover:text-primary-400 text-sm transition-colors">Technology</a></li>
                            <li><a href="#" className="text-navy-300 hover:text-primary-400 text-sm transition-colors">Specifications</a></li>
                            <li><a href="#" className="text-navy-300 hover:text-primary-400 text-sm transition-colors">Installation</a></li>
                            <li><a href="#" className="text-navy-300 hover:text-primary-400 text-sm transition-colors">Warranty</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2.5">
                            <li><a href="#about" className="text-navy-300 hover:text-primary-400 text-sm transition-colors">About Us</a></li>
                            <li><a href="#" className="text-navy-300 hover:text-primary-400 text-sm transition-colors">Careers</a></li>
                            <li><a href="#" className="text-navy-300 hover:text-primary-400 text-sm transition-colors">Press Kit</a></li>
                            <li><a href="#contact" className="text-navy-300 hover:text-primary-400 text-sm transition-colors">Contact</a></li>
                            <li><a href="#" className="text-navy-300 hover:text-primary-400 text-sm transition-colors">Partners</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-navy-300 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" />
                                <span>Nyborgvej 200<br />5000 Odense C</span>
                            </li>
                            <li className="flex items-center gap-2 text-navy-300 text-sm">
                                <Mail className="w-4 h-4 flex-shrink-0 text-primary-400" />
                                <a href="mailto:info@senseflow.dk" className="hover:text-primary-400 transition-colors">info@senseflow.dk</a>
                            </li>
                            <li className="flex items-center gap-2 text-navy-300 text-sm">
                                <Phone className="w-4 h-4 flex-shrink-0 text-primary-400" />
                                <a href="tel:+4550433034" className="hover:text-primary-400 transition-colors">+45 50 43 30 34</a>
                            </li>
                        </ul>
                    </div>
                </div>



                {/* Bottom Bar */}
                <div className="border-t border-navy-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-400">
                    <p>© {currentYear} SenseFlow ApS. All rights reserved. CVR: 46113373</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
