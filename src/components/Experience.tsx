import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, company, period, description, technologies 
}) => {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 group-last:bg-transparent"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-4 h-4 -ml-2 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <div className="text-blue-600 font-medium">{company}</div>
          </div>
          <div className="flex items-center mt-2 md:mt-0 text-gray-500">
            <Calendar size={16} className="mr-1" />
            <span>{period}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Renaissance Learning Inc, London - UK",
      period: "2022 - Present",
      description: "Developing & maintaining cloud-native serverless microservices. Implementing CI/CD pipelines and Infrastructure as Code for Azure deployments. Mentoring junior developers and establishing best practices.",
      technologies: [".Net Web API", "Angular", "Azure", "Azure Functions", "Terraform", "MS SQL", "Docker"]
    },
    {
      title: "Senior Full Stack Developer",
      company: "Cognizant Technologies, Gdansk - Poland",
      period: "2021 - 2022",
      description: "Developed scalable web applications utilizing React frontend and .NET backend. Implemented database optimization strategies resulting in 40% performance improvement. Collaborated with UX team to implement responsive designs.",
      technologies: ["Angular", ".NET", "MS SQL", "Azure DevOps", "Redis", "Docker", "Microservices"]
    },
    {
      title: "Software Engineering Lead ",
      company: "JCI Remit, Brisbane - Australia",
      period: "20221 - 2022",
      description: "Led a team of 10 developers develop a robust remittal solution for a leading Fin Tech Compnay in Australia Built RESTful APIs using ASP.NET Web API. Designed and implemented database schemas using Entity Framework. Contributed to front-end development using jQuery and Bootstrap.",
      technologies: [".NET API", "Angular", "Postgres SQL", "Entity Framework", "Bootstrap"]
    },
    {
      title: "Tech Lead & Solution Architect",
      company: "TopRate Transfers, Australia",
      period: "2019 - 2021",
      description: "Led a team of 5 developers to deliver a end to end working remittal solution. I led the design, development and deployment of the solution. I ",
      technologies: [".NET API", "React", "MS SQL", "Entity Framework", "TailwindCSS", "Docker", "Kubernetes", "DDD", "Azure", "Bash"]
    },
    {
      title: "Tech Lead & Co-Founder",
      company: "De Cloud23 Technologies Ltd, Nigeria",
      period: "2019 - 2020",
      description: "Creating business directions, roadmaps,  and leading development of various client's projects",
      technologies: [".NET API", "WordPress", "MS SQL", "Entity Framework", "Node", "Azure", "VPS", "Linux", "Bash"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A decade of building enterprise solutions and scalable applications across various industries.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              technologies={exp.technologies}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Briefcase size={16} className="mr-2" />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;