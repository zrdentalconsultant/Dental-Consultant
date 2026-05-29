import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaClock, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import appointmentImg from "@/assets/appointment-image.png"; 

const AppointmentSection = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
      `New Dental Appointment Request:%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Email: ${formData.email}%0A` +
      `Service: ${formData.service}%0A` +
      `Date: ${formData.date}%0A` +
      `Time: ${formData.time}%0A` +
      `Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/923316403406?text=${message}`;
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

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden shadow-2xl border border-gray-100">

          {/* ─── LEFT: Form ─── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 flex flex-col justify-center"
          >
            {/* Heading */}
            <div className="flex items-center gap-3 mb-3">
              <MdEmail className="text-primary text-2xl" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Book Your <span className="text-primary">Appointment</span>
              </h2>
            </div>

            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Book your appointment today for expert dental care tailored to
              your needs. Healthy, beautiful smiles start with a simple step,
              schedule now!
            </p>

            {/* Service Select - Full Width */}
            <select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-gray-600 bg-gray-50/50 transition"
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
            </select>

            {/* Date & Time Row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-gray-50/50 text-gray-600 transition"
                  required
                />
              </div>

              <div className="relative">
                <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-gray-50/50 text-gray-600 transition"
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

            {/* Name, Email, Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-gray-50/50 transition"
                  required
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-gray-50/50 transition"
                  required
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-gray-50/50 transition"
                  required
                />
              </div>
            </div>

            {/* Message Textarea */}
            <textarea
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 mb-6 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-gray-50/50 resize-y transition"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-fit bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Send Appointment
            </button>

            {/* Success Message */}
            {success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm mt-4 font-medium"
              >
                ✓ Appointment request sent successfully!
              </motion.p>
            )}
          </motion.form>

          {/* ─── RIGHT: Image with Opening Hours ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block min-h-[600px]"
          >
            {/* Background Image */}
            <img
              src={appointmentImg}
              alt="Dental Care"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Opening Hours Card */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30">
                <div className="flex items-center gap-4">
                  {/* Clock Icon */}
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-white text-xl" />
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Opening Hours
                    </h4>
                    <p className="text-white/80 text-sm">
                      Mon to Sat 08:00 AM - 09:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;