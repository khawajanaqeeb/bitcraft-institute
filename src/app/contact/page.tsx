import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="glass p-8 rounded-3xl animate-slide-in-down fade-in-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-float">
              Contact <span className="text-blue-600 dark:text-blue-400">BitCraft Institute</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-pulse-slow">
              Have questions about our courses or business solutions? Reach out to our team.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+92 302 2037478</p>
                  <p className="text-gray-600 dark:text-gray-300">Mon-Fri, 9am-5pm PKT</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">bitcraftinstitute@gmail.com</p>

                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Office</h3>
                  <p className="text-gray-600 dark:text-gray-300">F.B. Area block 9</p>
                  <p className="text-gray-600 dark:text-gray-300">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start animate-slide-in-up">
                <div className="glass p-3 rounded-lg mr-5 animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-300">+92 345 2435349</p>
                  <p className="text-gray-600 dark:text-gray-300"></p>
                </div>
              </div>

              <div className="flex items-start animate-slide-in-up">
                <div className="glass p-3 rounded-lg mr-5 animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Website</h3>
                  <p className="text-gray-600 dark:text-gray-300">www.bitcraftinstitute.com</p>
                  <p className="text-gray-600 dark:text-gray-300"></p>
                </div>
              </div>

              <div className="flex items-start animate-slide-in-up">
                <div className="glass p-3 rounded-lg mr-5 animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Support Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9AM - 6PM PKT</p>
                  <p className="text-gray-600 dark:text-gray-300">Saturday: 10AM - 2PM PKT</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect With Us</h3>
              <div className="flex space-x-6">
                {[
                  { name: "LinkedIn", icon: "💼" },
                  { name: "Twitter", icon: "🐦" },
                  { name: "Facebook", icon: "📘" },
                  { name: "Instagram", icon: "📸" }
                ].map((social, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-900 dark:text-white"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass rounded-2xl p-8 animate-scale-in fade-in-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-slide-in-down">Send us a Message</h2>

              <form className="space-y-6">
                <div className="animate-slide-in-up">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/30 dark:bg-gray-700/30 border border-white/30 dark:border-gray-600/40 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition backdrop-blur-sm text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div className="animate-slide-in-up">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/30 dark:bg-gray-700/30 border border-white/30 dark:border-gray-600/40 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition backdrop-blur-sm text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="animate-slide-in-up">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-white/30 dark:bg-gray-700/30 border border-white/30 dark:border-gray-600/40 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition backdrop-blur-sm text-gray-900 dark:text-white"
                  >
                    <option value="" className="bg-white dark:bg-gray-800">Select a subject</option>
                    <option value="courses" className="bg-white dark:bg-gray-800">Questions about Courses</option>
                    <option value="business" className="bg-white dark:bg-gray-800">Business Solutions Inquiry</option>
                    <option value="partnership" className="bg-white dark:bg-gray-800">Partnership Opportunities</option>
                    <option value="support" className="bg-white dark:bg-gray-800">Technical Support</option>
                    <option value="other" className="bg-white dark:bg-gray-800">Other</option>
                  </select>
                </div>

                <div className="animate-slide-in-up">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/30 dark:bg-gray-700/30 border border-white/30 dark:border-gray-600/40 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition backdrop-blur-sm text-gray-900 dark:text-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div className="flex items-center animate-slide-in-up">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-4 w-4 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 border-gray-300 dark:border-gray-600 rounded"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    I agree to receive communications from BitCraft Institute
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-linear-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 animate-float"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 glass rounded-2xl overflow-hidden animate-scale-in fade-in-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-down">Visit Our Campus</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 animate-pulse-slow">
                Come visit our state-of-the-art facility where innovation and learning come together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center animate-slide-in-up">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300 animate-pulse-slow">Free parking available</span>
                </div>
                <div className="flex items-center animate-slide-in-up">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300 animate-pulse-slow">Public transportation accessible</span>
                </div>
                <div className="flex items-center animate-slide-in-up">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300 animate-pulse-slow">Wheelchair accessible entrance</span>
                </div>
              </div>
            </div>
            <div className="h-96 lg:h-full glass flex items-center justify-center animate-scale-in fade-in-3">
              <div className="text-center p-8">
                <div className="text-5xl mb-4 animate-float">📍</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white animate-slide-in-down">Campus Location</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 animate-pulse-slow">Interactive map showing our location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}