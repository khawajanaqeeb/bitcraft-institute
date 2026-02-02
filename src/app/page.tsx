import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10 dark:opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass p-8 md:p-12 rounded-3xl mb-10 animate-slide-in-down">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-float">
                Empowering the Future with <span className="text-blue-600">Technology Education</span> & <span className="text-purple-600">Business Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto animate-pulse-slow">
                BitCraft Institute offers cutting-edge courses and innovative business solutions to help individuals and organizations thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in-up">
                <Link
                  href="/courses"
                  className="px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/business"
                  className="px-8 py-4 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105"
                >
                  Business Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-down">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-in-up">
              Comprehensive solutions for both learning and business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-hover p-8 rounded-2xl hover-lift hover-glow animate-scale-in fade-in-1">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Expert-Led Courses</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learn from industry professionals with years of experience in technology and business.
              </p>
              <Link href="/courses" className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors">
                Browse Courses →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="glass-hover p-8 rounded-2xl hover-lift hover-glow animate-scale-in fade-in-2">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0 3-4.03 3-9s1.343-9 3-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Business Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Custom technology solutions tailored to your business needs and challenges.
              </p>
              <Link href="/business" className="text-purple-600 font-medium hover:underline hover:text-purple-800 transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="glass-hover p-8 rounded-2xl hover-lift hover-glow animate-scale-in fade-in-3">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-6 animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Certification Programs</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Industry-recognized certifications to validate your skills and advance your career.
              </p>
              <Link href="/certifications" className="text-green-600 font-medium hover:underline hover:text-green-800 transition-colors">
                View Certifications →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-2xl text-center animate-scale-in fade-in-1">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2 animate-pulse-slow">500+</div>
              <div className="text-lg text-gray-700 dark:text-gray-300">Students Trained</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center animate-scale-in fade-in-2">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2 animate-pulse-slow">25+</div>
              <div className="text-lg text-gray-700 dark:text-gray-300">Expert Instructors</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center animate-scale-in fade-in-3">
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2 animate-pulse-slow">30+</div>
              <div className="text-lg text-gray-700 dark:text-gray-300">Business Projects</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center animate-scale-in fade-in-4">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-2 animate-pulse-slow">98%</div>
              <div className="text-lg text-gray-700 dark:text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass p-10 md:p-12 rounded-3xl animate-slide-in-up fade-in-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-down">
                Ready to Transform Your Skills?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 animate-pulse-slow">
                Join thousands of students who have advanced their careers with our courses and certifications.
              </p>
              <Link
                href="/courses"
                className="inline-block px-8 py-4 bg-linear-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 animate-float"
              >
                Start Learning Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
