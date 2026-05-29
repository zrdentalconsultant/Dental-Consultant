import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import {
  ShieldPlus,
  Siren,
  HeartPulse,
  Stethoscope,
  FlaskConical,
  BadgeDollarSign,
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpeg";
import doctorStanding from "@/assets/doctor-standing.jpeg";
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

const whyChooseUs = [
  {
    icon: ShieldPlus,
    title: "Expert Care",
    desc: "Professional dental consultations backed by years of clinical experience.",
  },
  {
    icon: Siren,
    title: "Emergency Help",
    desc: "Immediate dental assistance available for urgent pain and emergencies.",
  },
  {
    icon: HeartPulse,
    title: "Qualified Doctors",
    desc: "Highly trained specialists including surgeons, orthodontists and endodontists.",
  },
  {
    icon: Stethoscope,
    title: "Medical Advices",
    desc: "Personalized oral health guidance and preventive care recommendations.",
  },
  {
    icon: FlaskConical,
    title: "Modern Equipment",
    desc: "State-of-the-art technology for accurate diagnosis and effective treatment.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Prices",
    desc: "Quality dental care at competitive prices with flexible payment options.",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageBanner title="Our Services" breadcrumb="Services" backgroundImage={aboutHero} />

      {/* ─── Services Grid ─── */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-yellow-600 font-semibold mb-2">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Dental <span className="text-gradient">Services</span>
            </h2>
          </motion.div>

          {/* Grid */}
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
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
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

      {/* ─── Why Choose Us (Reference Image Style) ─── */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ─── LEFT: Text + Feature Grid ─── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Label with line */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <p className="text-primary font-semibold uppercase tracking-widest text-sm">
                  Why Choose Us
                </p>
              </div>

              {/* Heading */}
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground mb-10 leading-tight">
                Ready To Get Your{" "}
                <span className="text-gradient">Dental Health</span> Solution.
              </h2>

              {/* Feature Grid - 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {whyChooseUs.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    {/* Icon Box */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Text */}
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-base mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ─── RIGHT: Doctor Image with Blue Accent ─── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Blue background accent shape */}
              <div className="absolute top-0 right-0 w-[85%] h-[90%] bg-primary/20 rounded-3xl -z-0" />
              <div className="absolute top-4 right-4 w-[80%] h-[85%] bg-primary rounded-3xl -z-0" />

              {/* Doctor Image */}
              <div className="relative z-10">
                <img
                  src={doctorStanding}
                  alt="Professional dental team"
                  className="max-h-[550px] object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-0 lg:-left-4 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <HeartPulse className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">15K+</p>
                    <p className="text-muted-foreground text-xs">Happy Patients</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge top-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-8 left-0 lg:-left-4 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldPlus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">20+</p>
                    <p className="text-muted-foreground text-xs">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-muted section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-yellow-600 font-semibold mb-2">Our Dental Service</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">In Numbers</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15K+", label: "Happy Patients" },
              { value: "20+", label: "Years Experience" },
              { value: "98%", label: "Success Rate" },
              { value: "4", label: "Specialist Doctors" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </Layout>
  );
};

export default Services;