"use client";

import Link from "next/link";
import { useState } from "react";

export default function CoursesPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  // Learning Path Structure
  const learningPath = {
    level1: [
      {
        id: 1,
        title: "Computer Fundamentals & AI Literacy",
        description: "Build a strong foundation in computer basics and understand AI concepts for everyday use.",
        duration: "6 weeks",
        level: "Level 1 - Beginner",
        category: "Fundamentals"
      },
      {
        id: 2,
        title: "Digital Skills for Office Professionals",
        description: "Master essential productivity tools and digital workplace skills.",
        duration: "5 weeks",
        level: "Level 1 - Beginner",
        category: "Fundamentals"
      },
      {
        id: 3,
        title: "Computer Hardware & Troubleshooting",
        description: "Learn to diagnose and fix common hardware issues, understand computer components.",
        duration: "4 weeks",
        level: "Level 1 - Beginner",
        category: "Fundamentals"
      }
    ],
    level2: [
      {
        id: 4,
        title: "AI Essentials for Everyone",
        description: "Explore AI tools and applications to enhance productivity and creativity.",
        duration: "8 weeks",
        level: "Level 2 - Intermediate",
        category: "AI & Technology"
      },
      {
        id: 5,
        title: "Web Development Bootcamp",
        description: "Master HTML, CSS, JavaScript, React, and Node.js in this intensive program.",
        duration: "12 weeks",
        level: "Level 2 - Intermediate",
        category: "Development"
      },
      {
        id: 6,
        title: "UI/UX Design",
        description: "Create stunning user interfaces and experiences with industry-standard tools.",
        duration: "10 weeks",
        level: "Level 2 - Intermediate",
        category: "Design"
      }
    ],
    level3: [
      {
        id: 7,
        title: "Data Science & Machine Learning",
        description: "Learn Python, statistics, machine learning algorithms, and data visualization.",
        duration: "16 weeks",
        level: "Level 3 - Advanced",
        category: "Data Science"
      },
      {
        id: 8,
        title: "Cybersecurity Fundamentals",
        description: "Essential cybersecurity concepts, ethical hacking, and network security.",
        duration: "10 weeks",
        level: "Level 3 - Advanced",
        category: "Security"
      },
      {
        id: 9,
        title: "Cloud Architecture with AWS",
        description: "Deploy scalable applications using Amazon Web Services and cloud infrastructure.",
        duration: "8 weeks",
        level: "Level 3 - Advanced",
        category: "Cloud Computing"
      },
      {
        id: 10,
        title: "Mobile App Development",
        description: "Build cross-platform mobile applications using React Native and Flutter.",
        duration: "12 weeks",
        level: "Level 3 - Advanced",
        category: "Development"
      }
    ],
    freelancing: [
      {
        id: 11,
        title: "Fiverr Introduction",
        description: "Learn how to create and optimize your Fiverr profile to attract clients.",
        duration: "2 weeks",
        level: "Freelancing",
        category: "Freelancing"
      },
      {
        id: 12,
        title: "Upwork Introduction",
        description: "Master the Upwork platform and learn how to win your first projects.",
        duration: "2 weeks",
        level: "Freelancing",
        category: "Freelancing"
      },
      {
        id: 13,
        title: "Freelancing Basics",
        description: "Essential skills for starting and managing a successful freelancing career.",
        duration: "4 weeks",
        level: "Freelancing",
        category: "Freelancing"
      },
      {
        id: 14,
        title: "Portfolio Creation",
        description: "Build a professional portfolio that showcases your skills and attracts clients.",
        duration: "3 weeks",
        level: "Freelancing",
        category: "Freelancing"
      },
      {
        id: 15,
        title: "AI Tools for Freelancers",
        description: "Leverage AI tools to increase productivity and deliver better results to clients.",
        duration: "3 weeks",
        level: "Freelancing",
        category: "Freelancing"
      }
    ]
  };

  const projects = [
    {
      id: "p1",
      title: "LinkedIn Profile Setup",
      description: "Create a professional LinkedIn profile optimized for your career goals.",
      category: "Project"
    },
    {
      id: "p2",
      title: "Portfolio Website",
      description: "Build and deploy your own portfolio website to showcase your work.",
      category: "Project"
    },
    {
      id: "p3",
      title: "Freelancing Profile",
      description: "Set up professional profiles on major freelancing platforms.",
      category: "Project"
    }
  ];

  const certifications = [
    {
      id: "c1",
      title: "Digital Freelancing Foundations",
      description: "Comprehensive certification covering all essential freelancing skills and tools.",
      category: "Certification"
    }
  ];

  // All courses combined for filtering
  const allCourses = [
    ...learningPath.level1,
    ...learningPath.level2,
    ...learningPath.level3,
    ...learningPath.freelancing
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

        {/* Learning Path Overview */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-slide-in-down">
            Suggested Learning Path
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Follow our structured learning path from beginner to advanced, or choose specific courses that match your goals.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {["All", "Level 1 - Beginner", "Level 2 - Intermediate", "Level 3 - Advanced", "Freelancing", "Projects & Certifications"].map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-full glass animate-scale-in fade-in-${index + 1} transition-all duration-300 ${
                  selectedFilter === category
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Level 1 - Beginner Courses */}
        {(selectedFilter === "All" || selectedFilter === "Level 1 - Beginner") && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-down">
            Level 1 - Beginner Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {learningPath.level1.map((course, index) => (
              <div
                key={course.id}
                className="glass-hover rounded-2xl hover-lift hover-glow overflow-hidden animate-scale-in fade-in-1"
              >
                <div className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full animate-float">
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
        </section>
        )}

        {/* Level 2 - Intermediate Courses */}
        {(selectedFilter === "All" || selectedFilter === "Level 2 - Intermediate") && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-down">
            Level 2 - Intermediate Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {learningPath.level2.map((course, index) => (
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
        </section>
        )}

        {/* Level 3 - Advanced Courses */}
        {(selectedFilter === "All" || selectedFilter === "Level 3 - Advanced") && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-down">
            Level 3 - Advanced Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {learningPath.level3.map((course, index) => (
              <div
                key={course.id}
                className="glass-hover rounded-2xl hover-lift hover-glow overflow-hidden animate-scale-in fade-in-1"
              >
                <div className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full animate-float">
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
        </section>
        )}

        {/* Freelancing Courses */}
        {(selectedFilter === "All" || selectedFilter === "Freelancing") && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-down">
            Freelancing & Career Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {learningPath.freelancing.map((course, index) => (
              <div
                key={course.id}
                className="glass-hover rounded-2xl hover-lift hover-glow overflow-hidden animate-scale-in fade-in-1"
              >
                <div className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full animate-float">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
        </section>
        )}

        {/* Projects & Certifications */}
        {(selectedFilter === "All" || selectedFilter === "Projects & Certifications") && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-down">
            Projects & Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass-hover rounded-2xl hover-lift hover-glow overflow-hidden animate-scale-in fade-in-1"
              >
                <div className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 text-sm font-medium rounded-full animate-float">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-in-up">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 animate-pulse-slow">{project.description}</p>
                  <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-blue-600 hover:underline font-medium text-center py-2 hover:text-blue-800 transition-colors animate-slide-in-up"
                    >
                      View Details
                    </Link>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-lg hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 text-sm hover:scale-105 animate-float">
                      Start Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="glass-hover rounded-2xl hover-lift hover-glow overflow-hidden animate-scale-in fade-in-1 border-2 border-yellow-400 dark:border-yellow-600"
              >
                <div className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full animate-float">
                      {cert.category}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-in-up">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 animate-pulse-slow">{cert.description}</p>
                  <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                    <Link
                      href={`/certifications/${cert.id}`}
                      className="text-blue-600 hover:underline font-medium text-center py-2 hover:text-blue-800 transition-colors animate-slide-in-up"
                    >
                      View Details
                    </Link>
                    <button className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 text-sm hover:scale-105 animate-float">
                      Get Certified
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        )}

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