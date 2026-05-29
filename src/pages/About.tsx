import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  X,
  CalendarDays,
  User,
  Mail,
  PhoneCall,
  MessageSquare,
  Clock,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import aboutHero from "@/assets/about-hero.jpeg";
import doctor1 from "@/assets/doctor-1.jpeg";
import doctor2 from "@/assets/doctor-2.jpeg";
import doctor3 from "@/assets/doctor-3.jpeg";
import doctor4 from "@/assets/doctor-4.jpeg";
import service1 from "@/assets/dental-service-1.jpg";
import service3 from "@/assets/dental-service-3.jpg";
import review1 from "@/assets/review-1.jpeg";
import dentalImg4 from "@/assets/dental-service-2.jpeg";

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "95%", label: "Dental Success" },
  { value: "85%", label: "Client Referral" },
  { value: "90%", label: "Travel Satisfaction" },
];

const highlights = [
  "Safety First",
  "Full Service Dentistry",
  "Modern Equipment",
  "Set Of Diagnostics",
];

const features = [
  {
    title: "Experienced Dental",
    desc: "Skilled care backed by years of trusted dental experience.",
  },
  {
    title: "Advanced Technology",
    desc: "Modern tools ensure accurate and efficient treatments.",
  },
  {
    title: "Personalized Treatment",
    desc: "Custom care plans made to fit your smile and lifestyle.",
  },
  {
    title: "Family-Friendly",
    desc: "Welcoming space for kids, teens, adults, and seniors.",
  },
];

const team = [
  {
    name: "Dr. Muhammad Abdullah",
    role: "Senior Dental Surgeon",
    image: doctor1,
    desc: "Muhammad Abdullah is a skilled and dedicated general dentist with over 7 years of clinical experience, committed to providing high-quality, patient-centered dental care. He holds certifications in endodontics, orthodontics, and dental implants, allowing him to offer a wide range of advanced treatments under one roof. In addition, he has completed his MCPS in Family Dentistry, further strengthening his expertise in comprehensive oral health management for patients of all ages. Dr. Abdullah is known for his gentle approach, attention to detail, and focus on delivering comfortable, effective, and long-lasting dental solutions.",
    socials: { tiktok: "https://www.tiktok.com/@dental_consultants", instagram: "https://www.instagram.com/dentalconsultants/" },
  },
  {
    name: "Dr. Usama Mumtaz Abbasi",
    role: "Consultant Orthodontist",
    image: doctor2,
    desc: "Dr. Usma Mumtaz is a highly qualified orthodontist with an MDS in Orthodontics, specializing in the diagnosis, prevention, and correction of dental and facial irregularities. With a strong academic background and clinical expertise, he is dedicated to creating confident, healthy smiles through advanced orthodontic treatments, including braces and aligners. Dr. Mumtaz is known for his precision, patient-focused approach, and commitment to delivering personalized treatment plans that ensure optimal functional and aesthetic outcomes.",
    socials: { tiktok: "https://www.tiktok.com/@dental_consultants", instagram: "https://www.instagram.com/dentalconsultants/" },
  },
  {
    name: "Dr. Umer Iqbal",
    role: "Oral & Maxillofacial Surgeon",
    image: doctor3,
    desc: "Dr. Umer Iqbal is a highly skilled Maxillofacial Surgeon and FCPS specialist, with extensive expertise in the diagnosis and surgical management of complex facial, oral, and jaw conditions. He is trained in performing advanced procedures including facial trauma management, corrective jaw surgeries, and oral surgical treatments with precision and care. Dr. Iqbal is known for his meticulous surgical skills, patient-centered approach, and commitment to achieving both functional excellence and aesthetic outcomes, ensuring the highest standard of care for his patients",
    socials: { tiktok: "https://www.tiktok.com/@dental_consultants", instagram: "https://www.instagram.com/dentalconsultants/" },
  },
  {
    name: "Dr. Romessa Anis",
    role: "Endodontist",
    image: doctor4,
    desc: "Dr. Romessa Anis is a dedicated general dentist with 4 years of clinical experience, known for her compassionate approach and commitment to patient comfort. She holds certifications in endodontics, orthodontics, and pediatric (child care) dentistry, enabling her to provide comprehensive dental care for both adults and children. With a focus on gentle treatment and attention to detail, Dr. Romessa Anis strives to deliver effective, personalized dental solutions while ensuring a positive and stress-free experience for every patient.",
    socials: { tiktok: "https://www.tiktok.com/@dental_consultants", instagram: "https://www.instagram.com/dentalconsultants/" },
  },
];

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `New Appointment Request:%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Service: ${formData.service}%0A` +
      `Date: ${formData.date}%0A` +
      `Time: ${formData.time}%0A` +
      `Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/923316403406?text=${text}`;
    window.open(whatsappURL, "_blank");

    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
      setShowForm(false);
    }, 3000);
  };

  return (
    <Layout>
      <PageBanner
        title="About Us"
        breadcrumb="About"
        backgroundImage={aboutHero}
      />

      {/* ─── Hero About Section ─── */}
      <section className="section-padding overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] font-bold text-foreground mb-6 leading-tight">
                Your Smile, Our Expertise{" "}
                <span className="text-gradient">
                  Comprehensive Dental Solutions
                </span>
              </h2>

              <p className="text-foreground/80 font-medium leading-relaxed mb-5 text-base italic">
                We are proud to be recognized for our commitment to excellence
                in dental care. Since our establishment, we have been dedicated
                to providing top-notch dental services to the community.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                At Dentist Consultants, we believe that a healthy and beautiful
                smile is a gateway to confidence, well-being, and a vibrant
                life. Established with a passion for precision dentistry and
                patient-centered care, our clinic is dedicated to providing
                comprehensive dental solutions.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold text-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                About Our Clinic
              </Link>
            </motion.div>

            {/* RIGHT: Circular Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[560px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="absolute top-0 left-[10%] w-52 h-52 rounded-full overflow-hidden shadow-xl border-4 border-white z-10"
                >
                  <img
                    src={service1}
                    alt="Happy patient smiling"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-0 right-0 w-48 h-56 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-10"
                >
                  <img
                    src={service3}
                    alt="Dental treatment"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-[42%] left-0 w-56 h-48 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-10"
                >
                  <img
                    src={review1}
                    alt="Patient care"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-0 right-[5%] w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-white z-10"
                >
                  <img
                    src={dentalImg4}
                    alt="Dental team"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>

                {/* Rating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute top-[38%] right-[22%] z-30"
                >
                  <div className="relative">
                    <svg
                      viewBox="0 0 120 120"
                      className="w-28 h-28 drop-shadow-lg"
                    >
                      <path
                        d="M60 0 L72 38 L110 38 L80 62 L90 100 L60 78 L30 100 L40 62 L10 38 L48 38 Z"
                        fill="#f5c97a"
                        opacity="0.3"
                      />
                      <circle cx="60" cy="58" r="38" fill="#fae0b2" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-heading text-2xl font-bold text-foreground leading-none">
                        4.98
                      </span>
                      <span className="text-muted-foreground text-xs font-medium mt-0.5">
                        Ratings
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-[15%] left-[30%] w-40 h-40 bg-primary/5 rounded-full -z-10 blur-xl" />
                <div className="absolute bottom-[15%] right-[25%] w-48 h-48 bg-primary/5 rounded-full -z-10 blur-xl" />
                <div className="absolute top-[30%] right-[8%] z-0">
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, idx) => (
                      <div
                        key={idx}
                        className="w-1.5 h-1.5 rounded-full bg-primary/20"
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-[8%] left-[15%] w-20 h-20 border-2 border-primary/10 rounded-full -z-10" />
                <div className="absolute top-[5%] right-[35%] w-12 h-12 border-2 border-primary/10 rounded-full -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold mb-3 tracking-wide">
                Why Choose Our Dental Care
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Exceptional Service With a{" "}
                <span className="text-gradient">Personal Touch</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Choosing the right dental provider matters. We combine expert
                care, advanced technology, and a warm atmosphere to ensure every
                visit is comfortable, efficient, and tailored to your unique
                needs.
              </p>
              <div className="w-full h-px bg-gray-200 mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <h4 className="font-heading font-bold text-foreground mb-1.5">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[500px] md:h-[560px]">
                <div className="col-span-7 row-span-6 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={service1}
                    alt="Dental patient smiling"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="col-span-5 row-span-7 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={service3}
                    alt="Patient in dental chair"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="col-span-7 row-span-6 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={review1}
                    alt="Dental professional"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="col-span-5 row-span-5 bg-primary/5 border border-primary/10 rounded-2xl flex flex-col items-center justify-center p-4 shadow-lg">
                  <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-1">
                    15+
                  </p>
                  <p className="text-muted-foreground text-sm font-medium text-center">
                    Years of Trusted
                    <br />
                    Dental Excellence
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 opacity-20 -z-10">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-primary"
                >
                  {[...Array(25)].map((_, i) => (
                    <circle
                      key={i}
                      cx={(i % 5) * 22 + 10}
                      cy={Math.floor(i / 5) * 22 + 10}
                      r="3"
                      fill="currentColor"
                    />
                  ))}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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

      {/* ─── Team ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-yellow-600 font-semibold mb-2">Our Team</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Qualified <span className="text-gradient">Professionals</span>
            </h2>
          </motion.div>

          <div className="space-y-10">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-6 border-rounded ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-2xl object-cover shadow-lg flex-shrink-0"
                />
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white" />

        <div className="absolute top-10 right-10 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="30" cy="30" r="4" fill="currentColor" className="text-primary" />
            <circle cx="80" cy="20" r="3" fill="currentColor" className="text-primary" />
            <circle cx="150" cy="40" r="5" fill="currentColor" className="text-primary" />
            <circle cx="120" cy="80" r="3" fill="currentColor" className="text-primary" />
            <circle cx="60" cy="90" r="4" fill="currentColor" className="text-primary" />
            <line x1="30" y1="30" x2="80" y2="20" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="80" y1="20" x2="150" y2="40" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="150" y1="40" x2="120" y2="80" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="120" y1="80" x2="60" y2="90" stroke="currentColor" className="text-primary" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute bottom-10 left-10 opacity-10">
          <svg width="180" height="180" viewBox="0 0 180 180">
            <circle cx="20" cy="60" r="3" fill="currentColor" className="text-primary" />
            <circle cx="70" cy="30" r="4" fill="currentColor" className="text-primary" />
            <circle cx="130" cy="70" r="3" fill="currentColor" className="text-primary" />
            <circle cx="90" cy="120" r="5" fill="currentColor" className="text-primary" />
            <line x1="20" y1="60" x2="70" y2="30" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="70" y1="30" x2="130" y2="70" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="130" y1="70" x2="90" y2="120" stroke="currentColor" className="text-primary" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 opacity-[0.04]">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <polygon
              points="60,5 110,30 110,90 60,115 10,90 10,30"
              fill="none"
              stroke="currentColor"
              className="text-primary"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Are You Having Issues With{" "}
              <span className="text-gradient">Your Teeth?</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Get relief from tooth pain, sensitivity, or gum discomfort. Our
              dental team provides clear guidance and comfortable treatment
              options tailored to your needs.
            </p>

            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
            >
              Contact us now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ─── Appointment Form Modal ─── */}
      <AnimatePresence>
        {showForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="bg-gradient-to-r from-primary to-primary/80 rounded-t-3xl px-8 pt-8 pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <CalendarDays className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Book Appointment
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm">
                    Fill the form below and we'll get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                        required
                      />
                    </div>
                    <div className="relative">
                      <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                        required
                      />
                    </div>
                  </div>

                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition text-gray-600"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                    <option value="Root Canal">Root Canal</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Braces / Aligners">Braces / Aligners</option>
                    <option value="Crown & Bridge">Crown & Bridge</option>
                    <option value="Wisdom Tooth">Wisdom Tooth Extraction</option>
                    <option value="Veneers">Veneers</option>
                    <option value="Gums Surgery">Gums Surgery</option>
                  </select>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition text-gray-600"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition text-gray-600"
                        required
                      >
                        <option value="">Select Time</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>1:00 PM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                    <textarea
                      placeholder="Any additional message (optional)"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Send via WhatsApp
                  </motion.button>

                  <AnimatePresence>
                    {success && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-center"
                      >
                        <p className="text-green-600 text-sm font-medium">
                          ✓ Appointment request sent successfully!
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="text-center pt-2">
                    <p className="text-muted-foreground text-xs">
                      Or call us directly at{" "}
                      <a
                        href="tel:+923316403406"
                        className="text-primary font-semibold hover:underline"
                      >
                        +92 331 6403406
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default About;