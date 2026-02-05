import { useState, useEffect } from "react";
import { Menu, X, Globe, Smartphone, BarChart3, Palette, Film, Home } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CustomCursor } from "./CustomCursor";
import imgLogo from "figma:asset/b5d1cd3b976fb69c9546a38cd322a21bf83c3a81.png";

type Page = "home" | "web" | "mobile" | "marketing" | "graphic" | "motion";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setPage: (page: Page) => void;
}

const navItems = [
  { id: "home", label: "الرئيسية", icon: Home },
  { id: "web", label: "مواقع ويب", icon: Globe },
  { id: "mobile", label: "تطبيقات", icon: Smartphone },
  { id: "marketing", label: "تسويق", icon: BarChart3 },
  { id: "graphic", label: "جرافيك", icon: Palette },
  { id: "motion", label: "موشن", icon: Film },
];

export const Layout = ({ children, currentPage, setPage }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#1a0033] text-white font-['Almarai'] selection:bg-[#4d5cff] selection:text-white overflow-x-hidden">
      <CustomCursor />
      
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-[#1a0033]/80 backdrop-blur-md border-[#4d5cff]/20 py-3" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => setPage("home")}
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden relative">
               <img src="https://jwmcjqsdsibflzsaqeek.supabase.co/storage/v1/object/public/Devup/Devup.jpg" alt="DevUp Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Cairo'] font-bold text-xl leading-none tracking-tight">DevUp</span>
              <span className="text-[10px] tracking-widest text-[#00e5ff] uppercase">Digital Agency</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm p-1.5 rounded-full border border-white/10">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id as Page)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? "text-white bg-[#4d5cff] shadow-[0_0_15px_rgba(77,92,255,0.4)]" 
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#1a0033]/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPage(item.id as Page);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-4 rounded-xl flex items-center gap-4 text-lg font-['Cairo'] font-bold border ${
                    currentPage === item.id 
                      ? "bg-[#4d5cff]/20 border-[#4d5cff] text-[#00e5ff]" 
                      : "bg-white/5 border-white/5 text-gray-300"
                  }`}
                >
                  <item.icon />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative pt-0 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-[#110022] border-t border-white/5 py-12 mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4d5cff] to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 text-center md:text-right">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                 <div className="w-10 h-10 rounded-lg overflow-hidden relative">
                    <img src="https://jwmcjqsdsibflzsaqeek.supabase.co/storage/v1/object/public/Devup/Devup.jpg" alt="DevUp Logo" className="w-full h-full object-cover" />
                 </div>
                 <h3 className="font-['Cairo'] text-2xl font-bold text-white">DevUp</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                نحول الأفكار إلى واقع رقمي ملموس باستخدام أحدث التقنيات وأفضل ممارسات التصميم.
              </p>
            </div>
            <div>
              <h4 className="font-['Cairo'] font-bold mb-4 text-[#00e5ff]">الخدمات</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>تصميم المواقع</li>
                <li>تطبيقات الجوال</li>
                <li>التسويق الرقمي</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Cairo'] font-bold mb-4 text-[#00e5ff]">الشركة</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>من نحن</li>
                <li>أعمالنا</li>
                <li>اتصل بنا</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Cairo'] font-bold mb-4 text-[#00e5ff]">تواصل معنا</h4>
              <p className="text-gray-400 text-sm dir-ltr text-right">info@devupdigital.com</p>
              <p className="text-gray-400 text-sm dir-ltr text-right">739474018</p>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2026 DevUp Digital. جميع الحقوق محفوظة.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Twitter</span>
              <span className="hover:text-white cursor-pointer">Instagram</span>
              <span className="hover:text-white cursor-pointer">LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
