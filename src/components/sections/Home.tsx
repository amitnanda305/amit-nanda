import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ProfilePhoto from '../../images/DSC000322.png'

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-indigo-600 font-medium">👋 Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Amit Nanda</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              A passionate Asp.net Developer crafting beautiful and functional web experiences
            </p>
            <div className="flex space-x-4">
              <a
                // href="#contact"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get in Touch</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex space-x-4">
                <a
                  className="p-3 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  onClick={() => {
                    window.open('https://github.com/amitnanda305', '_blank');
                  }}
                >
                  <Github size={20} className="text-gray-700" />
                </a>
                <a
                  className="p-3 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  onClick={() => {
                    window.open('https://www.linkedin.com/in/amit-nanda-191a46262', '_blank');
                  }}
                >
                  <Linkedin size={20} className="text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  // src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                  src={ProfilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;