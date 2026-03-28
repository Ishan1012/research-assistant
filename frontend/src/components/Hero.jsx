import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-24 flex flex-col items-center justify-center text-center px-4 font-sans">
      <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        <div className="inline-flex items-center rounded-full border border-cyan-400 bg-cyan-50/50 px-4 py-1.5 text-sm font-medium text-cyan-800">
          <Sparkles className="mr-2 h-4 w-4 text-cyan-600" />
          Powered by Google Gemini
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
          Research Assistant using <span className="text-cyan-700">Spring AI.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Strip away the noise. Paste your articles, research papers, or meeting notes, and get clear, concise insights instantly without the clutter.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href='#app' className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-700 h-11 px-8 py-2 bg-cyan-700 text-white shadow hover:bg-cyan-800">
            Start Summarizing
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href='#features' className="inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 h-11 px-8 py-2 bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-100 hover:text-slate-900">
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}