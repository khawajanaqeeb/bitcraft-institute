import Link from "next/link";
import { notFound } from "next/navigation";
import { allCoursesData } from "@/data/courses";

// Generate static params for all course IDs
export async function generateStaticParams() {
  return Object.keys(allCoursesData).map((id) => ({
    id,
  }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const courseId = parseInt(id);
  const course = allCoursesData[courseId];

  if (!course) {
    notFound();
  }

  const colorClasses: Record<string, string> = {
    green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-800"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link
          href="/courses"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Courses
        </Link>

        {/* Course Header */}
        <div className="glass rounded-3xl p-6 md:p-10 mb-8 animate-slide-in-down border border-white/20 dark:border-gray-700/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div className="relative z-10">
            <div className="mb-6">
              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider border ${colorClasses[course.color]}`}>
                {course.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-200 mb-8">
              <div className="flex items-center bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-xl border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-xl border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
                <span className="font-medium">{course.level}</span>
              </div>
            </div>

            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-300 flex items-center">
              Enroll in this Course
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Objectives */}
            <div className="glass rounded-3xl p-8 animate-scale-in shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
                Learning Objectives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.objectives.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/40 dark:bg-gray-800/40 rounded-2xl border border-white/20">
                    <svg className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="glass rounded-3xl p-8 animate-scale-in">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-indigo-600 rounded-full mr-4"></span>
                Course Curriculum
              </h2>
              <div className="space-y-6">
                {course.modules.map((module, index) => (
                  <div key={index} className="group relative pl-12 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0">
                    <div className="absolute left-[-13px] top-0 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-900 shadow-md group-hover:scale-125 transition-transform"></div>
                    <div className="bg-white/40 dark:bg-gray-800/40 p-5 rounded-2xl border border-white/20 group-hover:bg-white/60 dark:group-hover:bg-gray-800/60 transition-all">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3 gap-2">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{module.title}</h3>
                        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-lg">
                          {module.duration}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, i) => (
                          <span key={i} className="text-sm bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-lg">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Tech */}
            <div className="glass rounded-3xl p-8 animate-scale-in">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></span>
                Tools & Technologies
              </h2>
              <div className="flex flex-wrap gap-4">
                {course.toolsTechnologies.map((tool, index) => (
                  <div key={index} className="px-6 py-3 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 rounded-2xl font-semibold border border-white/30 shadow-sm hover:shadow-md transition-all">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Exam Information */}
            {course.examInfo && (
              <div className="glass rounded-3xl p-8 animate-scale-in border-2 border-amber-400/30 dark:border-amber-500/20 bg-amber-50/10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-2 h-8 bg-amber-500 rounded-full mr-4"></span>
                  Certification Exam
                </h2>
                <div className="flex items-start p-6 bg-white/40 dark:bg-gray-800/40 rounded-2xl">
                  <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl mr-5 text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                   <p className="text-lg text-gray-700 dark:text-gray-300 font-medium italic leading-relaxed">
                     {course.examInfo}
                   </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8 sticky top-24 animate-scale-in shadow-xl border border-white/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                At a Glance
              </h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Duration</p>
                    <p className="text-gray-900 dark:text-white font-bold">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4 text-purple-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Skill Level</p>
                    <p className="text-gray-900 dark:text-white font-bold">{course.level}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4 text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Pre-requisite</p>
                    <p className="text-gray-900 dark:text-white font-bold leading-tight">{course.prerequisites}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
