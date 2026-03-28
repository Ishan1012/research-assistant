import React from 'react';
import { Settings2, List, FileText, Bookmark, CheckCircle2, SlidersHorizontal, ArrowRight } from 'lucide-react';

export default function FeatureSections() {
  return (
    <div id="features" className="flex flex-col w-full font-sans bg-white">
      
      <section className="py-24 px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Distill complex documents instantly
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              Bypass the fluff and get straight to the core insights. Our engine analyzes lengthy reports, articles, and papers, extracting the most critical data points so you can read less and learn more.
            </p>
          </div>

          <div className="flex-1 relative w-full flex justify-center md:justify-end min-h-[400px] items-center">
            <div className="absolute left-4 md:left-12 top-0 w-80 h-96 border border-slate-200 rounded-lg p-6 bg-slate-50 text-slate-300 text-sm overflow-hidden hidden sm:block">
              <div className="flex items-center gap-2 mb-4 text-slate-400 border-b border-slate-200 pb-2">
                <FileText className="w-4 h-4" /> <span className="text-xs">Q3_Analysis_Report.pdf</span>
              </div>
              <p className="mb-2 line-clamp-2">The methodology applied in this study utilizes a multifaceted approach to determine the underlying variables affecting the market trends observed over the last fiscal year...</p>
              <div className="w-full h-2 bg-slate-200 rounded mt-4"></div>
              <div className="w-5/6 h-2 bg-slate-200 rounded mt-2"></div>
              <div className="w-full h-2 bg-slate-200 rounded mt-2"></div>
              <div className="w-4/6 h-2 bg-slate-200 rounded mt-2"></div>
              <p className="mt-4 line-clamp-3">Furthermore, the statistical significance of the control group suggests that external market pressures have compounded the internal inefficiencies, leading to a bottleneck in processing times...</p>
            </div>

            <div className="relative z-10 w-[320px] rounded-2xl border-[1.5px] border-cyan-700 bg-white p-6 shadow-xl flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-cyan-700 rounded-full p-1.5 text-white">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Summary Depth</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">Output Length</label>
                  <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-lg">
                    <button className="py-1.5 text-xs font-medium bg-white shadow-sm rounded-md text-slate-900">Brief</button>
                    <button className="py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900">Standard</button>
                    <button className="py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900">Detailed</button>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 pt-2">
                  <label className="text-sm font-medium text-slate-700">Focus Areas</label>
                  <input type="text" placeholder="e.g., Key statistics, conclusion" className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm outline-none focus:border-cyan-700" />
                </div>
              </div>

              <button className="w-full bg-cyan-700 hover:bg-cyan-800 text-white font-medium py-2.5 rounded-lg transition-colors mt-auto">
                Generate Summary
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-16 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Export in the format you need
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              Whether you need a quick bulleted list for a standup meeting or a cohesive executive summary for a board presentation, easily switch between output formats to match your exact workflow.
            </p>
          </div>

          <div className="flex-1 relative w-full flex justify-center md:justify-start min-h-[400px] items-center">
             <div className="absolute right-4 md:right-12 top-4 w-80 h-96 border border-slate-200 rounded-lg p-6 bg-white text-slate-300 text-sm overflow-hidden hidden sm:block shadow-sm">
              <div className="w-3/4 h-6 bg-slate-100 rounded mb-6"></div>
              <div className="flex gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-slate-200 mt-1.5 flex-shrink-0"></div>
                <div className="w-full space-y-2">
                  <div className="w-full h-2 bg-slate-200 rounded"></div>
                  <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-slate-200 mt-1.5 flex-shrink-0"></div>
                <div className="w-full space-y-2">
                  <div className="w-full h-2 bg-slate-200 rounded"></div>
                  <div className="w-5/6 h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>

            <div className="relative z-10 w-[320px] rounded-2xl border-[1.5px] border-cyan-700 bg-white p-6 shadow-xl flex flex-col">
               <div className="flex items-center gap-2 mb-6">
                <div className="bg-cyan-700 rounded-full p-1.5 text-white">
                  <List className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Select Format</h3>
              </div>

              <div className="space-y-3">
                <div className="border border-cyan-700 bg-cyan-50/30 rounded-lg p-3 flex items-start gap-3 cursor-pointer">
                  <CheckCircle2 className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Action Items</p>
                    <p className="text-xs text-slate-500 mt-0.5">Bulleted list of tasks and next steps</p>
                  </div>
                </div>
                
                <div className="border border-slate-200 rounded-lg p-3 flex items-start gap-3 cursor-pointer hover:border-slate-300">
                  <div className="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0 mt-0.5"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Executive Summary</p>
                    <p className="text-xs text-slate-500 mt-0.5">A cohesive, high-level overview paragraph</p>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-3 flex items-start gap-3 cursor-pointer hover:border-slate-300">
                  <div className="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0 mt-0.5"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Q & A Format</p>
                    <p className="text-xs text-slate-500 mt-0.5">Answers to the 5 most critical questions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Build your personal knowledge base
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              Save your highest-value summaries, tag them by project or topic, and search through your synthesized research whenever you need it. Never lose a brilliant insight again.
            </p>
          </div>

          <div className="flex-1 relative w-full flex justify-center md:justify-end min-h-[400px] items-center">
             <div className="absolute left-4 md:left-12 top-0 w-80 h-96 border border-slate-200 rounded-lg p-6 bg-slate-50 text-slate-300 text-sm overflow-hidden hidden sm:block">
               <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <div className="w-24 h-2 bg-slate-200 rounded"></div>
                    <div className="w-8 h-8 rounded bg-slate-200"></div>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <div className="w-32 h-2 bg-slate-200 rounded"></div>
                    <div className="w-8 h-8 rounded bg-slate-200"></div>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <div className="w-20 h-2 bg-slate-200 rounded"></div>
                    <div className="w-8 h-8 rounded bg-slate-200"></div>
                  </div>
               </div>
            </div>

            <div className="relative z-10 w-[320px] rounded-2xl border-[1.5px] border-cyan-700 bg-white p-6 shadow-xl flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-cyan-700 rounded-full p-1.5 text-white">
                  <Bookmark className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Save Insight</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">Title</label>
                  <input type="text" defaultValue="Q3 Market Analysis Summary" className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-900 outline-none focus:border-cyan-700" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">Tags</label>
                  <div className="border border-slate-200 rounded-md p-2 flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                      finance <button className="hover:text-slate-900">x</button>
                    </span>
                    <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                      q3-planning <button className="hover:text-slate-900">x</button>
                    </span>
                    <input type="text" placeholder="Add tag..." className="text-xs outline-none bg-transparent w-20" />
                  </div>
                </div>
              </div>

              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg transition-colors mt-auto flex items-center justify-center gap-2">
                Save to Library <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}