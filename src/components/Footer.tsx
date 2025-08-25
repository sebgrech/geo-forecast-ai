import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import regioniqLogoIcon from '@/assets/regioniq-logo-icon.png';

const Footer = () => {
  return (
    <footer className="bg-bg-navy border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={regioniqLogoIcon} alt="RegionIQ" className="w-8 h-8" />
              <span className="text-xl font-semibold text-ink">RegionIQ</span>
            </div>
            <p className="text-ink-dim leading-relaxed max-w-md">
              AI-native subnational economic forecasts built for decision-makers. 
              Faster updates, clearer justification, easier integration.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-ink-dim hover:text-ink hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-ink-dim hover:text-ink hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@regioniq.com" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-ink-dim hover:text-ink hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-ink mb-4">Product</h3>
            <ul className="space-y-3 text-ink-dim">
              <li><a href="#product" className="hover:text-ink transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-ink transition-colors">How it works</a></li>
              <li><a href="#pricing" className="hover:text-ink transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-ink mb-4">Company</h3>
            <ul className="space-y-3 text-ink-dim">
              <li><a href="#about" className="hover:text-ink transition-colors">About</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ink-dim text-sm">
            © 2024 RegionIQ. All rights reserved.
          </p>
          <p className="text-ink-dim text-sm mt-4 md:mt-0">
            Built with ❤️ for better regional insights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;