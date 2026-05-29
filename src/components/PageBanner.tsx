import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PageBannerProps {
  title: string;
  breadcrumb: string;
  backgroundImage?: string;
}

const PageBanner = ({ title, breadcrumb, backgroundImage }: PageBannerProps) => {
  return (
    <section
      className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80"
        >
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">{breadcrumb}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
