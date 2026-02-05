import { useState } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { WebDesign } from "./pages/WebDesign";
import { MobileApp } from "./pages/MobileApp";
import { DigitalMarketing } from "./pages/DigitalMarketing";
import { GraphicDesign } from "./pages/GraphicDesign";
import { MotionGraphics } from "./pages/MotionGraphics";

type Page = "home" | "web" | "mobile" | "marketing" | "graphic" | "motion";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setPage={setCurrentPage} />;
      case "web":
        return <WebDesign />;
      case "mobile":
        return <MobileApp />;
      case "marketing":
        return <DigitalMarketing />;
      case "graphic":
        return <GraphicDesign />;
      case "motion":
        return <MotionGraphics />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo:wght@400;600;700;900&display=swap');
        
        body {
          cursor: none; /* Hide default cursor */
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1a0033;
        }
        ::-webkit-scrollbar-thumb {
          background: #4d5cff;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #00e5ff;
        }

        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* 3D Transform Utilities */
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-6 {
          transform: rotateY(-6deg);
        }
        .rotate-x-6 {
          transform: rotateX(6deg);
        }
      `}</style>
      <Layout currentPage={currentPage} setPage={setCurrentPage}>
        {renderPage()}
      </Layout>
    </>
  );
}
