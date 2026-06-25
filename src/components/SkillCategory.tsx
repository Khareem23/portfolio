import React from 'react';

interface SkillProps {
  name: string;
  proficiency: number;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillProps[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1">
      <div className="flex items-center mb-6">
        <div className="mr-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">{skill.name}</span>
              <span className="text-gray-500 text-sm">{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${skill.proficiency}%`,
                  animationDelay: `${index * 0.1}s`
                }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;