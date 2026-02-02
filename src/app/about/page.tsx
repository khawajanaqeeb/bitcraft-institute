import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="glass p-8 rounded-3xl animate-slide-in-down fade-in-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-float">
              About <span className="text-blue-600">BitCraft Institute</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-pulse-slow">
              Empowering individuals and businesses through innovative technology education and solutions.
            </p>
          </div>
        </header>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="glass p-8 rounded-2xl animate-scale-in fade-in-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-down">Our Mission</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 animate-slide-in-up">
                  At BitCraft Institute, we believe that technology education and innovation should be accessible to everyone.
                  Our mission is to bridge the gap between traditional learning and the rapidly evolving digital landscape.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 animate-slide-in-up">
                  We empower individuals to advance their careers and organizations to transform their operations through
                  cutting-edge courses, certifications, and business solutions.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="glass px-4 py-2 rounded-lg animate-float">
                    <p className="font-bold text-blue-800 dark:text-blue-300">500+ Students Trained</p>
                  </div>
                  <div className="glass px-4 py-2 rounded-lg animate-float">
                    <p className="font-bold text-purple-800 dark:text-purple-300">25+ Expert Instructors</p>
                  </div>
                  <div className="glass px-4 py-2 rounded-lg animate-float">
                    <p className="font-bold text-green-800 dark:text-green-300">98% Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-hover rounded-2xl hover-lift hover-glow p-8 animate-scale-in fade-in-2">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl mb-4 animate-float">🎓</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white animate-slide-in-down">Our Campus</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 animate-pulse-slow">State-of-the-art facilities for learning and innovation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-slide-in-down">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly evolve our curriculum and solutions to stay ahead of technological trends.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                )
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in our courses and business solutions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Accessibility",
                description: "We make quality technology education available to diverse communities.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Impact",
                description: "We measure our success by the positive outcomes we create for our clients.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div
                key={index}
                className="glass-hover rounded-2xl p-8 text-center hover-lift hover-glow animate-scale-in fade-in-1"
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 animate-slide-in-up">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 animate-pulse-slow">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-slide-in-down">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sir Khawaja Naqeeb Uddin",
                role: "Owner and Principal",
                bio: "Educational leader with extensive experience in technology education and institutional development.",
                image: "KN"
              },
              {
                name: "Sir Bilawal Kiyani",
                role: "Partner & Leading Teacher",
                bio: "Expert educator and partner with deep expertise in curriculum development and instruction.",
                image: "BK"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="glass-hover rounded-2xl overflow-hidden hover-lift hover-glow animate-scale-in fade-in-1"
              >
                <div className="h-48 bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center animate-gradient-x">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-32 h-32 flex items-center justify-center animate-float">
                    <span className="text-4xl font-bold text-white">{member.image}</span>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white animate-slide-in-up">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 animate-pulse-slow">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 animate-slide-in-down">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-slide-in-down">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900 hidden md:block animate-gradient-y"></div>

            <div className="space-y-12 md:space-y-0">
              {[
                { year: "2018", title: "Foundation", description: "BitCraft Institute was founded with a vision to democratize technology education." },
                { year: "2019", title: "First Course Launch", description: "Launched our inaugural Web Development Bootcamp with 50 students." },
                { year: "2020", title: "Growth & Expansion", description: "Expanded to include Data Science and Cloud Computing programs." },
                { year: "2021", title: "Business Solutions", description: "Introduced enterprise consulting and custom development services." },
                { year: "2022", title: "Certification Program", description: "Launched industry-recognized certification programs." },
                { year: "2023", title: "International Presence", description: "Established online learning platform serving students globally." }
              ].map((event, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-scale-in fade-in-1`}
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} mb-4 md:mb-0`}>
                    <div className="glass-hover rounded-2xl p-6 hover-lift hover-glow animate-slide-in-up">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-lg animate-float">{event.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2 animate-slide-in-down">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 animate-pulse-slow">{event.description}</p>
                    </div>
                  </div>

                  <div className="md:w-2/12 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800 shadow-lg z-10 animate-float"></div>
                  </div>

                  <div className="md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="glass rounded-3xl p-8 text-center animate-slide-in-up fade-in-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-down">Join Our Community</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto animate-pulse-slow">
            Be part of a growing community of innovators, learners, and business leaders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/courses"
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 animate-float"
            >
              Explore Courses
            </Link>
            <Link
              href="/business"
              className="px-6 py-3 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 animate-float"
            >
              Business Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}