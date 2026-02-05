import { motion } from "motion/react";
import { Film, Play, Pause } from "lucide-react";
import { useState } from "react";

export const MotionGraphics = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const videos = [
    { id: 1, title: "إعلان منتج تقني", gif: "https://media.giphy.com/media/l41lI4bYmcsPJX9bfq/giphy.gif" },
    { id: 2, title: "انترو قناة يوتيوب", gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" },
    { id: 3, title: "شرح خدمة تعليمية", gif: "https://media.giphy.com/media/26tP3M3iA3mMBjFcY/giphy.gif" },
    { id: 4, title: "هوية بصرية متحركة", gif: "https://media.giphy.com/media/l0HlOaQcLn2hO77m0/giphy.gif" },
  ];

  return (
    <div className="min-h-screen">
       {/* Hero Video Background */}
       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1741114056868-e9ab2d56ed64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwZmx1aWQlMjB3YXZlcyUyMG1vdGlvbiUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY4ODk1ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
               className="w-full h-full object-cover filter brightness-50"
               alt="Motion Background"
             />
             <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10 text-center container px-6">
             <motion.h1 
               className="font-['Cairo'] text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-white to-[#4d5cff] mb-6"
               animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               style={{ backgroundSize: "200% auto" }}
             >
               تحريك الأفكار
             </motion.h1>
             <p className="text-xl md:text-2xl text-white font-light max-w-2xl mx-auto">
               نبث الروح في تصاميمك الثابتة لنخلق قصصاً بصرية لا تُنسى.
             </p>
          </div>
          
          {/* Wave Effect at bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
             <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                 <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#1a0033]"></path>
             </svg>
          </div>
       </section>

       {/* Portfolio Grid */}
       <section className="bg-[#1a0033] py-20">
         <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-8">
             {videos.map((video, i) => (
               <motion.div
                 key={video.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1 }}
                 className="group relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10"
                 onMouseEnter={() => setPlayingIndex(i)}
                 onMouseLeave={() => setPlayingIndex(null)}
               >
                 {playingIndex === i ? (
                   <img 
                     src={video.gif} 
                     alt={video.title} 
                     className="w-full h-full object-cover"
                   />
                 ) : (
                   <div className="w-full h-full relative">
                     <img 
                       src={video.gif} // In a real app, this would be a static thumbnail
                       alt={video.title} 
                       className="w-full h-full object-cover opacity-50 blur-sm"
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                         <Play fill="white" className="text-white ml-1" />
                       </div>
                     </div>
                   </div>
                 )}
                 
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent pt-12">
                   <h3 className="text-xl font-bold font-['Cairo'] text-white">{video.title}</h3>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
    </div>
  );
};
