import React from 'react';
import { Code2, Globe, Laptop, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="bg-clip-text bg-gradient-to-r font-bold from-indigo-600 mb-4 text-4xl text-transparent to-purple-600">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about crafting seamless user experiences and dynamic applications with Wordpress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
            Hello! I am Amit Nanda, a passionate website developer with a strong focus on WordPress development. Over the past 6 months, I have honed my skills in creating dynamic, user-friendly websites that not only meet client needs but also provide exceptional user experiences. My journey in web development began with a 3-month internship as a Laravel developer, where I gained valuable insights into building robust applications, followed by a 1-month internship as a web developer that solidified my foundation in the field.
            </p>
            <p className="text-gray-700 leading-relaxed">
            I am proficient in modern web technologies, including PHP, HTML, CSS, and JavaScript, and I prioritize writing clean, maintainable code. My approach to development emphasizes collaboration, continuous learning, and staying updated with the latest trends and best practices in web development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">5+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              {/* <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">50+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div> */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="p-6 bg-indigo-50 rounded-xl">
                <Code2 className="text-indigo-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900">WordPress Development</h3>
                <p className="text-gray-600 text-sm">Crafting custom themes and plugins to enhance functionality and user experience.</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl">
                <Globe className="text-purple-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900">Laravel</h3>
                <p className="text-gray-600 text-sm">Building scalable web applications with a focus on performance and security.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-pink-50 rounded-xl">
                <Palette className="text-pink-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900">Responsive Design</h3>
                <p className="text-gray-600 text-sm">Ensuring websites are mobile-friendly and accessible across all devices.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl">
                <Laptop className="text-blue-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900">Mobile-First</h3>
                <p className="text-gray-600 text-sm">Designing responsive web applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;