'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Mobile', 'Web', 'Full-Stack'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      description: 'A modern e-commerce mobile application built with React Native, featuring real-time inventory management and secure payment processing.',
      image: '/api/placeholder/600/400',
      category: 'Mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      description: 'A comprehensive dashboard for managing business operations with real-time analytics and user management.',
      image: '/api/placeholder/600/400',
      category: 'Web',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Learning Management System',
      description: 'A full-stack educational platform with video streaming, progress tracking, and interactive quizzes.',
      image: '/api/placeholder/600/400',
      category: 'Full-Stack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness app with workout tracking, nutrition logging, and social features.',
      image: '/api/placeholder/600/400',
      category: 'Mobile',
      technologies: ['Flutter', 'Firebase', 'Google Fit API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'A modern real estate platform with property listings, virtual tours, and agent management.',
      image: '/api/placeholder/600/400',
      category: 'Web',
      technologies: ['Vue.js', 'Express.js', 'MySQL', 'AWS S3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Banking Application',
      description: 'A secure banking application with transaction management, bill payments, and financial analytics.',
      image: '/api/placeholder/600/400',
      category: 'Full-Stack',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            in modern web and mobile development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-800">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                      {project.category === 'Mobile' ? (
                        <Smartphone className="w-16 h-16 text-slate-400" />
                      ) : project.category === 'Web' ? (
                        <Globe className="w-16 h-16 text-slate-400" />
                      ) : (
                        <Code className="w-16 h-16 text-slate-400" />
                      )}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white text-slate-900 hover:bg-white/90"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white text-white hover:bg-white hover:text-slate-900"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="success">Featured</Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    {/* Project Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-3"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
