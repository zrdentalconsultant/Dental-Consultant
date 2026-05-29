import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

const ResultsShowcase = () => {
  const [slider, setSlider] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = ((clientX - rect.left) / rect.width) * 100;
    x = Math.max(0, Math.min(100, x));
    setSlider(x);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">

        {/* Image Comparison */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          ref={containerRef}
          className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg select-none cursor-ew-resize aspect-[4/3]"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {/* BEFORE IMAGE (Background - full width) */}
          <img
            src={afterImg}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* AFTER IMAGE (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${slider}%)` }}
          >
            <img
              src={beforeImg}
              alt="After"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>

          {/* SLIDER LINE */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-sm"
            style={{ left: `${slider}%`, transform: "translateX(-50%)" }}
          />

          {/* SLIDER HANDLE */}
          <div
            className="absolute top-1/2 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
            style={{
              left: `${slider}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <polyline points="8 4 4 8 8 12" />  {/* left arrow  */}
              <polyline points="16 4 20 8 16 12" /> {/* right arrow */}
            </svg>
          </div>

          {/* LABELS */}
          <span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
            AFTER
          </span>
          <span className="absolute top-3 right-3 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
            BEFORE
          </span>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="text-primary font-semibold uppercase mb-2">
            See The Transformation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stunning Results Showcase
            <br />
            <span className="text-primary">The Life Changing Impact</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our clinic was created to make your smile beautiful, healthy and
            confident through modern dental treatment and advanced restoration
            procedures.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li>✔ Clinic offers a comprehensive dental treatment</li>
            <li>✔ Help you achieve optimal oral health</li>
            <li>✔ Full Mouth X-ray Facility</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsShowcase;