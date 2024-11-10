import { motion } from "framer-motion";
import { ChevronRight, Shield, Lock, Server } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/schedule"); // Navigates to the /schedule route
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={handleButtonClick}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Secure Your Digital Future with SafeMax
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Comprehensive cybersecurity solutions protecting your business 24/7
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg"
            >
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Advanced Protection
              </h3>
              <p>State-of-the-art security measures to protect your assets</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg"
            >
              <Lock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Monitoring</h3>
              <p>Continuous threat detection and response</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg"
            >
              <Server className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">VAPT Services</h3>
              <p>
                Comprehensive vulnerability assessment and penetration testing
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
