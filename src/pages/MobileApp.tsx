import { motion } from "motion/react";
import { Smartphone, Tablet, Watch, Layers, Cpu, Code2 } from "lucide-react";
import { useRef } from "react";

export const MobileApp = () => {
  const containerRef = useRef(null);

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d946ef]/10 text-[#d946ef] text-xs font-bold mb-6 border border-[#d946ef]/20">
              <Smartphone size={14} />
              <span>تطبيقات الجوال</span>
            </div>
            <h1 className="font-['Cairo'] text-4xl md:text-6xl font-black leading-tight mb-6">
              تجربة مستخدم <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#d946ef] to-[#4d5cff]">بلا حدود</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              نصمم ونبرمج تطبيقات ذكية تعمل بكفاءة على نظامي iOS و Android. تركيزنا على السلاسة والأداء العالي.
            </p>
            
            <div className="flex gap-4">
              <div className="p-4 rounded-xl bg-[#1a0033] border border-white/10 flex flex-col items-center gap-2 w-24 hover:border-[#d946ef] transition-colors">
                <Code2 className="text-[#d946ef]" />
                <span className="text-xs text-gray-400">Clean Code</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1a0033] border border-white/10 flex flex-col items-center gap-2 w-24 hover:border-[#4d5cff] transition-colors">
                <Layers className="text-[#4d5cff]" />
                <span className="text-xs text-gray-400">Native UI</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1a0033] border border-white/10 flex flex-col items-center gap-2 w-24 hover:border-[#00e5ff] transition-colors">
                <Cpu className="text-[#00e5ff]" />
                <span className="text-xs text-gray-400">Fast Performance</span>
              </div>
            </div>
          </motion.div>

          <div className="order-1 md:order-2 relative h-[500px] flex items-center justify-center">
             {/* Floating Phones Animation */}
             <motion.div
               animate={{ y: [-10, 10, -10] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="relative z-10 w-64 md:w-72"
             >
                <div className="aspect-[9/19] rounded-[2.5rem] bg-black border-[8px] border-[#333] overflow-hidden shadow-2xl shadow-[#4d5cff]/20 relative">
                  <div className="absolute top-0 w-full h-8 bg-[#333] z-20 rounded-b-xl flex justify-center">
                    <div className="w-20 h-5 bg-black rounded-b-lg"></div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1755179772124-6614b289b3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9hdGluZyUyMHNtYXJ0cGhvbmUlMjB1aSUyMG1vY2t1cHMlMjBkYXJrJTIwM2R8ZW58MXx8fHwxNzY4ODk1ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="App Interface" 
                    className="w-full h-full object-cover" 
                  />
                  {/* App UI Overlay Simulation */}
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                    <div className="w-12 h-12 rounded-full bg-[#d946ef] mb-4 flex items-center justify-center">
                      <Smartphone className="text-white" size={24} />
                    </div>
                    <div className="w-3/4 h-4 bg-white/20 rounded-full mb-2"></div>
                    <div className="w-1/2 h-4 bg-white/10 rounded-full"></div>
                  </div>
                </div>
             </motion.div>

             {/* Background Element */}
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
               className="absolute w-[500px] h-[500px] border border-white/5 rounded-full border-dashed -z-10"
             />
             <div className="absolute w-[300px] h-[300px] bg-[#d946ef]/10 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Swipeable Screens */}
      <section className="py-20 bg-[#16002b] border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-['Cairo'] text-3xl font-bold mb-2">واجهات مبتكرة</h2>
            <p className="text-gray-400">اسحب للمشاهدة</p>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-colors cursor-pointer">
              ←
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-colors cursor-pointer">
              →
            </div>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 px-6 scrollbar-hide snap-x" ref={containerRef}>
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-[280px] aspect-[9/16] bg-[#222] rounded-3xl border-4 border-[#333] overflow-hidden relative snap-center shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0033] to-[#000]">
                {/* Mock UI */}
                <div className="p-6 pt-12">
                   <div className="flex justify-between items-center mb-8">
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                   </div>
                   <div className="text-2xl font-black font-['Cairo'] text-white mb-2">تطبيق {i}</div>
                   <div className="w-20 h-1 bg-[#d946ef] mb-8"></div>
                   
                   <div className="space-y-4">
                      {[1,2,3].map(j => (
                        <div key={j} className="h-24 rounded-2xl bg-white/5 p-4 flex gap-4 items-center">
                          <div className="w-12 h-12 rounded-lg bg-[#4d5cff]/20"></div>
                          <div className="flex-1">
                            <div className="w-2/3 h-3 bg-white/10 rounded mb-2"></div>
                            <div className="w-1/3 h-3 bg-white/5 rounded"></div>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-6 pt-16 text-center">
        <h3 className="text-gray-400 mb-8 font-['Cairo']">تقنيات نستخدمها</h3>
        <div className="flex justify-center gap-12 flex-wrap">
          {["Flutter", "React Native", "Swift", "Kotlin"].map((tech, i) => (
            <motion.span 
              key={i}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
              className="text-xl md:text-2xl font-bold font-['Cairo'] text-white/50 hover:text-white transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>
    </div>
  );
};
