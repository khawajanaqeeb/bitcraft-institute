import Link from "next/link";

export default function BusinessPage() {
  // Sample business services data
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to modernize your business processes and leverage digital technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Cloud Migration & Infrastructure",
      description: "Secure and efficient migration of your systems to cloud platforms with robust infrastructure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security assessments, implementation, and monitoring to protect your assets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence tools.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "IT Staff Augmentation",
      description: "Access to skilled technology professionals to supplement your existing teams on-demand.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, TechInnovate Inc.",
      quote: "BitCraft's team helped us modernize our legacy systems, resulting in a 40% increase in operational efficiency."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, StartupHub",
      quote: "Their cloud migration expertise saved us months of work and reduced our infrastructure costs by 30%."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Director of IT, Global Retail Corp",
      quote: "The cybersecurity solutions implemented by BitCraft gave us peace of mind and compliance with industry regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="glass p-8 rounded-3xl animate-slide-in-down fade-in-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-float">
              Business <span className="text-purple-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-pulse-slow">
              Innovative technology solutions tailored to accelerate your business growth and efficiency.
            </p>
          </div>
        </header>

        {/* Services Overview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-down">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-pulse-slow">
              We provide end-to-end technology solutions designed to solve your most complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="glass-hover rounded-2xl p-8 hover-lift hover-glow animate-scale-in fade-in-1"
              >
                <div className="mb-6 animate-float">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 animate-slide-in-up">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 animate-pulse-slow">{service.description}</p>
                <Link
                  href={`/business/${service.id}`}
                  className="text-purple-600 hover:underline font-medium hover:text-purple-800 transition-colors animate-slide-in-down"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20 glass rounded-2xl p-8 md:p-12 animate-scale-in fade-in-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-down">Why Choose BitCraft for Your Business?</h2>
              <ul className="space-y-4">
                {[
                  "Proven track record of successful enterprise implementations",
                  "Team of certified experts with deep industry knowledge",
                  "Agile methodologies for faster delivery and adaptation",
                  "End-to-end solutions from strategy to implementation",
                  "Ongoing support and maintenance for long-term success"
                ].map((item, index) => (
                  <li key={index} className="flex items-start animate-slide-in-up">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300 animate-pulse-slow">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-xl p-8 animate-scale-in fade-in-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-down">Client Success Story</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic animate-pulse-slow">
                "Partnering with BitCraft transformed our digital capabilities. Their team delivered a custom solution that streamlined our operations and increased productivity by 35%."
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white animate-slide-in-up">Robert Williams</p>
                <p className="text-gray-600 dark:text-gray-400 animate-pulse-slow">VP of Operations, Fortune 500 Company</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-slide-in-down">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass-hover rounded-2xl p-8 hover-lift hover-glow animate-scale-in fade-in-1"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mr-4 animate-float">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white animate-slide-in-up">{testimonial.name}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm animate-pulse-slow">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic animate-pulse-slow">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="glass rounded-3xl p-8 text-center animate-slide-in-up fade-in-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-down">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto animate-pulse-slow">
            Contact our experts today to discuss how we can help your organization achieve its technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 animate-float"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 animate-float"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}