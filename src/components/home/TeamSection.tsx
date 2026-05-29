import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import doctor1 from "@/assets/doctor-1.jpeg";
import doctor2 from "@/assets/doctor-2.jpeg";
import doctor3 from "@/assets/doctor-4.jpeg";
import doctor4 from "@/assets/doctor-3.jpeg";

const team = [
  {
    name: "Dr. Muhammad Abdullah",
    role: "Senior Dental Surgeon",
    image: doctor1,
    socials: {
      instagram: "https://www.instagram.com/dentalconsultants/",
      tiktok: "https://www.tiktok.com/@dental_consultants",
    },
  },
  {
    name: "Dr. Usama Mumtaz Abbasi",
    role: "Consultant Orthodontist",
    image: doctor2,
    socials: {
      instagram: "https://www.instagram.com/dentalconsultants/",
      tiktok: "https://www.tiktok.com/@dental_consultants",
    },
  },
  {
    name: "Dr. Romessa Anis",
    role: "Endodontist",
    image: doctor3,
    socials: {
      instagram: "https://www.instagram.com/dentalconsultants/",
      tiktok: "https://www.tiktok.com/@dental_consultants",
    },
  },
  {
    name: "Dr. Umar Iqbal",
    role: "Maxillofacial Surgeon & Dental Surgeon",
    image: doctor4,
    socials: {
      instagram: "https://www.instagram.com/dentalconsultants/",
      tiktok: "https://www.tiktok.com/@dental_consultants",
    },
  },
];

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding section-light overflow-hidden">
      <div className="container-wide">

        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary" />
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">
              Our Team Member
            </p>
            <span className="w-8 h-[2px] bg-primary" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Meet Our Specialist{" "}
            <span className="text-gradient">Doctor</span>
          </h2>
        </motion.div>

        {/* ─── Team Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative cursor-pointer group"
              style={{ aspectRatio: "3/4" }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >

              {/* ─── Default State: Full Image ─── */}
              <div
                className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                  hoveredIndex === i
                    ? "opacity-0 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ─── Hover State: Info Card ─── */}
              <div
                className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 ${
                  hoveredIndex === i
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-900" />

                {/* Decorative shapes */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-8">

                  {/* Doctor Photo */}
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl mb-5 bg-white/10 flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Doctor Name */}
                  <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-1 text-center">
                    {member.name}
                  </h3>

                  {/* Doctor Role */}
                  <p className="text-white/70 text-sm font-medium mb-5 text-center">
                    {member.role}
                  </p>

                  {/* Social Icons - Filtered to only Instagram and TikTok */}
                  <div className="flex items-center gap-3">
                    {[
                      { icon: FaInstagram, link: member.socials.instagram },
                      { icon: FaTiktok, link: member.socials.tiktok },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-primary text-white flex items-center justify-center transition-all duration-300 text-sm backdrop-blur-sm"
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;