import Link from "next/link";

export default function CoursesPage() {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Master HTML, CSS, JavaScript, React, and Node.js in this intensive program.",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      category: "Development"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Learn Python, statistics, machine learning algorithms, and data visualization.",
      duration: "16 weeks",
      level: "Intermediate to Advanced",
      category: "Data Science"
    },
    {
      id: 3,
      title: "Cybersecurity Fundamentals",
      description: "Essential cybersecurity concepts, ethical hacking, and network security.",
      duration: "10 weeks",
      level: "Beginner",
      category: "Security"
    },
    {
      id: 4,
      title: "Cloud Architecture with AWS",
      description: "Deploy scalable applications using Amazon Web Services and cloud infrastructure.",
      duration: "8 weeks",
      level: "Intermediate",
      category: "Cloud Computing"
    },
    {
      id: 5,
      title: "UI/UX Design Masterclass",
      description: "Create stunning user interfaces and experiences with industry-standard tools.",
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      category: "Design"
    },
    {
      id: 6,
      title: "Mobile App Development",
      description: "Build cross-platform mobile applications using React Native and Flutter.",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="glass p-8 rounded-3xl animate-slide-in-down fade-in-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-float">
              Our <span className="text-blue-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-pulse-slow">
              Discover our comprehensive range of technology courses designed to advance your career and skills.
            </p>
          </div>
        </header>

        {/* Course Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-down">Course Categories</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {["All", "Development", "Data Science", "Security", "Cloud Computing", "Design"].map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full glass animate-scale-in fade-in-${index + 1}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="glass-hover rounded-2xl hover-lift hover-glow overflow-hidden animate-scale-in fade-in-1"
            >
              <div className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full animate-float">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-in-up">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 animate-pulse-slow">{course.description}</p>

                <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6">
                  <span className="flex items-center animate-slide-in-down">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  <span className="flex items-center animate-slide-in-down">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                    {course.level}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                  <Link
                    href={`/courses/${course.id}`}
                    className="text-blue-600 hover:underline font-medium text-center py-2 hover:text-blue-800 transition-colors animate-slide-in-up"
                  >
                    View Details
                  </Link>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm hover:scale-105 animate-float">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 glass rounded-3xl p-8 text-center animate-slide-in-up fade-in-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 animate-slide-in-down">Ready to Start Your Learning Journey?</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto animate-pulse-slow">
            Join thousands of students who have transformed their careers with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="px-4 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 animate-float"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="px-4 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 animate-float"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}