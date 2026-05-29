import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Clock,
  Phone,
  Calendar,
  ArrowRight,
  X,
  User,
  Mail,
  PhoneCall,
  CalendarDays,
  MessageSquare,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const schedule = [
  { day: "Monday", hours: "10AM - 9PM" },
  { day: "Tuesday", hours: "10AM - 9PM" },
  { day: "Wednesday", hours: "10AM - 9PM" },
  { day: "Thursday", hours: "10AM - 9PM" },
  { day: "Friday", hours: "10PM - 9PM" },
  { day: "Saturday", hours: "10AM - 9PM" },
  { day: "Sunday", hours: "Closed" },
];

const OfficeHours = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

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
    <>
      {/* ─── Office Hours Section ─── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-accent font-semibold mb-2">Visit Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Office <span className="text-gradient">Hours</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Check out Dental Consultants office hours to plan your visit.
              </p>

              <div className="space-y-3">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-3 px-5 rounded-lg border border-border ${
                      item.hours === "Closed" ? "bg-destructive/5" : "bg-card"
                    }`}
                  >
                    <span className="font-semibold text-sm text-foreground">
                      {item.day}
                    </span>
                    <span
                      className={`text-sm ${
                        item.hours === "Closed"
                          ? "text-destructive font-semibold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <Phone className="w-8 h-8 mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Emergency Phone
                </h3>
                <p className="text-2xl font-bold">+92 331 6403406  <br /> +92 333 8792525</p>
                <p className="text-sm opacity-80 mt-1">Call us anytime 24/7</p>
              </div>

              <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
                <Calendar className="w-8 h-8 mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Address
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Bhimber Road, Mukabbir University, Model Town, Gujrat.
                </p>
              </div>

              <div className="bg-yellow-600 rounded-2xl p-8 text-yellow-100">
                <Clock className="w-8 h-8 mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Email Us
                </h3>
                <p className="text-sm opacity-90">
                  abdullahramzan825@gmail.com
                </p>
                <p className="text-sm opacity-90">
                  zrdentalconsultants@gmail.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner: Are You Having Issues? ─── */}
      <section className="relative py-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white" />

        {/* Decorative molecular/dot patterns */}
        <div className="absolute top-10 right-10 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="30" cy="30" r="4" fill="currentColor" className="text-primary" />
            <circle cx="80" cy="20" r="3" fill="currentColor" className="text-primary" />
            <circle cx="150" cy="40" r="5" fill="currentColor" className="text-primary" />
            <circle cx="120" cy="80" r="3" fill="currentColor" className="text-primary" />
            <circle cx="60" cy="90" r="4" fill="currentColor" className="text-primary" />
            <circle cx="170" cy="100" r="3" fill="currentColor" className="text-primary" />
            <line x1="30" y1="30" x2="80" y2="20" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="80" y1="20" x2="150" y2="40" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="150" y1="40" x2="120" y2="80" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="120" y1="80" x2="60" y2="90" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="60" y1="90" x2="170" y2="100" stroke="currentColor" className="text-primary" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute bottom-10 left-10 opacity-10">
          <svg width="180" height="180" viewBox="0 0 180 180">
            <circle cx="20" cy="60" r="3" fill="currentColor" className="text-primary" />
            <circle cx="70" cy="30" r="4" fill="currentColor" className="text-primary" />
            <circle cx="130" cy="70" r="3" fill="currentColor" className="text-primary" />
            <circle cx="90" cy="120" r="5" fill="currentColor" className="text-primary" />
            <circle cx="160" cy="140" r="3" fill="currentColor" className="text-primary" />
            <line x1="20" y1="60" x2="70" y2="30" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="70" y1="30" x2="130" y2="70" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="130" y1="70" x2="90" y2="120" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="90" y1="120" x2="160" y2="140" stroke="currentColor" className="text-primary" strokeWidth="1" />
          </svg>
        </div>

        {/* Hexagon decorations */}
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

        <div className="absolute bottom-0 left-[20%] opacity-[0.04]">
          <svg width="80" height="80" viewBox="0 0 120 120">
            <polygon
              points="60,5 110,30 110,90 60,115 10,90 10,30"
              fill="none"
              stroke="currentColor"
              className="text-primary"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Content */}
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">

                {/* Close Button */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
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

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-4">

                  {/* Name */}
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

                  {/* Email + Phone Row */}
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

                  {/* Service Select */}
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

                  {/* Date + Time Row */}
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

                  {/* Message */}
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

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Send via WhatsApp
                  </motion.button>

                  {/* Success Message */}
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

                  {/* Or call us */}
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
    </>
  );
};

export default OfficeHours;