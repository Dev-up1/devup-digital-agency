import { motion } from "motion/react";
import { BarChart3, TrendingUp, Users, Target, Play } from "lucide-react";
import { useEffect, useState } from "react";

const CountUp = ({ end, suffix = "" }: { end: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);
  
  return <span>{count}{suffix}</span>;
};

export const DigitalMarketing = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff9d]/10 text-[#00ff9d] text-xs font-bold mb-6 border border-[#00ff9d]/20">
              <TrendingUp size={14} />
              <span>التسويق الرقمي</span>
            </div>
            <h1 className="font-['Cairo'] text-4xl md:text-6xl font-black leading-tight mb-6">
              نتائج قابلة <br />
              <span className="text-[#00ff9d]">للقياس</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              نستخدم البيانات والتحليلات الدقيقة للوصول إلى جمهورك المستهدف وتحقيق أعلى عائد على الاستثمار.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-black font-['Cairo'] text-[#00ff9d] mb-1">
                  <CountUp end={300} suffix="%" />
                </div>
                <div className="text-xs text-gray-400">زيادة في العائد (ROI)</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-black font-['Cairo'] text-[#4d5cff] mb-1">
                  <CountUp end={10} suffix="k" />
                </div>
                <div className="text-xs text-gray-400">عميل محتمل شهرياً</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#16002b]">
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#110022]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">Analytics Dashboard</div>
              </div>
              <div className="relative">
                 <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwZ2xvd2luZyUyMGNoYXJ0c3xlbnwxfHx8fDE3Njg4OTU2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Analytics"
                  className="w-full h-auto opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1a0033] to-transparent"></div>
                 
                 {/* Floating Charts Simulation */}
                 <div className="absolute bottom-8 left-8 right-8 flex gap-4 items-end h-32">
                    {[40, 70, 50, 90, 60, 80].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="flex-1 bg-[#00ff9d]/20 border-t-2 border-[#00ff9d] rounded-t-sm relative group"
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black px-2 py-1 rounded text-[#00ff9d]">
                          {h}%
                        </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
            </div>
            
            {/* Ad Mockup Card */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-48 bg-white text-black p-4 rounded-xl shadow-2xl rotate-3 z-20"
            >
               <div className="flex items-center gap-2 mb-3">
                 <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                 <div className="text-xs font-bold">Sponsored</div>
               </div>
               <div className="aspect-[4/5] bg-gray-100 rounded-lg mb-2 relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Play size={16} fill="white" className="text-white" />
                    </div>
                  </div>
               </div>
               <div className="h-2 w-3/4 bg-gray-200 rounded mb-1"></div>
               <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#110022] py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "إدارة حملات ممولة", desc: "Google Ads, Meta, TikTok" },
              { icon: Users, title: "إدارة وسائل التواصل", desc: "صناعة محتوى، جدولة، وتفاعل" },
              { icon: BarChart3, title: "تحسين محركات البحث", desc: "تصدر نتائج البحث الأولى" }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#1a0033] border border-white/5 hover:border-[#00ff9d]/30 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-[#00ff9d]/10 flex items-center justify-center text-[#00ff9d] mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold font-['Cairo'] mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
