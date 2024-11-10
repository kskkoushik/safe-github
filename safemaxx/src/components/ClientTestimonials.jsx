import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO at FinTech Solutions",
    feedback:
      "SafeMax's VAPT services transformed our cybersecurity posture. Their proactive approach to threat detection and response has given us the confidence to scale securely.",
  },
  {
    name: "Michael Lee",
    role: "CTO at Global eCommerce Ltd",
    feedback:
      "Our digital assets feel truly secure thanks to SafeMax. Their team's expertise in penetration testing and vulnerability assessment is unparalleled.",
  },
  {
    name: "Sofia Martinez",
    role: "IT Security Manager at HealthSecure",
    feedback:
      "SafeMax provides outstanding, client-focused service. The team went above and beyond to help us strengthen our defenses. Highly recommended!",
  },
];

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative overflow-hidden">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mx-auto max-w-lg"
          >
            <div className="flex justify-center mb-4">
              <Star className="text-yellow-400 w-6 h-6" />
              <Star className="text-yellow-400 w-6 h-6" />
              <Star className="text-yellow-400 w-6 h-6" />
              <Star className="text-yellow-400 w-6 h-6" />
              <Star className="text-yellow-400 w-6 h-6" />
            </div>
            <p className="text-lg mb-4">{testimonials[currentTestimonial].feedback}</p>
            <div className="text-blue-400 font-semibold text-xl">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-blue-300">{testimonials[currentTestimonial].role}</div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
