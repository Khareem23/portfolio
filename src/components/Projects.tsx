import React, { useState } from 'react';
import { ExternalLink, Code, Github } from 'lucide-react';
import zheetaImg from "../assets/img/zheeta.png";
import confrisImg from "../assets/img/confris.png";
import otwiseImg from "../assets/img/otwise.png";
import game4africaImg from "../assets/img/game4africa.png";
import toprateImg from "../assets/img/toprate.png";
import jciremitImg from "../assets/img/jciremit.png";

import cofaImg from "../assets/img/cofa.png";
import wizdomImg from "../assets/img/wizdom.png";
import damnImg from "../assets/img/damn.png";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  category: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, description, image, tags, demoLink, codeLink, category 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-4">
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {codeLink && (
              <a 
                href={codeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
        <div className="absolute top-0 left-0 m-3">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: ProjectProps[] = [
    {
      title: "Zheeta",
      description: "An integrated social network platform that allows users to create buddy events, join events, meet people nearby and monetize social media activities",
      image: zheetaImg,
      tags: [".NET API", "Entity Framework", "Dapper", "X-Unit" ,"React", "Postgres SQL", "Azure", "SignalR", "Linux/Bash", "Flutter/Dart", "Docker"],
      demoLink: "https://zheeta.com",
      codeLink: "#",
      category: "Full Stack"
    },
    {
      title: "Confris (SAAS Platform)",
      description: "A Tenant based Conference Management Portal (SAAS) allowing conference owners to create, manage and publish conference papers.",
      image: confrisImg,
      tags: [".Nest JS - API", "Prisma- ORM", "Postgres SQL", "Docker", "Next JS", "DNS API"],
      demoLink: "https://conferencecycle.com/",
      codeLink: "#",
      category: "Full Stack"
    },
    {
      title: "OTWiseAI",
      description: "A home adaptation platform for less priviledged and old people seeking Govt grants",
      image: otwiseImg,
      tags: [".Nest JS - Node API", "Prisma- ORM", "Postgres SQL", "Docker", "React", "TypeScript", "Docker"],
      demoLink: "https://otwiseai.com/",
      codeLink: "#",
      category: "Full Stack"
    },
    {
      title: "Games365Hub",
      description: "A mobile gaming platform with multiplayer games build with Unity 2D & 3D Game Engine",
      image: game4africaImg,
      tags: ["C#", "Unity", "Express Js - Node API", "Docker", "GitHub Actions", "MySQL"],
      demoLink: "https://games365hub.com/",
      codeLink: "#",
      category: "Gaming"
    },
    {
      title: "Top Rate Transfer",
      description: "A cross border money transfer solution that allows people in australia, canada and new zealand to send money to Africa and Asia.",
      image: toprateImg,
      tags: [".Net API", "Microservices", "Kubernetes","Terraform","React", "Azure", "AWS", "MySQL", "Docker", "Payment Gateways"],
      demoLink: "https://topratetransfer.com/",
      codeLink: "#",
      category: "Full Stack"
    },
    {
      title: " JCI Remit",
      description: "A cross border money transfer solution that allows people in australia to send money to Africa",
      image: jciremitImg,
      tags: [".NET API", "Entity Framework", "MySQL", "Angular", "JWT"],
      demoLink: "https://jciremit.com/home",
      codeLink: "#",
      category: "Full Stack"
    },
    {
      title: " Wizdom Mens Care",
      description: "An online shop for men's hair products",
      image: wizdomImg,
      tags: ["Wordpress", "PhP", "MySql"],
      demoLink: "https://wizdommenscare.com/",
      codeLink: "#",
      category: "Online-Shop"
    },
    {
      title: " Cofa Juice",
      description: "An online shop for a zobo juice business when you can order packs, ",
      image: cofaImg,
      tags: ["Wordpress", "PhP", "MySql"],
      demoLink: "https://cofaltd.co.uk/",
      codeLink: "#",
      category: "Online-Shop"
    },
    {
      title: " Damn Drip",
      description: "An online shop for a fashion business",
      image: damnImg,
      tags: ["Wordpress", "PhP", "MySql"],
      demoLink: "https://damndrip.com/",
      codeLink: "#",
      category: "Online-Shop"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('Full Stack')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'Full Stack' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Full Stack
            </button>
            <button 
              onClick={() => setFilter('Frontend')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'Frontend' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setFilter('Backend')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'Backend' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Backend
            </button>
            <button 
              onClick={() => setFilter('Gaming')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'Backend' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Gaming
            </button>
            <button 
              onClick={() => setFilter('Online-Shop')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'Backend' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Online Shops
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Code size={16} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;