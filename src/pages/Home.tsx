import { motion } from "motion/react";
import { ArrowLeft, ChevronDown, Rocket, Code, Zap, Globe } from "lucide-react";

export const Home = ({ setPage }: { setPage: (p: any) => void }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1709526867397-2aa7f535868f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwZGFyayUyMHB1cnBsZSUyMG5lb24lMjBsb29wJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njg4OTU4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            className="w-full h-full object-cover"
            alt="Abstract 3D Background"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#1a0033] via-[#1a0033]/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 text-[#00e5ff] text-sm font-medium mb-6 backdrop-blur-md">
                وكالة رقمية متكاملة
              </span>
              <h1 className="font-['Cairo'] text-5xl md:text-7xl font-black leading-tight mb-6">
                نصنع <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#4d5cff] to-[#00e5ff]">التميز الرقمي</span> لمشروعك القادم
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                نحول رؤيتك إلى واقع رقمي مبهر من خلال حلول تقنية متطورة وتصاميم إبداعية تلهم جمهورك.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setPage("web")}
                  className="px-8 py-4 bg-[#4d5cff] hover:bg-[#3d4acc] text-white rounded-full font-bold font-['Cairo'] transition-all shadow-[0_0_20px_rgba(77,92,255,0.4)] hover:shadow-[0_0_30px_rgba(77,92,255,0.6)] flex items-center gap-2 group"
                >
                  <span>اكتشف خدماتنا</span>
                  <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold font-['Cairo'] backdrop-blur-sm transition-all">
                  تواصل معنا
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2 relative h-[400px] md:h-[600px] flex items-center justify-center">
            {/* Kinetic Typography Simulation */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/5 flex items-center justify-center"
              >
                 <div className="absolute w-[90%] h-[90%] rounded-full border border-white/5 border-dashed"></div>
                 <div className="absolute w-[70%] h-[70%] rounded-full border border-[#4d5cff]/20"></div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 text-center"
              >
                <div className="font-['Cairo'] text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 opacity-20 select-none">
                  إبداع
                </div>
                <div className="font-['Cairo'] text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#4d5cff] to-[#4d5cff]/0 opacity-20 select-none absolute top-10 left-10">
                  ابتكار
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase">تصفح المزيد</span>
          <ChevronDown />
        </motion.div>
      </section>

      {/* Intro Stats */}
      <section className="py-20 border-b border-white/5 bg-[#16002b]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "+500", label: "مشروع منجز", icon: Rocket },
              { number: "98%", label: "رضا العملاء", icon: Zap },
              { number: "+50", label: "خبير ومطور", icon: Code },
              { number: "24/7", label: "دعم فني", icon: Globe },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#4d5cff]/50 transition-colors group"
              >
                <div className="mb-4 inline-flex p-3 rounded-full bg-[#4d5cff]/10 text-[#4d5cff] group-hover:bg-[#4d5cff] group-hover:text-white transition-colors">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black font-['Cairo'] text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
