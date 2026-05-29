import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  PhoneCall,
  ArrowRight,
  X,
  CalendarDays,
  User,
  MessageSquare,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import aboutHero from "@/assets/about-hero.jpeg";
import doctorStanding from "@/assets/doctor-standing.jpeg";

const contactInfo = [
  { icon: Phone, title: "Phone", lines: ["+92 331 6403406" , "+92 333 8792525"] },
  { icon: Mail, title: "Email", lines: ["abdullahramzan825@gmail.com", "zrdentalconsultants@gmail.com"] },
  { icon: MapPin, title: "Address", lines: ["Model Town near Mukabbir University, Gujrat"] },
  { icon: Clock, title: "Hours", lines: ["Mon-Sat: 10AM - 9PM", "Sunday: Closed"] },
];

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const Contact = () => {
  // ─── Contact Form State ───
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaError, setCaptchaError] = useState(false);

  // ─── Modal Form State ───
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

  // ─── Contact Form Submit ───
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.captchaInput !== captcha) {
      setCaptchaError(true);
      setCaptcha(generateCaptcha());
      setForm({ ...form, captchaInput: "" });
      return;
    }

    setCaptchaError(false);

    const message =
      `New Contact Message:%0A%0A` +
      `Name: ${form.name}%0A` +
      `Email: ${form.email}%0A` +
      `Phone: ${form.phone}%0A` +
      `Subject: ${form.subject}%0A` +
      `Message: ${form.message}`;

    const whatsappURL = `https://wa.me/923316403406?text=${message}`;
    window.open(whatsappURL, "_blank");

    setForm({ name: "", email: "", subject: "", phone: "", message: "", captchaInput: "" });
    setCaptcha(generateCaptcha());
  };

  // ─── Modal Appointment Form Submit ───
  const handleModalSubmit = (e: React.FormEvent) => {
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
      <PageBanner title="Contact Us" breadcrumb="Contact" backgroundImage={aboutHero} />

      {/* ─── Contact Info Cards ─── */}
      <section className="section-padding pb-10">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-service text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                {item.lines.map((line) => (
                  <p key={line} className="text-muted-foreground text-sm">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Doctor Image + Contact Form ─── */}
      <section className="section-padding pt-10 bg-gray-50/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT: Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute top-10 left-4 right-4 bottom-20 bg-primary/5 rounded-3xl border border-primary/10" />

              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-0 hidden lg:block">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, idx) => (
                    <div key={idx} className="w-2 h-2 rounded-full bg-primary/30" />
                  ))}
                </div>
              </div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-gradient-to-b from-primary/60 to-transparent hidden lg:block" />

              <div className="relative z-10">
                <img
                  src={doctorStanding}
                  alt="Doctor"
                  className="max-h-[480px] object-contain drop-shadow-xl"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 mx-4 z-20"
              >
                <div className="bg-gradient-to-r from-[#1a1f4e] to-[#2a3070] rounded-2xl px-6 py-5 flex items-center gap-4 shadow-xl">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                    <PhoneCall className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-xl">Emergency Call</h4>
                    <p className="text-white/70 text-sm">24/7 – Support and easy to reach</p>
                  </div>
                  <a
                    href="tel:+923316403406"
                    className="ml-auto bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors border border-white/20 hidden sm:block"
                  >
                    +92 331 6403406
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-primary" />
                <p className="text-primary font-semibold uppercase tracking-widest text-sm">
                  Get In Touch
                </p>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                Meet Our Specialist{" "}
                <span className="text-gradient">Doctor Meet</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-lg border-l-4 border-l-primary border border-gray-200 bg-gray-50 text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-lg border-l-4 border-l-primary border border-gray-200 bg-gray-50 text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-lg border-l-4 border-l-primary border border-gray-200 bg-gray-50 text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Your phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-lg border-l-4 border-l-primary border border-gray-200 bg-gray-50 text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    required
                  />
                </div>

                <textarea
                  placeholder="Your comments"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-lg border-l-4 border-l-primary border border-gray-200 bg-gray-50 text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none"
                  required
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <input
                    type="text"
                    placeholder="Type the below word"
                    value={form.captchaInput}
                    onChange={(e) => {
                      setForm({ ...form, captchaInput: e.target.value });
                      setCaptchaError(false);
                    }}
                    className={`w-full sm:w-auto flex-1 px-5 py-3.5 rounded-lg border-l-4 border-l-primary border bg-gray-50 text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition ${
                      captchaError ? "border-red-400" : "border-gray-200"
                    }`}
                    required
                  />
                  <div className="flex items-center gap-3">
                    <div className="bg-white border-2 border-gray-200 rounded-lg px-5 py-2.5 select-none">
                      <span
                        className="font-mono text-lg font-bold tracking-widest text-foreground"
                        style={{
                          letterSpacing: "0.2em",
                          textDecoration: "line-through",
                          textDecorationColor: "rgba(0,0,0,0.15)",
                        }}
                      >
                        {captcha}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setCaptcha(generateCaptcha());
                        setForm({ ...form, captchaInput: "" });
                        setCaptchaError(false);
                      }}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      title="Refresh captcha"
                    >
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>

                {captchaError && (
                  <p className="text-red-500 text-sm">Captcha doesn't match. Please try again.</p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Map Section ─── */}
      <section className="section-padding pt-10">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-primary" />
              <p className="text-primary font-semibold uppercase tracking-widest text-sm">Our Location</p>
              <span className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Find Us <span className="text-gradient">Here</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d654.8033663790328!2d74.07842984704804!3d32.61235041875484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f05560441cd9d%3A0x89714e5a80e2bb70!2sDental%20consultants!5e0!3m2!1sen!2s!4v1773379548845!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dental Consultants Location"
            />
          </motion.div>
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
            <polygon points="60,5 110,30 110,90 60,115 10,90 10,30" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" />
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

                <form onSubmit={handleModalSubmit} className="p-8 space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                        required
                      />
                    </div>
                  </div>

                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition text-gray-600"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                      <a href="tel:+923316403406" className="text-primary font-semibold hover:underline">
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

export default Contact;