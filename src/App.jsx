import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, ShoppingCart, Coffee, Utensils, Globe } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
   

    {
      title: "E-Commerce API",
      description: "E-commerce API with FastAPI, supporting product management and orders",
      tech: ["FastAPI", "PostgreSQL"],
      
      github: "https://github.com/Giddypy/fastapi-ecommerce"
    },
    {
      title: "Popcorn Business Website",
      description: "Modern, responsive website showcasing products with online ordering and delivery tracking",
      tech: ["HTML/CSS", "JavaScript", "Bootstrap", "Django"],
      
      github: "https://github.com/Giddypy/popcorn-business"
    },
    {
      title: "Restaurant System",
      description: "A Restaurant system for interaction between customer from table to waiter for orders (ongoing project).",
      tech: ["Django", "HTML/CSS", "PostgreSQL"],
      
      github: "#"
    },
       {
      title: "Portfolio Website",
      description: "Modern responsive portfolio website with dark/light mode, smooth animations, and clean UI/UX design",
      tech: ["React", "Tailwind CSS", "JavaScript", "Lucide Icons"],
    
      github: "#"
    },
  ];

  const skills = {
    "Backend": ["Django", "FastAPI", "Python", "PostgreSQL"],
    "Frontend": ["HTML/CSS", "JavaScript", "React", "Bootstrap"],
    "Design": ["Figma", "Illustrator", "Photoshop"],
    "Tools": ["Git", "Docker", "Postman", "VS Code"]
  };

  const experience = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer & Designer",
      company: "Freelance",
      description: "Building web applications with Django/FastAPI and creating compelling brand identities"
    },
    {
      year: "2021 - 2023",
      title: "Python Developer",
      company: "Freelance",
      description: "Developed scalable backend systems and RESTful APIs"
    },
    {
      year: "2020 - 2023",
      title: "Graphic Designer",
      company: "Freelance",
      description: "Designed logos, marketing materials, and UI/UX for digital products"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-950/80 backdrop-blur-lg border-b border-gray-800' : 'bg-white/80 backdrop-blur-lg border-b border-gray-200') : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">My Portfolio</h1>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
         {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-0"></div>
                <img 
                  src="/images/profile.jpeg" 
                  alt="Gideon Shekarau" 
                  className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl border-1 border-gray-800"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <h4 className="text-4xl font-bold mb-12 leading-tight">
              Gideon Shekarau
            </h4>
            </div>
             
            
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h5 className="text-5xl font-bold mb-6 leading-tight">
              Code Meets <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">Creativity</span>
            </h5>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Python Developer, Graphic Designer and Mechanical Engineer crafting elegant solutions that merge technical excellence with visual appeal.
            </p>
            <div className="flex gap-4">
              
              <a href="#projects" className="hover:text-blue-500 transition-colors">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
                View Projects
              </button>
              </a>
              
            </div>
          </div>
        </div>
      </section>

       {/* About Section */}
      <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">About Me</h3>
          <div className="grid md:grid-cols-3 gap-12 items-center">
           
            {/* Bio Text */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <p className={`text-lg mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  I'm Gideon Shekarau, a Python developer specializing in Django and FastAPI, with a passion for creating robust backend systems. My background in graphic design gives me a unique perspective on building applications that are both powerful and beautiful.
                </p>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  I love bringing ideas to life through clean code and compelling design. Whether it's building scalable APIs or crafting memorable brand identities, I focus on delivering solutions that exceed expectations.
                </p>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Code2, label: "Python Development" },
                  { icon: Palette, label: "Graphic Design" },
                  { icon: Database, label: "API Development" },
                  { icon: ShoppingCart, label: "E-Commerce" }
                ].map((item, i) => (
                  <div key={i} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} hover:shadow-lg transition-all`}>
                    <item.icon className="mb-4 text-blue-500" size={32} />
                    <h4 className="font-semibold">{item.label}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
     <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} hover:shadow-2xl transition-all transform hover:-translate-y-2 border ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className={`h-48 bg-gradient-to-br flex items-center justify-center ${i === 0 ? 'from-blue-500 to-purple-600' : i === 1 ? 'from-orange-500 to-pink-600' : i === 2 ? 'from-green-500 to-blue-600' : 'from-purple-500 to-indigo-600'}`}>
                  {i === 0 ? <ShoppingCart size={64} className="text-white opacity-80" /> : i === 1 ? <Coffee size={64} className="text-white opacity-80" /> : i === 2 ? <Utensils size={64} className="text-white opacity-80" /> : <Globe size={64} className="text-white opacity-80" />}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, j) => (
                      <span key={j} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                   
                    <a href={project.github} className="flex items-center gap-2 text-blue-500 hover:underline">
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Tech Stack & Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-xl font-semibold mb-4 text-blue-500">{category}</h4>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li key={i} className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="flex gap-8">
                <div className={`w-32 flex-shrink-0 text-sm font-semibold ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {exp.year}
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                  <p className="text-blue-500 mb-2">{exp.company}</p>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Let's Work Together</h3>
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind? Let's create something amazing together.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:standarddevgrand@gmail.com" className="p-4 rounded-lg hover:bg-gray-800 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Giddypy" className="p-4 rounded-lg hover:bg-gray-800 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/feed" className="p-4 rounded-lg hover:bg-gray-800 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <a href="mailto:standarddevgrand@gmail.com">
            <button className="px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
            Get In Touch
          </button>
          
          </a>
          
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 text-center ${darkMode ? 'text-gray-500 border-t border-gray-800' : 'text-gray-400 border-t border-gray-200'}`}>
        <p>© 2024 Gideon Shekarau. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}