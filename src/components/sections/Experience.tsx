import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Web Development Internship',
    company: 'Codsoft™ Pvt. Ltd',
    period: 'Oct 2023 – Nov 2023',
    description: 'Focused on developing responsive, user-friendly websites using front-end technologies.',
    achievements: [
      'Proficient in HTML, CSS, JavaScript, and Bootstrap for creating modern web layouts and interactive elements.',
      'Built dynamic UI components for various web pages, ensuring cross-browser compatibility and mobile responsiveness.',
      'Collaborated on several projects to implement features such as modals, carousels, and navigation systems using Bootstrap components.',
      'Enhanced website performance by optimizing code and resources, improving page load times and user experience.',
    ],
  },
  {
    title: 'Laravel Developer',
    company: 'Shami Innovation and Technologies',
    period: 'Jun 2023 – Sep 2023',
    description: 'Utilized JavaScript, PHP and LARAVEL to implement new features and functionalities',
    achievements: [
      'Design and implemented online ERP website for manage employee activities.',
      'Gained hands-on experience in version control with Git and GitHub for efficient project management and collaboration.',
      'Reduced bug reports by 60%',
    ],
  },
  {
    title: 'Wordpress Developer',
    company: 'Cypherox Technologies Pvt. Ltd',
    period: 'Jun 2024 - Present',
    description: 'Created responsive and interactive web applications for various clients.',
    achievements: [
      'Built 20+ responsive websites',
      'Implemented modern UI/UX practices',
      'Convert figma to wordpress.',
      'Have Learned html ACF dynamic Website with Elementor, divi, Gutenberg',
      'Optimized website load times',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2> */}
          <h2 className="bg-clip-text bg-gradient-to-r font-bold from-indigo-600 mb-4 text-4xl text-transparent to-purple-600">Work Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Briefcase size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-indigo-600">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;