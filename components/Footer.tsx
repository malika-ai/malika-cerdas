import React from 'react';
import { ASSETS } from '../constants';
import { Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Brand Section */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <img src={ASSETS.footerLogo} alt="Malika Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-semibold text-gray-900">Malika AI</span>
            </div>
            <p className="text-gray-500">
              Membangun masa depan layanan pelanggan dengan kecerdasan buatan yang memanusiakan teknologi.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/officialmalika.ai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <Instagram size={20} />
            </a>
            {/* LinkedIn Removed */}
            <a 
              href="mailto:halo@malika.ai" 
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Malika AI Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};