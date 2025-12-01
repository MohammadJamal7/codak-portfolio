'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Clock, Smartphone, ArrowRight, DollarSign, Code, Award, User } from 'lucide-react';

const Courses = () => {
  const course = {
    title: 'انشاء تطبيقات الهاتف باستخدام فلاتر',
    description: 'تعلم كيفية إنشاء تطبيقات الهاتف المحمول باستخدام Flutter، إطار العمل الشهير من Google.',
    duration: '8 أسابيع',
    level: 'مبتدئ إلى متوسط',
    instructor: 'فريق كودك',
    category: 'تطوير التطبيقات المحمولة',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Material Design'],
    price: '300 دينار أردني',
    originalPrice: '400 دينار أردني',
    icon: Code,
  };

  const schedules = [
    { days: 'الأحد والثلاثاء والخميس', times: ['9:00-10:00', '10:30-11:30', '12:00-1:00'] },
    { days: 'الاثنين والأربعاء', times: ['9:00-10:30', '11:00-12:30', '1:00-2:30'] },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="courses" className="py-20 bg-black w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            الدورات التعليمية
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            دورات متخصصة لبناء الجيل القادم من المطورين
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.div variants={itemVariants}>
            <Card className="border-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/5 hover:border-white/15">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/flutter.png" 
                    alt="Flutter Course" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {course.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="font-semibold text-white">{course.duration}</p>
                    <p className="text-sm text-gray-400">المدة</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="font-semibold text-white">{course.level}</p>
                    <p className="text-sm text-gray-400">المستوى</p>
                  </div>
                  <div className="text-center">
                    <User className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="font-semibold text-white">{course.instructor}</p>
                    <p className="text-sm text-gray-400">المدرب</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-white mx-auto mb-2" />
                    <div className="flex flex-col items-center">
                      <span className="font-semibold text-white">{course.price}</span>
                      <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>
                      <span className="text-xs text-green-400 mt-1">خصم</span>
                    </div>
                    <p className="text-sm text-gray-400">السعر</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-4">التقنيات المستخدمة</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
                  >
                    عرض التفاصيل
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Link>
                  <a
                    href="https://wa.me/962792841721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    سجل الآن
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-4"
          >
            الأوقات المتاحة
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-gray-300"
          >
            اختر الجدول المناسب لك
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {schedules.map((schedule, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 bg-white/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-white">
                    {schedule.days}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedule.times.map((time, timeIndex) => (
                      <div key={timeIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
                        <Clock className="w-5 h-5 text-white" />
                        <span className="font-semibold text-white">{time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;