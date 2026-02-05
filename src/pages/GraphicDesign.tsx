import { motion, AnimatePresence } from "motion/react";
import { Palette, PenTool, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const logos = [
  "https://images.unsplash.com/photo-1626785774573-4b7993143a26?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1636955860106-9eb89e576026?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1603513492128-ba280510dd60?auto=format&fit=crop&q=80&w=300"
];

export const GraphicDesign = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState("#4d5cff");

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff0055]/10 text-[#ff0055] text-xs font-bold mb-6 border border-[#ff0055]/20">
              <Palette size={14} />
              <span>التصميم الجرافيكي</span>
            </div>
            <h1 className="font-['Cairo'] text-4xl md:text-6xl font-black leading-tight mb-6">
              هوية بصرية <br />
              <span className="text-[#ff0055]">تخلد في الذاكرة</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              نصمم شعارات وهويات بصرية تعكس قيم علامتك التجارية وتميزك عن المنافسين.
            </p>

            {/* Color Palette Generator */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-sm text-gray-400 mb-4 font-bold">مولد ألوان الهوية</h3>
              <div className="flex gap-4 mb-4">
                {["#4d5cff", "#ff0055", "#00e5ff", "#ffcc00"].map((color) => (
                  <div 
                    key={color}
                    onClick={() => setActiveColor(color)}
                    className={`w-10 h-10 rounded-full cursor-pointer transition-transform ${activeColor === color ? 'scale-125 ring-2 ring-white' : 'hover:scale-110'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div 
                className="h-24 rounded-xl flex items-center justify-center transition-colors duration-500"
                style={{ backgroundColor: activeColor }}
              >
                <span className="bg-black/20 px-4 py-2 rounded-lg text-white font-mono text-sm backdrop-blur-md">
                  {activeColor}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            {/* Floating Assets Collage */}
            <div className="absolute inset-0">
               <motion.img 
                src="https://images.unsplash.com/photo-1704018731159-ef9ce0a1f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMHN0YXRpb25lcnklMjBtb2NrdXAlMjBkYXJrJTIwZ3Jhdml0eXxlbnwxfHx8fDE3Njg4OTU4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Brand Assets"
                className="w-full h-full object-contain drop-shadow-2xl"
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               />
            </div>
            {/* Floating Elements */}
            <motion.div 
              className="absolute top-10 right-10 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center"
              animate={{ y: [10, -10, 10], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            >
              <PenTool className="text-white" />
            </motion.div>
            <motion.div 
              className="absolute bottom-20 left-10 w-16 h-16 bg-[#ff0055]/20 backdrop-blur-md rounded-lg border border-[#ff0055]/30 flex items-center justify-center rotate-12"
              animate={{ y: [-5, 5, -5], rotate: [12, 0, 12] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
            >
              <ImageIcon className="text-[#ff0055]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#110022] py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="font-['Cairo'] text-3xl md:text-5xl font-bold mb-12 text-center">أعمالنا المميزة</h2>
          
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter="20px">
              {logos.map((src, i) => (
                <motion.div 
                  key={i}
                  layoutId={`img-${i}`}
                  onClick={() => setSelectedImage(src)}
                  className="cursor-pointer overflow-hidden rounded-xl group relative"
                  whileHover={{ y: -5 }}
                >
                  <img src={src} className="w-full grayscale group-hover:grayscale-0 transition-all duration-500" alt="Work" />
                  <div className="absolute inset-0 bg-[#4d5cff]/0 group-hover:bg-[#4d5cff]/20 transition-colors"></div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div 
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
               <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#ff0055] transition-colors"
               >
                 <X size={32} />
               </button>
               <img src={selectedImage} alt="Full View" className="w-full h-full object-contain rounded-lg shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
