import { motion } from "motion/react";
import { Laptop, Layout, Smartphone, Code2, Globe } from "lucide-react";

export const WebDesign = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] text-xs font-bold mb-6 border border-[#00e5ff]/20">
              <Globe size={14} />
              <span>تصميم وتطوير المواقع</span>
            </div>
            <h1 className="font-['Cairo'] text-4xl md:text-6xl font-black leading-tight mb-6">
              واجهات عصرية <br />
              <span className="text-[#4d5cff]">تأسر الأنظار</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              نطور مواقع ويب سريعة، متجاوبة، ومصممة لتحقيق أهدافك التجارية. نجمع بين جمال التصميم وقوة الأداء.
            </p>
            
            <div className="flex flex-col gap-4">
              {[
                "تصميم متجاوب مع جميع الشاشات",
                "صديق لمحركات البحث (SEO)",
                "لوحة تحكم سهلة الإدارة",
                "أداء فائق السرعة"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 text-gray-200"
                >
                  <div className="w-6 h-6 rounded-full bg-[#4d5cff]/20 flex items-center justify-center text-[#4d5cff]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000 group"
          >
            <div className="relative z-10 transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:rotate-x-6 preserve-3d">
              {/* Laptop Frame */}
              <div className="relative bg-[#222] rounded-xl p-2 shadow-2xl border border-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#333] rounded-b-md z-20"></div>
                <div className="relative overflow-hidden rounded-lg aspect-video bg-[#0f0f0f] group">
                  {/* Scrolling Content */}
                  <img 
                    src="https://images.unsplash.com/photo-1693207761400-ded14835fa7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGlzb21ldHJpYyUyMGxhcHRvcCUyMGRhc2hib2FyZCUyMGludGVyZmFjZSUyMGRhcmt8ZW58MXx8fHwxNzY4ODk1ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Dashboard Interface" 
                    className="w-full object-cover transition-transform duration-[5s] ease-linear group-hover:translate-y-[-20%]"
                  />
                  
                  {/* Overlay UI Elements for flair */}
                  <div className="absolute top-4 right-4 w-32 h-10 bg-white/10 backdrop-blur-md rounded-lg border border-white/5 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#4d5cff] rounded-full flex items-center justify-center shadow-lg shadow-[#4d5cff]/40">
                    <Layout size={20} className="text-white" />
                  </div>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="h-4 bg-[#333] mt-[-2px] rounded-b-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] relative z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-[#444] rounded-b-lg"></div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#4d5cff]/30 to-[#00e5ff]/30 blur-[80px] -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Templates Showcase */}
      <section className="bg-[#110022] py-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Cairo'] text-3xl md:text-5xl font-bold mb-4">نماذج حية</h2>
            <p className="text-gray-400">اختر من مكتبتنا المتنوعة أو اطلب تصميماً خاصاً</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "متجر (Metjar)", desc: "للتجارة الإلكترونية", color: "#4d5cff" },
              { title: "شركة (Sharika)", desc: "للشركات والمؤسسات", color: "#00e5ff" },
              { title: "معرض (Ma'rad)", desc: "للمعارض الشخصية", color: "#d946ef" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#1a0033]"
              >
                <div className="aspect-[4/5] bg-gray-900 relative overflow-hidden">
                  {/* Simulated webpage content */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a0033] to-black p-4 group-hover:scale-105 transition-transform duration-700">
                    <div className="w-full h-4 bg-white/10 rounded-full mb-4"></div>
                    <div className="flex gap-4 mb-8">
                       <div className="w-2/3 h-32 rounded-lg bg-white/5"></div>
                       <div className="w-1/3 h-32 rounded-lg bg-white/5"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       {[1,2,3,4,5,6].map(n => (
                         <div key={n} className="aspect-square rounded-lg bg-white/5"></div>
                       ))}
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1a0033]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-4">
                    <h3 className="font-['Cairo'] text-2xl font-bold">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                    <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-sm">
                      معاينة حية
                    </button>
                  </div>
                </div>
                <div className="p-4 border-t border-white/5 flex justify-between items-center">
                  <span className="font-bold font-['Cairo']">{item.title}</span>
                  <div className="w-3 h-3 rounded-full shadow-[0_0_10px]" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
