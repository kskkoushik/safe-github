import { motion } from "framer-motion";
import { Shield, Clock, Users, Zap, Target, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Industry Expertise",
      description:
        "Our team comprises certified security experts with years of experience in cybersecurity.",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "24/7 Protection",
      description:
        "Round-the-clock monitoring and immediate response to security threats.",
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Tailored Solutions",
      description:
        "Customized security strategies designed to meet your specific business needs.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Client Trust",
      description:
        "Trusted by over 50 clients including 22 international organizations.",
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Rapid Response",
      description:
        "Swift incident response and threat mitigation to minimize potential damage.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Proven Growth",
      description:
        "Rapidly growing company valued at $75 million, demonstrating market trust.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Why Choose SafeMax Security
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver
            unmatched cybersecurity solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
