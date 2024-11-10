import { motion } from "framer-motion";
import { TrendingUp, Users, Shield, Globe } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50+", label: "Clients" },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "22",
      label: "International Organizations",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: "1000+",
      label: "Security Audits",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "$75M",
      label: "Company Valuation",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leading the Future of Cybersecurity
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Since our establishment in 2020, SafeMax Security has been at the
              forefront of cybersecurity innovation, delivering comprehensive
              and tailored Vulnerability Assessment & Penetration Testing (VAPT)
              services to businesses worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to precision, proactive threat hunting, and
              adaptive security measures has earned us the trust of over 50
              clients across diverse industries, including 22 international
              organizations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-full h-full flex items-center justify-center">
                <img
                  src="/api/placeholder/600/400"
                  alt="Cybersecurity Operations"
                  className="object-cover rounded-lg opacity-75"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
