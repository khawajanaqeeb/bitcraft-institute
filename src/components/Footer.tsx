"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Business", path: "/business" },
    { name: "Contact", path: "/contact" },
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-blue-500 dark:text-blue-400" />,
      label: "+92 302 2037478",
      description: "Mon-Fri, 9am-5pm PKT"
    },
    {
      icon: <FaEnvelope className="text-blue-500 dark:text-blue-400" />,
      label: "bitcraftinstitute@gmail.com",
      description: "Email us for inquiries"
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-500 dark:text-blue-400" />,
      label: "F.B. Area block 9",
      description: "Karachi, Pakistan"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "#" },
    { name: "Twitter", icon: <FaTwitter />, url: "#" },
    { name: "Facebook", icon: <FaFacebook />, url: "#" },
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center">
              <img
                src="/logo.png"
                alt="BitCraft Institute Logo"
                className="h-12 w-12 mr-3 object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.querySelector('.fallback-text')?.classList.remove('hidden');
                  }
                }}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent fallback-text">
                BitCraft Institute
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6" style={{ color: 'var(--foreground)' }}>
              Empowering the future with cutting-edge technology education and innovative business solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><Link href="/courses/web-development" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Web Development</Link></li>
              <li><Link href="/courses/mobile-development" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Mobile Development</Link></li>
              <li><Link href="/courses/data-science" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Data Science</Link></li>
              <li><Link href="/courses/cybersecurity" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Cybersecurity</Link></li>
              <li><Link href="/courses/cloud-computing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Cloud Computing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">{item.label}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} BitCraft Institute. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;