import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, GraduationCap, Briefcase, Code, Award } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'research', 'projects', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-slate-800">Shubhangi Pandey</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'research', label: 'Research' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-emerald-600 ${
                    activeSection === id ? 'text-emerald-600' : 'text-slate-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <img 
              src="/image.jpg" 
              alt="Shubhangi Pandey" 
              className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-4 border-emerald-500 shadow-xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Shubhangi Pandey
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4">Software Engineer & Cloud Research Enthusiast</p>
          <p className="text-lg text-emerald-300 mb-4 font-medium">Open to opportunities</p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Master's in Computer Science at Oregon State University, specializing in AI and distributed systems. 
            Passionate about building scalable solutions and advancing systems research with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/Resume_shubhangi.pdf" 
              download
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Download Resume</span>
            </a>
            <button 
              onClick={() => scrollTo('experience')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="border border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://linkedin.com/in/shubhi07" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/shubhu15" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:zubbs.oregon@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About Me</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Software Engineer with a strong foundation in backend systems and cloud infrastructure, built through 
                hands-on experience at companies like Illumio, WorkSpan, and UnitedHealth Group.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Currently pursuing my Master's degree with a minor in Artificial Intelligence, I'm actively involved 
                in research at the NetSTAR Lab, focusing on cloud computing optimization and resource allocation algorithms. 
                I enjoy tackling complex technical challenges - from architecting integration frameworks that improve team 
                productivity to debugging production issues that keep systems running smoothly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm">San Jose, California</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm">GPA: 3.97/4.0</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-slate-800 mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2">
                      <Code className="w-4 h-4 text-emerald-600" />
                      <span><strong>3+ Years Experience</strong> - Professional software development across startups and enterprise</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-emerald-600" />
                      <span><strong>Graduate Research</strong> - Current research in cloud systems optimization and distributed computing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                      <span><strong>Backend Focus</strong> - Proficient in Go, Python, Java with focus on scalable backend architecture</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-emerald-600" />
                      <span><strong>High Performance</strong> - Experience leading projects that measurably improve system performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Professional Experience</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-600 to-emerald-300"></div>
            
            {[
              {
                title: "Engineering Intern (Co-op)",
                company: "Illumio, CloudSecure",
                location: "Sunnyvale, CA",
                period: "Jun 2024 – Feb 2025",
                description: "Integrated multi-cloud networking resources and developed efficient relationship mapping using Neo4j. Led OnCall activities and spearheaded integration testing transformation, improving test coverage by 60%.",
                skills: ["Golang", "Postgres", "AWS", "Azure", "OCI", "REST APIs", "gRPC", "Grafana", "Terraform"]
              },
              {
                title: "Software Engineer",
                company: "WorkSpan (Angad Corp Ltd)",
                location: "Bangalore, India", 
                period: "Oct 2022 – Aug 2023",
                description: "Led customer onboarding automation development, reducing setup time from 3-4 days to under 10 minutes. Developed Export API increasing app engagement by 60% with 30% revenue growth.",
                skills: ["Python", "MongoDB", "GraphQL", "PostgreSQL", "GCP", "Design Patterns"]
              },
              {
                title: "Software Engineer",
                company: "UnitedHealth Group",
                location: "Gurgaon, India",
                period: "Oct 2019 – Oct 2022", 
                description: "Enhanced scheduling applications and modernized legacy DataStage ETL pipeline into scalable Java microservices using Kafka Streams, improving performance by 30%.",
                skills: ["Java", "Docker", "Redis", "Kubernetes", "Apache Kafka", "MySQL", "Oracle", "Spark"]
              }
            ].map((job, index) => (
              <div key={index} className="relative ml-16 mb-12 last:mb-0">
                <div className="absolute -left-12 w-6 h-6 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
                    <div className="flex items-center space-x-2 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <div className="text-emerald-600 font-semibold mb-1">{job.company}</div>
                  <div className="text-slate-500 text-sm mb-4">{job.location}</div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
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

      {/* Research Section */}
      <section id="research" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Research Experience</h2>
          <div className="space-y-8">
            
            {/* Current Graduate Research */}
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Graduate Student Research</h3>
                  <p className="text-emerald-600 font-semibold">NetSTAR Lab, Oregon State University</p>
                  <p className="text-slate-500 text-sm">Feb 2025 – Dec 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Advisor</h4>
                  <a 
                    href="https://www.linkedin.com/in/bechir-hamdaoui-b83b7581/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    Prof. Bechir Hamdaoui
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Focus Area</h4>
                  <p className="text-slate-600">Resource Utilization Optimization with AI</p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">Research Project: Resource Optimization with Load Balancing</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Working under Prof. Bechir Hamdaoui at NetSTAR Lab on advanced resource optimization techniques using artificial intelligence for distributed systems and cloud computing environments. Investigated QoS-aware scheduling challenges in distributed cloud computing applications and implemented a novel load balancing algorithm to optimize task scheduling and resource allocation.
                </p>
                <div className="bg-white rounded-lg p-4 border border-emerald-200 mb-4">
                  <h5 className="font-medium text-slate-700 mb-2">Key Achievement</h5>
                  <p className="text-slate-600 text-sm">
                    Evaluated the algorithm's performance using the CloudSim toolkit, demonstrating a <strong>reduction in makespan</strong> 
                    and an <strong>improvement in resource utilization by up to 78%</strong>.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h5 className="font-medium text-slate-700 mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "Distributed Systems", "Cloud Computing", "Resource Optimization", "Python", "Research", "CloudSim", "Java"].map((tech, i) => (
                      <span key={i} className="bg-white text-emerald-700 px-3 py-1 rounded-full text-xs font-medium border border-emerald-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Undergraduate Research - Watermarking */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Undergraduate Research</h3>
                  <p className="text-blue-600 font-semibold">Watermarking & Tampering Detection</p>
                  <p className="text-slate-500 text-sm">March 2019 – May 2019</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Institution</h4>
                  <p className="text-slate-600">National Institute of Technology, Raipur</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Focus Area</h4>
                  <p className="text-slate-600">Digital Image Processing</p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-slate-600 leading-relaxed mb-4">
                  In-depth study and research-based work on Image Processing Algorithms including JPEG Compression, SPIHT, and LDPC. Focused on digital image watermarking techniques for tamper detection and restoration with published research outcomes.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200 mb-4">
                  <h5 className="font-medium text-slate-700 mb-3">Key Achievements</h5>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Implemented tamper detection and restoration techniques</li>
                    <li>• Analyzed algorithm effectiveness in detecting unauthorized modifications</li>
                    <li>• <strong>Publication:</strong> Digital Image Watermarking Technique for Tamper Detection and Restoration</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-medium text-slate-700 mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "MATLAB", "JPEG Compression", "SPIHT", "LDPC", "Image Processing", "Digital Watermarking"].map((tech, i) => (
                      <span key={i} className="bg-white text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Summer Research Intern */}
            <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Summer Research Intern</h3>
                  <p className="text-purple-600 font-semibold">Deep Learning for Hand Gesture Identification</p>
                  <p className="text-slate-500 text-sm">May 2018 – Jul 2018</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Institution</h4>
                  <p className="text-slate-600">Indian Institute of Technology (BHU), Varanasi</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Advisor</h4>
                  <a 
                    href="https://www.linkedin.com/in/kishor-sarawadekar-14296413/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-purple-600 transition-colors"
                  >
                    Prof. Dr. Kishor Sarawadekar
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Focus Area</h4>
                  <p className="text-slate-600">Deep Learning & Biometric Systems</p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Investigated deep learning models for biometric identification, focusing on fingerprint analysis and real-time object detection applications. Implemented 'DeepFinger' algorithm for fingerprint pattern classification.
                </p>
                <div className="bg-white rounded-lg p-4 border border-purple-200 mb-4">
                  <h5 className="font-medium text-slate-700 mb-3">Key Achievements</h5>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• <strong>Test accuracy - 89%</strong></li>
                    <li>• Experimented with tiny-YOLO model for real-time object detection</li>
                    <li>• Applied deep learning techniques to biometric security systems</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-medium text-slate-700 mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Keras", "TensorFlow", "OpenCV", "Deep Learning", "Biometric Systems"].map((tech, i) => (
                      <span key={i} className="bg-white text-purple-700 px-3 py-1 rounded-full text-xs font-medium border border-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AES System with Multi-Scale Features",
                period: "Apr 2025 – Jun 2025",
                description: "Developed an automated essay scoring system leveraging pre-trained SBERT model with deep neural networks for semantic feature extraction and human-like grading.",
                achievement: "60% Test Accuracy",
                tech: ["PyTorch", "BERT", "Weights & Biases", "Python"],
                highlight: "NLP & Deep Learning"
              },
              {
                title: "BeaverHacks 2025 - UniRide",
                period: "Apr 2025",
                description: "Built and deployed a secure, full-stack carpooling platform connecting university students for verified rides with OAuth authentication and Google Maps integration.",
                achievement: "Full-Stack Implementation",
                tech: ["Python", "Flask", "FastAPI", "Angular", "PostgreSQL"],
                highlight: "Web Development"
              },
              {
                title: "Open Source Kafka Contribution",
                period: "Jul 2025 – Aug 2025", 
                description: "Independently identified testing gaps in Apache Kafka codebase and implemented comprehensive unit tests using TopologyTestDriver to improve code reliability.",
                achievement: "OSS Contribution",
                tech: ["Java", "Kafka", "JIRA", "Unit Testing"],
                highlight: "Open Source"
              },
              {
                title: "Resource Optimization with Load Balancing",
                period: "Feb 2025 – May 2025",
                description: "Implemented QoS-aware Load Balancing algorithm for optimized scheduling in Cloud Computing applications, reducing makespan and improving resource utilization.",
                achievement: "78% Resource Optimization",
                tech: ["CloudSim", "Machine Learning", "Cloud Infrastructure"],
                highlight: "Research Project"
              },
              {
                title: "Building JOS Operating System",
                period: "Oct 2023",
                description: "Implemented core operating system components as part of advanced coursework at Oregon State University. Built fundamental OS functionality from scratch including memory management, interrupt handling, and concurrency controls.",
                achievement: "Complete OS Implementation",
                tech: ["x86 Assembly", "C Programming", "GDB", "QEMU x86 Emulator", "Kernel Programming"],
                highlight: "Systems Programming"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                    {project.highlight}
                  </span>
                  <span className="text-slate-500 text-sm">{project.period}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="bg-emerald-50 rounded-lg p-3 mb-4">
                  <span className="text-emerald-700 font-semibold text-sm">Key Result: </span>
                  <span className="text-emerald-600 text-sm">{project.achievement}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Education</h2>
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Master's Degree */}
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Master of Science in Computer Science</h3>
                  <p className="text-emerald-600 font-semibold text-lg">Oregon State University</p>
                  <p className="text-slate-500">Minor in Artificial Intelligence</p>
                  <p className="text-slate-500">Corvallis, OR, USA</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-600 font-semibold">Sept 2023 – Dec 2025</p>
                  <p className="text-emerald-600 font-bold text-lg">GPA: 3.97/4.0</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Relevant Coursework</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Operating Systems", 
                      "Computer Architecture",
                      "Systems & Networks Security",
                      "AI",
                      "Machine Learning",
                      "NLP with Deep Learning",
                      "Database Systems",
                      "Programming Languages",
                      "Cloud and mobile app development",
                      "Parallel programming"
                    ].map((course, i) => (
                      <span key={i} className="bg-white text-slate-600 px-3 py-2 rounded-lg text-sm border border-slate-200">
                        {course}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-slate-700 mb-3">Research Areas</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Load Balancing Algorithms for Cloud Systems (NetSTAR Lab)</li>
                      <li>• Resource Optimization in Distributed Systems</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Teaching Experience</h4>
                  <p className="text-slate-600 text-sm mb-2">Graduate Teaching Assistant:</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm">Intro to Statistics (Fall 2024)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm">Parallel Programming (Spring 2024)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm">Mobile Software Development (Fall 2023)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm">Cloud app development</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <h4 className="font-semibold text-slate-700 mb-3">Activities & Leadership</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm">Society of Women Engineers Member</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm">Middle Eastern Dance Showcase, rock climbing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bachelor's Degree */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Bachelor's of Technology (B.Tech)</h3>
                  <p className="text-blue-600 font-semibold text-lg">Electronics and Telecommunication Engineering</p>
                  <p className="text-slate-500">National Institute of Technology, Raipur</p>
                  <p className="text-slate-500">Raipur, India</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-600 font-semibold">May 2015 – May 2019</p>
                  <p className="text-blue-600 font-bold text-lg">GPA: 9.3/10.0</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Relevant Courses</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      "Computer Architecture",
                      "Data Structures", 
                      "Linear Algebra",
                      "Probability & Statistics",
                      "Signal and systems"
                    ].map((course, i) => (
                      <span key={i} className="bg-white text-slate-600 px-3 py-2 rounded-lg text-sm border border-slate-200">
                        {course}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-slate-700 mb-3">Research Areas</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Undergraduate Student Researcher: Digital Image Processing Lab</li>
                      <li>• Hand Gesture Detection using YOLO at IIT BHU (Nov 2018 - Apr 2019)</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Graduated with High Honors (9.3/10.0 GPA)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Published research in Digital Image Watermarking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Programming Languages",
                skills: ["Java", "Python", "Go", "C/C++", "JavaScript", "SQL", "Kotlin", "Ruby"],
                icon: <Code className="w-6 h-6" />
              },
              {
                category: "AI/ML & Data Science",
                skills: ["PyTorch", "TensorFlow", "Keras", "NumPy", "Pandas", "Scikit-learn", "OpenCV", "LLM"],
                icon: <Award className="w-6 h-6" />
              },
              {
                category: "Frameworks & Tools",
                skills: ["SpringBoot", "React", "Docker", "Kubernetes", "AWS", "Azure", "Git", "Jenkins"],
                icon: <Briefcase className="w-6 h-6" />
              },
              {
                category: "Cloud & Databases",
                skills: ["AWS", "Azure", "GCP", "OCI", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "MySQL", "Oracle", "Redis"],
                icon: <Briefcase className="w-6 h-6" />
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-emerald-600">{category.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-600 p-3 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Email</p>
                    <a href="mailto:zubbs.oregon@gmail.com" className="text-white hover:text-emerald-400 transition-colors">
                      zubbs.oregon@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-600 p-3 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Phone</p>
                    <a href="tel:+15412862482" className="text-white hover:text-emerald-400 transition-colors">
                      +1 (541) 286-2482
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-600 p-3 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Location</p>
                    <p className="text-white">San Jose, California</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/shubhi07" 
                    className="bg-slate-800 hover:bg-emerald-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/shubhu15" 
                    className="bg-slate-800 hover:bg-emerald-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:zubbs.oregon@gmail.com" 
                    className="bg-slate-800 hover:bg-emerald-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Shubhangi Pandey. Designed with passion for technology and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;