import React from 'react';
import { Globe, Database, Server, Cloud, GitBranch, Users, PenTool, Blocks } from 'lucide-react';
import SkillCategory from './SkillCategory';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'React', proficiency: 90 },
    { name: 'Angular', proficiency: 85 },
    { name: 'TypeScript', proficiency: 90 },
    { name: 'HTML/CSS', proficiency: 95 },
    { name: 'Redux', proficiency: 85 },
    { name: 'RxJS', proficiency: 80 }
  ];

  const productDesignSkills = [
    { name: 'Figma', proficiency: 92 },
    { name: 'Wireframing', proficiency: 90 },
    { name: 'Prototyping', proficiency: 88 },
    { name: 'User Research', proficiency: 82 },
    { name: 'Design Systems', proficiency: 90 },
    { name: 'UX Strategy', proficiency: 86 }
  ];

  const architectureSkills = [
    { name: 'High Availability', proficiency: 92 },
    { name: 'High Scalability', proficiency: 92 },
    { name: 'Security', proficiency: 90 },
    { name: 'Maintainability', proficiency: 94 },
    { name: 'System Design', proficiency: 93 },
    { name: 'Domain-Driven Design', proficiency: 88 }
  ];

  const backendSkills = [
    { name: '.NET Core', proficiency: 95 },
    { name: 'C#', proficiency: 95 },
    { name: 'Node.js', proficiency: 80 },
    { name: 'RESTful APIs', proficiency: 95 },
    { name: 'GraphQL', proficiency: 75 },
    { name: 'Microservices', proficiency: 90 }
  ];

  const databaseSkills = [
    { name: 'PostgreSQL', proficiency: 90 },
    { name: 'MySQL', proficiency: 85 },
    { name: 'MS SQL', proficiency: 95 },
    { name: 'MongoDB', proficiency: 70 },
    { name: 'Entity Framework', proficiency: 90 },
    { name: 'SQL Optimization', proficiency: 85 }
  ];

  const devOpsSkills = [
    { name: 'Azure', proficiency: 90 },
    { name: 'Kubernetes', proficiency: 85 },
    { name: 'Docker', proficiency: 90 },
    { name: 'Terraform', proficiency: 85 },
    { name: 'GitHub Actions', proficiency: 90 },
    { name: 'Azure DevOps', proficiency: 95 }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With a decade of experience, I've developed proficiency in a wide range of technologies
            across the full software development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <SkillCategory 
            title="Product Design" 
            icon={<PenTool size={24} className="text-rose-600" />}
            skills={productDesignSkills}
          />
          <SkillCategory 
            title="Software Design & Architecture" 
            icon={<Blocks size={24} className="text-indigo-600" />}
            skills={architectureSkills}
          />
          <SkillCategory 
            title="Frontend Development" 
            icon={<Globe size={24} className="text-blue-600" />}
            skills={frontendSkills}
          />
          <SkillCategory 
            title="Backend Development" 
            icon={<Server size={24} className="text-purple-600" />}
            skills={backendSkills}
          />
          <SkillCategory 
            title="Database Technologies" 
            icon={<Database size={24} className="text-teal-600" />}
            skills={databaseSkills}
          />
          <SkillCategory 
            title="DevOps & Cloud" 
            icon={<Cloud size={24} className="text-orange-600" />}
            skills={devOpsSkills}
          />
        </div>

        <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="bg-blue-100 rounded-full p-5 inline-block">
                <Users size={48} className="text-blue-600" />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mentorship & Leadership</h3>
              <p className="text-gray-600 mb-4">
                Beyond technical skills, I'm passionate about mentoring developers and building high-performing teams.
                I've guided junior and mid-level developers in full-stack development, helping them grow their careers
                and deliver quality code.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-center">
                  <GitBranch size={16} className="text-blue-600 mr-2" />
                  Code reviews & best practices
                </li>
                <li className="flex items-center">
                  <GitBranch size={16} className="text-blue-600 mr-2" />
                  Architecture design
                </li>
                <li className="flex items-center">
                  <GitBranch size={16} className="text-blue-600 mr-2" />
                  Team leadership
                </li>
                <li className="flex items-center">
                  <GitBranch size={16} className="text-blue-600 mr-2" />
                  Technical interviews
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
