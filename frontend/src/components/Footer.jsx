import React from 'react';
import { Sparkles } from 'lucide-react';

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto px-10 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="md:col-span-1 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4 text-cyan-700">
              <Sparkles className="h-6 w-6" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">Research AI</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Distill complex documents instantly. Your personal, Vite-powered assistant for extracting insights without the noise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">API Reference</a></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} Research AI Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-cyan-700 transition-colors">
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-cyan-700 transition-colors">
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-cyan-700 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}