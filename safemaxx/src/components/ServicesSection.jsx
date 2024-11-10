import { motion } from "framer-motion";
import {
  Shield,
  Search,
  Lock,
  AlertTriangle,
  Server,
  FileCode,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Vulnerability Assessment",
      description:
        "Comprehensive scanning and analysis of your systems to identify potential security weaknesses.",
    },
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Penetration Testing",
      description:
        "Simulated cyber attacks to test your defense systems and identify vulnerabilities.",
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-600" />,
      title: "Security Auditing",
      description:
        "Detailed evaluation of your security policies, procedures, and infrastructure.",
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-blue-600" />,
      title: "Threat Detection",
      description:
        "24/7 monitoring and real-time threat detection to protect your digital assets.",
    },
    {
      icon: <Server className="w-12 h-12 text-blue-600" />,
      title: "Infrastructure Security",
      description:
        "Securing your servers, networks, and cloud infrastructure against cyber threats.",
    },
    {
      icon: <FileCode className="w-12 h-12 text-blue-600" />,
      title: "Security Consultation",
      description:
        "Expert guidance on implementing robust security measures and best practices.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions to protect your business from
            evolving digital threats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
