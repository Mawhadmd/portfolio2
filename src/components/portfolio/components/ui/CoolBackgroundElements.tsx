import React from 'react';

const CoolBackgroundElements = () => {
    return (
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                aria-hidden="true"
                role="presentation"
              >
                {/* Large Floating Orbs with Enhanced Gradients */}
                <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
                <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
                {/* Small Accent Orbs */}
                <div className="absolute top-1/5 left-2/3 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-1/5 left-1/2 w-24 h-24 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-2xl animate-float-delayed"></div>
        
                {/* Floating Tech Icons */}
                <div className="absolute top-1/5 right-1/5 opacity-15 animate-float">
                  <div className="text-2xl" aria-hidden="true">
                    ⚛️
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-1/5 opacity-15 animate-float-delayed">
                  <div className="text-xl" aria-hidden="true">
                    🚀
                  </div>
                </div>
                <div className="absolute top-3/5 right-1/3 opacity-15 animate-float">
                  <div className="text-lg" aria-hidden="true">
                    💻
                  </div>
                </div>
                <div className="absolute bottom-1/5 right-2/3 opacity-15 animate-float-delayed">
                  <div className="text-xl" aria-hidden="true">
                    ⚡
                  </div>
                </div>
                <div className="absolute top-1/3 right-1/6 opacity-10 animate-float">
                  <div className="text-lg" aria-hidden="true">
                    🎨
                  </div>
                </div>
                <div className="absolute bottom-2/5 left-1/6 opacity-10 animate-float-delayed">
                  <div className="text-lg" aria-hidden="true">
                    🌟
                  </div>
                </div>
        
                {/* Enhanced Geometric Shapes */}
                <div className="absolute top-1/3 left-1/2 w-16 h-16 border border-Text/8 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-1/2 right-1/6 w-12 h-12 border-2 border-accent/20 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-accent/10 rotate-12 animate-bounce-slow"></div>
                <div className="absolute top-1/6 right-1/3 w-6 h-20 border-l-2 border-Text/5 rotate-12 animate-float"></div>
                <div className="absolute bottom-1/6 left-2/3 w-20 h-1 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-pulse delay-1500"></div>
        
                {/* Enhanced Code-like Elements */}
                <div className="absolute top-1/6 left-1/3 opacity-8 font-mono text-xs animate-float">
                  <span className="text-accent/30">&lt;</span>code
                  <span className="text-accent/30">/&gt;</span>
                </div>
                <div className="absolute bottom-1/3 right-1/5 opacity-8 font-mono text-xs animate-float-delayed">
                  <span className="text-accent/30">{"{"}</span>...
                  <span className="text-accent/30">{"}"}</span>
                </div>
                <div className="absolute top-2/5 left-1/5 opacity-6 font-mono text-xs animate-float">
                  <span className="text-accent/20">const</span> magic ={" "}
                  <span className="text-accent/20">true</span>
                </div>
                <div className="absolute bottom-2/3 right-1/4 opacity-6 font-mono text-xs animate-float-delayed">
                  <span className="text-accent/20">npm</span> run{" "}
                  <span className="text-accent/20">dev</span>
                </div>
        
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                      linear-gradient(hsl(var(--Text), 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, hsl(var(--Text), 0.1) 1px, transparent 1px)
                    `,
                      backgroundSize: "40px 40px",
                    }}
                  ></div>
                </div>
        
                {/* Animated Lines */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-pulse delay-3000"></div>
                <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-pulse delay-4000"></div>
              </div>
    );
}

export default CoolBackgroundElements;
