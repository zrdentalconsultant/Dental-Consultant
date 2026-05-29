import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Add your service images in /assets folder
import dentalImplant from "@/assets/dental-implant.jpeg";
import rootCanal from "@/assets/root-canal.jpeg";
import braces from "@/assets/braces.jpeg";
import aligners from "@/assets/aligners.jpeg"; 
import bridge from "@/assets/bridge.jpeg";
import wisdomTooth from "@/assets/wisdom-tooth.jpeg";
import veneers from "@/assets/veneers.jpeg";
import gumsSurgery from "@/assets/gums-surgery.jpeg";
import toothFillings from "@/assets/tooth-fillings.jpeg";
import teethWhitening from "@/assets/teeth-whitening.jpeg";
import toothJewellery from "@/assets/tooth-jewellery.jpeg";

const services = [
  { image: dentalImplant, title: "Dental Implant", desc: "Top quality dental implant services for missing teeth." },
  { image: rootCanal, title: "Root Canal", desc: "Pain-free root canal treatment for tooth infection and decay." },
  { image: braces, title: "Braces", desc: "Correct crooked teeth with modern braces treatment." },
  { image: aligners, title: "Aligners", desc: "Clear aligners for invisible and comfortable teeth alignment." },
  { image: bridge, title: "Bridge", desc: "Replace missing teeth with natural-looking dental bridges." },
  { image: wisdomTooth, title: "Wisdom Tooth Extraction", desc: "Safe extraction of problematic wisdom teeth." },
  { image: veneers, title: "Veneers", desc: "Enhance your smile with custom-made dental veneers." },
  { image: gumsSurgery, title: "Gums Surgery", desc: "Professional treatment for gum diseases and aesthetics." },
  { image: toothFillings, title: "Tooth Fillings", desc: "Durable and cosmetic fillings for cavities." },
  { image: teethWhitening, title: "Teeth Whitening", desc: "Brighten your smile with safe whitening procedures." },
  { image: toothJewellery, title: "Tooth Jewellery", desc: "Add a sparkle to your smile with stylish tooth jewellery." },
];

const ServicesGrid = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-yellow-700 font-semibold mb-2">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our Dental <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-service text-center group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;


