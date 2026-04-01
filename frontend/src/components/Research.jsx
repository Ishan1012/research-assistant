import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Loader2, AlignLeft, Sparkles, Lightbulb } from 'lucide-react';

export default function Research() {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [activeOperation, setActiveOperation] = useState(null);
    const [isTakingLong, setIsTakingLong] = useState(false);

    const MAX_WORDS = 200;
    const currentWordCount = inputText.trim().split(/\s+/).filter(word => word.length > 0).length;
    const isOverLimit = currentWordCount > MAX_WORDS;

    const handleProcess = async (operation) => {
        if (!inputText.trim() || isOverLimit) return;

        setIsLoading(true);
        setActiveOperation(operation);
        setOutputText('');
        setIsTakingLong(false);

        const delayTimer = setTimeout(() => {
            setIsTakingLong(true);
        }, 10000);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081'}/api/research/process`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: inputText,
                    operation: operation,
                }),
            });

            if(response.status==429) {
                const errMessage = await response.text();
                setOutputText(`### Whoops!\n\n${errMessage}\n\n*Please try again later or contact the administrator.*`);
                return;
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.text();
            setOutputText(data);

        } catch (error) {
            console.error("Error processing request:", error);
            setOutputText("An error occurred while connecting to the backend!");
        } finally {
            clearTimeout(delayTimer);
            setIsLoading(false);
            setActiveOperation(null);
            setIsTakingLong(false);
        }
    };

    return (
        <div id="app" className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans flex items-center justify-center">

            <div className="w-full max-w-6xl bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col md:flex-row overflow-hidden min-h-[600px]">
                <div className="w-full md:w-1/2 flex flex-col border-b md:border-b-0 md:border-r border-slate-200">
                    <div className="flex-grow p-6 flex flex-col">
                        <textarea
                            className="flex-grow w-full resize-none outline-none text-slate-700 placeholder:text-slate-400 text-lg leading-relaxed bg-transparent"
                            placeholder="Type or paste your text here..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            disabled={isLoading}
                        />

                        <div className={`text-xs mt-3 flex justify-end transition-colors ${isOverLimit ? 'text-red-500 font-medium' : 'text-slate-400'}`}>
                            {currentWordCount} / {MAX_WORDS} words
                        </div>
                    </div>

                    <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                        <button
                            type="button"
                            className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
                            onClick={() => setInputText('A strong body style keeps long-form content readable and balances the visual weight of headings. Designers love packing quirky glyphs into test phrases.')}
                            disabled={isLoading}
                        >
                            Try sample text
                        </button>

                        <div className="flex gap-3">
                            <button
                                onClick={() => handleProcess('suggest')}
                                disabled={isLoading || currentWordCount === 0 || isOverLimit}
                                className="inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 disabled:pointer-events-none disabled:opacity-50 bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-100 h-10 px-4 py-2"
                            >
                                {isLoading && activeOperation === 'suggest' ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <Lightbulb className={`mr-2 h-4 w-4 ${isOverLimit || currentWordCount === 0 ? 'text-slate-400' : 'text-amber-500'}`} />
                                )}
                                Suggest
                            </button>

                            <button
                                onClick={() => handleProcess('summarize')}
                                disabled={isLoading || currentWordCount === 0 || isOverLimit}
                                className="inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-700 disabled:pointer-events-none disabled:opacity-50 bg-cyan-700 text-white shadow hover:bg-cyan-800 h-10 px-6 py-2"
                            >
                                {isLoading && activeOperation === 'summarize' ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Summarizing...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Summarize
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col bg-slate-50/30">
                    <div className="p-4 border-b border-slate-100 flex items-center gap-2 text-slate-800 font-semibold">
                        {activeOperation === 'suggest' ? 'Suggestions' : 'Summarized text'}
                    </div>

                    <div className="flex-grow p-6 flex items-center justify-center relative">
                        {isLoading ? (
                            <div className="flex flex-col items-center text-slate-500 animate-pulse">
                                <Loader2 className="h-8 w-8 animate-spin mb-4 text-cyan-700" />
                                <p className="text-sm">
                                    {activeOperation === 'suggest' ? 'Generating suggestions...' : 'Analyzing and compressing text...'}
                                </p>
                                {isTakingLong && (
                                    <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg max-w-xs text-center animate-[fadeIn_0.5s_ease-in-out]">
                                        <p className="text-xs text-amber-700">
                                            The backend server is waking up from inactivity. This first request might take up to 50 seconds. Hang tight!
                                        </p>
                                    </div>
                                )}
                            </div>
                        ) : outputText ? (
                            <div className="absolute inset-0 p-6 overflow-auto">
                                <div className="max-w-none pb-8">
                                    <ReactMarkdown
                                        components={{
                                            h2: ({ node, ...props }) => (
                                                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 first:mt-0" {...props} />
                                            ),
                                            h3: ({ node, ...props }) => (
                                                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3" {...props} />
                                            ),
                                            p: ({ node, ...props }) => (
                                                <p className="text-slate-700 text-lg leading-relaxed mb-4" {...props} />
                                            ),
                                            ul: ({ node, ...props }) => (
                                                <ul className="list-none space-y-3 mb-6" {...props} />
                                            ),
                                            li: ({ node, ...props }) => (
                                                <li className="flex items-start text-slate-700 text-lg leading-relaxed" {...props}>
                                                    <span className="mr-3 mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-600" />
                                                    <span>{props.children}</span>
                                                </li>
                                            ),
                                            strong: ({ node, ...props }) => (
                                                <strong className="font-semibold text-slate-900" {...props} />
                                            ),
                                        }}
                                    >
                                        {outputText}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center text-center max-w-xs text-slate-400">
                                <div className="mb-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <AlignLeft className="h-10 w-10 text-slate-300" />
                                </div>
                                <p className="text-sm text-slate-500">
                                    Add your text on the left and click Summarize or Suggest to see the AI results here
                                </p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}