import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import aboutHero from "@/assets/about-hero.jpeg";
import doctor1 from "@/assets/doctor-1.jpeg";
import doctor2 from "@/assets/doctor-2.jpeg";
import doctor3 from "@/assets/doctor-3.jpeg";
import doctor4 from "@/assets/doctor-4.jpeg";

const team = [
  {
    name: "Dr. Muhammad Abdullah",
    role: "Senior Dental Surgeon",
    image: doctor1,
    desc: "Muhammad Abdullah is a skilled and dedicated general dentist with over 7 years of clinical experience, committed to providing high-quality, patient-centered dental care. He holds certifications in endodontics, orthodontics, and dental implants, allowing him to offer a wide range of advanced treatments under one roof. In addition, he has completed his MCPS in Family Dentistry, further strengthening his expertise in comprehensive oral health management for patients of all ages. Dr. Abdullah is known for his gentle approach, attention to detail, and focus on delivering comfortable, effective, and long-lasting dental solutions.",
    socials: { 
      instagram: "https://www.instagram.com/dentalconsultantsclinic/", 
      tiktok: "https://www.tiktok.com/@dental_consultants",
      facebook: " https://www.facebook.com/profile.php?id=61591329785123&sk=photos" 
    },
  },
  {
    name: "Dr. Usama Mumtaz Abbasi",
    role: "Consultant Orthodontist",
    image: doctor2,
    desc: "Dr. Usma Mumtaz is a highly qualified orthodontist with an MDS in Orthodontics, specializing in the diagnosis, prevention, and correction of dental and facial irregularities. With a strong academic background and clinical expertise, he is dedicated to creating confident, healthy smiles through advanced orthodontic treatments, including braces and aligners. Dr. Mumtaz is known for his precision, patient-focused approach, and commitment to delivering personalized treatment plans that ensure optimal functional and aesthetic outcomes.",
    socials: { 
      instagram: "https://www.instagram.com/dentalconsultantsclinic/", 
      tiktok: "https://www.tiktok.com/@dental_consultants",
      facebook: " https://www.facebook.com/profile.php?id=61591329785123&sk=photos" 
    },
  },
  {
    name: "Dr. Umer Iqbal",
    role: "Oral & Maxillofacial Surgeon",
    image: doctor3,
    desc: "Dr. Umer Iqbal is a highly skilled Maxillofacial Surgeon and FCPS specialist, with extensive expertise in the diagnosis and surgical management of complex facial, oral, and jaw conditions. He is trained in performing advanced procedures including facial trauma management, corrective jaw surgeries, and oral surgical treatments with precision and care. Dr. Iqbal is known for his meticulous surgical skills, patient-centered approach, and commitment to achieving both functional excellence and aesthetic outcomes, ensuring the highest standard of care for his patients",
    socials: { 
      instagram: "https://www.instagram.com/dentalconsultantsclinic/", 
      tiktok: "https://www.tiktok.com/@dental_consultants",
      facebook: " https://www.facebook.com/profile.php?id=61591329785123&sk=photos" 
    },
  },
  {
    name: "Dr. Romessa Anis",
    role: "Endodontist",
    image: doctor4,
    desc: "Dr. Romessa Anis is a dedicated general dentist with 4 years of clinical experience, known for her compassionate approach and commitment to patient comfort. She holds certifications in endodontics, orthodontics, and pediatric (child care) dentistry, enabling her to provide comprehensive dental care for both adults and children. With a focus on gentle treatment and attention to detail, Dr. Romessa Anis strives to deliver effective, personalized dental solutions while ensuring a positive and stress-free experience for every patient.",
    socials: { 
      instagram: "https://www.instagram.com/dentalconsultantsclinic/", 
      tiktok: "https://www.tiktok.com/@dental_consultants",
      facebook: " https://www.facebook.com/profile.php?id=61591329785123&sk=photos" 
    },
  },
];

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Layout>
      <PageBanner
        title="Our Team"
        breadcrumb="Team"
        backgroundImage={aboutHero}
      />

      <section className="section-padding section-light overflow-hidden">
        <div className="container-wide">

          {/* Header */}
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
              <span className="text-gradient">Doctors</span>
            </h2>
          </motion.div>

          {/* Team Grid (Hover Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                {/* Default State */}
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Hover State */}
                <div
                  className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 ${
                    hoveredIndex === i
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-900" />
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

                  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-8">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl mb-5 bg-white/10 flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-1 text-center">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-sm font-medium mb-5 text-center">
                      {member.role}
                    </p>
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

          {/* ─── Detailed Doctor Profiles ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <p className="text-primary font-semibold uppercase tracking-widest text-sm">
                Know More
              </p>
              <span className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Doctor <span className="text-gradient">Profiles</span>
            </h2>
          </motion.div>

          <div className="space-y-10">
            {team.map((member, i) => (
              <motion.div
                key={`profile-${member.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-60 h-60 rounded-2xl object-cover shadow-lg flex-shrink-0"
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
                  <div className="flex items-center gap-2 mt-4">
                    {[
                      { icon: FaInstagram, link: member.socials.instagram },
                      { icon: FaTiktok, link: member.socials.tiktok },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 text-xs"
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;