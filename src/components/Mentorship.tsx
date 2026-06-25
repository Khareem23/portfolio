import React from 'react';
import { BookOpen, Check, Users, Award, Target, Lightbulb } from 'lucide-react';

const Mentorship: React.FC = () => {
  return (
    <section id="mentorship" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Developer Mentorship</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accelerate your development career with personalized guidance and hands-on learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen size={24} className="text-blue-600 mr-3" />
              What You'll Learn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Check size={18} className="text-green-500" />
                </div>
                <p className="text-gray-700">Full-stack development with .NET and React/Angular</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Check size={18} className="text-green-500" />
                </div>
                <p className="text-gray-700">Cloud infrastructure using Azure and Terraform</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Check size={18} className="text-green-500" />
                </div>
                <p className="text-gray-700">Database modelling, design and optimization techniques</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Check size={18} className="text-green-500" />
                </div>
                <p className="text-gray-700">CI/CD implementation with GitHub Actions, Azure devOps & AWS Code Pipeline</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Check size={18} className="text-green-500" />
                </div>
                <p className="text-gray-700">Software architecture & patterns</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Check size={18} className="text-green-500" />
                </div>
                <p className="text-gray-700">Code quality, automation testing, and best practices</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Check size={18} className="text-green-500" />
                </div>
                <p className="text-gray-700">Containerization with Docker and Kubernetes</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Check size={18} className="text-green-500" />
                </div>
                <p className="text-gray-700">Career development and technical interviews preparation</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users size={24} className="text-blue-600 mr-3" />
              Mentorship Approach
            </h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target size={20} className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Personalized Roadmap</h4>
                  <p className="text-gray-600">Customized learning plans based on your current skills and career goals.</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Lightbulb size={20} className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Real-World Projects</h4>
                  <p className="text-gray-600">Hands-on experience with enterprise-grade applications and architecture.</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award size={20} className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Code Reviews & Feedback</h4>
                  <p className="text-gray-600">Detailed code reviews with actionable feedback to improve your skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Mentorship Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;