import React, { useState, useEffect } from 'react';
import { Globe, User } from 'lucide-react';



// Colores personalizados (simulados con Tailwind)
// Slate-900 para textos principales
// Blue-600 para acentos (confianza, ingeniería)

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  // Efecto para el scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Datos extraídos de tu CV
  const experience = [
    {
      company: "Centro Integral de Piso Pélvico",
      role: "Administrador",
      period: "Mar 2024 - Actualidad",
      description: "Responsable integral de tareas operativas. Elaboración de informes técnicos para dirección, gestión de compras, coordinación de recursos y control de inventarios. Optimización del flujo de pacientes.",
      skills: ["Gestión", "Reportes", "Liderazgo"]
    },
    {
      company: "Kalahari Resorts & Conventions (USA)",
      role: "LifeGuard (Work & Travel)",
      period: "Dic 2023 - Mar 2024",
      description: "Experiencia internacional en Pennsylvania. Desarrollo de comunicación intercultural, trabajo en equipo bajo presión y aplicación de protocolos de seguridad.",
      skills: ["Inglés", "Trabajo en Equipo", "Adaptabilidad"]
    },
    {
      company: "IncluIT",
      role: "Pasante en Programación",
      period: "Jun 2018 - Jul 2018",
      description: "Aplicación práctica de Python y Django. Trabajo bajo metodologías ágiles (Scrum).",
      skills: ["Python", "Django", "Scrum"]
    }
  ];

  const education = [
    {
      institution: "Universidad Tecnológica Nacional (UTN-FRC)",
      degree: "Ingeniería Industrial",
      period: "2022 - Actualidad",
      status: "Estudiante Avanzado"
    },
    {
      institution: "Instituto Técnico Salesiano Villada",
      degree: "Técnico en Programación",
      period: "2012 - 2018",
      status: "Finalizado"
    },
    {
      institution: "Universidad Nacional de Córdoba",
      degree: "Ingeniería Agronómica",
      period: "2019 - 2022",
      status: "Formación previa"
    }
  ];

  const skills = [
    { name: "Python", icon: <Code size={20} />, level: "Avanzado" },
    { name: "SQL", icon: <Database size={20} />, level: "Intermedio" },
    { name: "Power BI", icon: <FileSpreadsheet size={20} />, level: "Intermedio" },
    { name: "AutoCAD / Inventor", icon: <Settings size={20} />, level: "Diseño" },
    { name: "Microsoft Office", icon: <FileSpreadsheet size={20} />, level: "Avanzado" },
    { name: "Inglés", icon: <Globe size={20} />, level: "Nivel Medio" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-blue-900">GB.</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            {['Inicio', 'Experiencia', 'Formación', 'Habilidades', 'Contacto'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">
              Buscando oportunidades de Pasantía
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Hola, soy <span className="text-blue-600">Gregorio Bollati</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 font-light">
              Estudiante de Ingeniería Industrial & Técnico en Programación
            </h2>
            <p className="text-lg text-slate-600 max-w-lg mx-auto">
              Me motiva diseñar, medir y mejorar sistemas productivos con foco en eficiencia, 
              decisiones basadas en datos y automatización.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                Contactar
              </button>
              <button 
                onClick={() => scrollToSection('experiencia')}
                className="px-8 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all"
              >
                Ver Trayectoria
              </button>
            </div>
          </div>

        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">Experiencia Profesional</h2>
          </div>

          <div className="space-y-12 border-l-2 border-slate-200 ml-3 pl-8 relative">
            {experience.map((job, index) => (
              <div key={index} className="relative group">
                {/* Dot on timeline */}
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white border-4 border-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                
                <div className="bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                      <h4 className="text-blue-600 font-medium">{job.company}</h4>
                    </div>
                    <span className="text-sm text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 mt-2 md:mt-0 w-fit">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="text-xs font-semibold text-slate-600 bg-slate-200 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formación" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">Formación Académica</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{edu.degree}</h3>
                <p className="text-blue-600 mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">{edu.period}</span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    edu.status === 'Finalizado' ? 'bg-green-100 text-green-700' : 
                    edu.status.includes('No') ? 'bg-slate-100 text-slate-500' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Certificaciones extra */}
            <div className="bg-blue-900 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4">Formación Complementaria</h3>
              <ul className="space-y-3 text-sm text-blue-100">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  Curso de Inglés (Nivel Medio)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  Programación Neurolingüística (PNL)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">Habilidades Técnicas</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all cursor-default group">
                <div className="text-slate-400 group-hover:text-blue-600 mb-3 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-slate-800">{skill.name}</h3>
                <span className="text-xs text-slate-500 mt-1">{skill.level}</span>
              </div>
            ))}
          </div>

          {/* Value Proposition Box */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">¿Por qué elegirme?</h3>
            <p className="max-w-2xl mx-auto text-blue-100 leading-relaxed">
              Combino la visión estratégica de la <strong>Ingeniería Industrial</strong> con la capacidad técnica de la <strong>Programación</strong>. 
              No solo entiendo los procesos operativos, sino que tengo las herramientas para automatizarlos, medirlos y optimizarlos mediante datos y software.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Hablemos</h2>
            <p className="text-slate-600">
              Estoy disponible para entrevistas y oportunidades de pasantía.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:gregobollati7@gmail.com" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
              <p className="text-slate-500 text-sm">gregobollati7@gmail.com</p>
            </a>

            <a href="tel:+5493517056456" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Teléfono</h3>
              <p className="text-slate-500 text-sm">+54 9 351 705 6456</p>
            </a>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Ubicación</h3>
              <p className="text-slate-500 text-sm">Córdoba, Argentina</p>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 Gregorio Bollati. Desarrollado con React & Tailwind CSS.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;