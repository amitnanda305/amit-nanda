import { Code, Database, GitBranch, Layout, Box, FileText, Server } from 'lucide-react';

const skills = [
  { name: 'PHP', icon: <Code className="text-green-600" size={32} /> },
  { name: 'WordPress', icon: <FileText className="text-blue-500" size={32} /> },
  { name: 'JavaScript', icon: <FileText className="text-yellow-500" size={32} /> },
  { name: 'HTML', icon: <FileText className="text-red-500" size={32} /> },
  { name: 'CSS', icon: <Server className="text-blue-600" size={32} /> },
  { name: 'jQuery', icon: <Code className="text-green-500" size={32} /> },
  { name: 'Git', icon: <GitBranch className="text-black-600" size={32} /> },
  { name: 'Bootstrap', icon: <Layout className="text-violet-600" size={32} /> },
  { name: 'Tailwind CSS', icon: <Server className="text-sky-500" size={32} /> },
  { name: '.NET', icon: <Box className="text-purple-600" size={32} /> },
];
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;