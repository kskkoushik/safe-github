import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          {/* Company Info */}
          <h2 className="text-4xl font-bold mb-6">SafeMax Security</h2>
          <p className="text-xl mb-8">
            At the forefront of cybersecurity innovation, providing tailored VAPT services to businesses worldwide.
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <motion.a
              href="https://github.com/safemaxsecurity"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-blue-400"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://twitter.com/safemaxsecurity"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-blue-400"
            >
              <Twitter className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/safemax-security/"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-blue-400"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li className="text-gray-300 hover:text-white mb-2">About Us</li>
                <li className="text-gray-300 hover:text-white mb-2">Careers</li>
                <li className="text-gray-300 hover:text-white mb-2">Blog</li>
                <li className="text-gray-300 hover:text-white mb-2">Press</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul>
                <li className="text-gray-300 hover:text-white mb-2">VAPT Services</li>
                <li className="text-gray-300 hover:text-white mb-2">Consultation</li>
                <li className="text-gray-300 hover:text-white mb-2">Threat Intelligence</li>
                <li className="text-gray-300 hover:text-white mb-2">Training</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul>
                <li className="text-gray-300 hover:text-white mb-2">Case Studies</li>
                <li className="text-gray-300 hover:text-white mb-2">Whitepapers</li>
                <li className="text-gray-300 hover:text-white mb-2">Webinars</li>
                <li className="text-gray-300 hover:text-white mb-2">Documentation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul>
                <li className="text-gray-300 hover:text-white mb-2">Contact Us</li>
                <li className="text-gray-300 hover:text-white mb-2">Support</li>
                <li className="text-gray-300 hover:text-white mb-2">Privacy Policy</li>
                <li className="text-gray-300 hover:text-white mb-2">Terms of Service</li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm text-gray-300"
          >
            <p>&copy; {new Date().getFullYear()} SafeMax Security. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FooterSection;
