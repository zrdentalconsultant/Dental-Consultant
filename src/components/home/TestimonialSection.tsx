import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import review1 from "@/assets/review-1.jpeg";
import review2 from "@/assets/review-2.jpeg";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Regular Patient",
    rating: 5,
    text: "I recently had the pleasure of visiting Dentist Consultants for a dental check-up, and I couldn't be more impressed. From the moment I walked in, the friendly and welcoming staff set the tone for a positive experience.",
  },
  {
    name: "Sara Malik",
    role: "Family Patient",
    rating: 5,
    text: "I've been a patient at Dental Consultants for several years now, and the exceptional care keeps me coming back. Dr. Umar and the entire team consistently deliver excellence in dental services.",
  },
  {
    name: "Usman Ali",
    role: "Implant Patient",
    rating: 5,
    text: "My dental implant procedure was seamless and painless. The team explained every step clearly and made me feel comfortable throughout. Highly recommend their implant services!",
  },
  {
    name: "Fatima Noor",
    role: "Orthodontic Patient",
    rating: 5,
    text: "Dr. Romessa transformed my smile with braces. The results exceeded my expectations. The clinic environment is modern, clean, and the staff is incredibly professional and caring.",
  },
  {
    name: "Hassan Raza",
    role: "Emergency Patient",
    rating: 4,
    text: "Had a dental emergency late evening and Dental Consultants accommodated me right away. The pain relief was immediate and the follow-up care was thorough. Truly grateful for their service.",
  },
  {
    name: "Ayesha Tariq",
    role: "Whitening Patient",
    rating: 5,
    text: "Got my teeth whitening done here and the results are amazing! My smile has never looked better. The procedure was quick, comfortable, and the staff made the whole experience enjoyable.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev - 2 < 0 ? testimonials.length - 2 : prev - 2
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  // Get current pair of testimonials
  const visibleTestimonials = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary/5 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ─── LEFT: Header + Testimonials + Rating ─── */}
          <div className="lg:col-span-8">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-primary" />
                <p className="text-primary font-semibold uppercase tracking-widest text-sm">
                  Testimonials
                </p>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Our Clients{" "}
                <span className="text-gradient">Review</span>
              </h2>
            </motion.div>

            {/* Testimonial Cards */}
            <div className="relative min-h-[320px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {visibleTestimonials.map((testimonial, idx) => (
                    <div
                      key={`${currentIndex}-${idx}`}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500"
                    >
                      {/* Decorative gradient on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Quote Icon */}
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Quote className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star
                              key={starIdx}
                              className={`w-5 h-5 transition-all duration-300 ${
                                starIdx < testimonial.rating
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-gray-200 fill-gray-200"
                              }`}
                              style={{
                                transitionDelay: `${starIdx * 50}ms`,
                              }}
                            />
                          ))}
                        </div>

                        {/* Text */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                          "{testimonial.text}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-md">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>

                          <div>
                            <h4 className="font-heading font-bold text-foreground text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-muted-foreground text-xs">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: Rating + Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              {/* Rating Card */}
              <div className="flex items-center gap-5 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
                <div>
                  <span className="font-heading text-4xl font-bold text-foreground">
                    4.98
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    Ratings
                  </span>
                </div>

                <div className="w-px h-10 bg-gray-200" />

                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Based on 500+ reviews
                  </p>
                </div>
              </div>

              {/* Navigation + Post Review */}
              <div className="flex items-center gap-3">
                {/* Dots */}
                <div className="flex items-center gap-2 mr-2">
                  {Array.from(
                    { length: Math.ceil(testimonials.length / 2) },
                    (_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setDirection(i * 2 > currentIndex ? 1 : -1);
                          setCurrentIndex(i * 2);
                        }}
                        className={`transition-all duration-300 rounded-full ${
                          Math.floor(currentIndex / 2) === i
                            ? "w-8 h-3 bg-primary"
                            : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    )
                  )}
                </div>

                {/* Prev / Next */}
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white text-foreground flex items-center justify-center transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border-2 border-primary bg-primary text-white hover:bg-primary/90 flex items-center justify-center transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Post Review Button */}
                <a
                  href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 btn-primary text-sm hidden sm:inline-flex"
                >
                  Post A Review
                </a>
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT: Decorative Image Collage ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 hidden lg:flex flex-col gap-4 relative"
          >
            {/* Top image area */}
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/10 rounded-3xl -z-10" />
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src={review1}
                  alt="Happy dental patient"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Bottom image with decorative ring */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src={review2}
                  alt="Dental smile"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-primary/20 rounded-full -z-10" />
            </div>

            {/* Floating happy patients count */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-1/2 -left-6 -translate-y-1/2 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100"
            >
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-primary">
                  15K+
                </p>
                <p className="text-muted-foreground text-xs font-medium">
                  Happy Smiles
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;