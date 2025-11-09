'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, BookOpen, ArrowRight, Code, Users, Award, Target, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const Services = () => {
  const developmentServices = [
    {
      icon: Smartphone,
      title: 'تطبيقات الجوال',
      description: 'تطبيقات iOS و Android أصلية بأحدث التقنيات',
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      projects: '25+ مشروع'
    },
    {
      icon: Globe,
      title: 'المواقع الإلكترونية',
      description: 'مواقع ويب حديثة ومتجاوبة مع تجارب مستخدم استثنائية',
      tech: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      projects: '30+ مشروع'
    }
  ];

  const educationServices = [
    {
      icon: BookOpen,
      title: 'دورات البرمجة',
      description: 'دورات شاملة من المبتدئ إلى المحترف',
      features: ['جلسات مباشرة', 'مشاريع عملية', 'إرشاد شخصي'],
      students: '150+ طالب'
    },
    {
      icon: Users,
      title: 'التدريب الجماعي',
      description: 'ورش عمل وتدريب للفرق والشركات',
      features: ['ورش مخصصة', 'تدريب على المشروع', 'شهادات معتمدة'],
      students: '50+ فريق'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-black w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            خدماتنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نقدم حلولاً شاملة لتحويل أفكارك الرقمية إلى واقع، 
            من التطوير إلى التعليم.
          </p>
        </motion.div>

        {/* Split Layout - Development & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto w-full">
          
          {/* Left Side - Development Services */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             {/* Development Header */}
             <div className="text-center mb-8">
               <h3 className="text-3xl font-bold text-white mb-2">خدمات التطوير</h3>
               <p className="text-gray-300">Mobile & Web Solutions</p>
             </div>

            {/* Development Services */}
            <div className="space-y-6">
              {developmentServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`${
                    index === 0 
                      ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:bg-gradient-to-br hover:from-white/8 hover:to-white/15 hover:border-white/15 transition-all duration-300 group'
                      : index === 1
                      ? 'bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group'
                      : index === 2
                      ? 'bg-white/3 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:20px_20px] rounded-xl p-6 border border-white/5 hover:bg-white/6 hover:border-white/10 transition-all duration-300 group'
                      : 'bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-black/60 hover:border-white/15 transition-all duration-300 group'
                  }`}
                >
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/5 text-white rounded-full text-sm font-medium border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{service.projects}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 text-white hover:bg-white hover:text-black"
                        >
                          اعرف المزيد
                          <ArrowRight className="w-4 h-4 mr-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Education Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             {/* Education Header */}
             <div className="text-center mb-8">
               <h3 className="text-3xl font-bold text-white mb-2">الدورات التعليمية</h3>
               <p className="text-gray-300">Tech Courses</p>
             </div>

            {/* Education Services */}
            <div className="space-y-6">
              {educationServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`${
                    index === 0 
                      ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:bg-gradient-to-br hover:from-white/8 hover:to-white/15 hover:border-white/15 transition-all duration-300 group'
                      : index === 1
                      ? 'bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group'
                      : index === 2
                      ? 'bg-white/3 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:20px_20px] rounded-xl p-6 border border-white/5 hover:bg-white/6 hover:border-white/10 transition-all duration-300 group'
                      : 'bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-black/60 hover:border-white/15 transition-all duration-300 group'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-white" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{service.students}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 text-white hover:bg-white hover:text-black"
                        >
                          اعرف المزيد
                          <ArrowRight className="w-4 h-4 mr-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              مستعد لبدء مشروعك؟
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              دعنا نناقش متطلباتك ونخلق شيئاً مذهلاً معاً.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/962792803658"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-lg font-semibold text-lg transition-colors duration-300 h-14"
              >
                تواصل معنا
              </a>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black h-14"
              >
                شاهد أعمالنا
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
