'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'سارة أحمد',
      role: 'الرئيس التنفيذي',
      company: 'تيك ستارت',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'كوداك حولت فكرة تطبيقنا المحمول إلى واقع مذهل. انتباههم للتفاصيل وخبرتهم التقنية تجاوزت توقعاتنا. التطبيق تم تحميله أكثر من 100 ألف مرة!',
    },
    {
      id: 2,
      name: 'محمد علي',
      role: 'المؤسس',
      company: 'حلول التعليم التقني',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'المنصة الإلكترونية التي بنوها لنا مذهلة تماماً. سريعة وآمنة وسهلة الاستخدام. تفاعل المستخدمين زاد بنسبة 300% منذ الإطلاق. أنصح بها بشدة!',
    },
    {
      id: 3,
      name: 'فاطمة محمد',
      role: 'مدير المنتج',
      company: 'كورب التقنية الصحية',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'العمل مع كوداك كان نقطة تحول لشركتنا. فريق التطوير محترف ومتجاوب ويقدم نتائج استثنائية. المشروع تم إنجازه قبل الموعد المحدد.',
    },
    {
      id: 4,
      name: 'أحمد حسن',
      role: 'مدير التقنية',
      company: 'ابتكارات التقنية المالية',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'الأمان والأداء لتطبيق البنك الذي طوروه متميز. عملاؤنا يحبون تجربة المستخدم، ولم نواجه أي حوادث أمنية.',
    },
    {
      id: 5,
      name: 'نور الدين',
      role: 'مدير التسويق',
      company: 'ريتيل ماكس',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'حل التجارة الإلكترونية من كوداك ساعدنا في زيادة مبيعاتنا الإلكترونية بنسبة 250%. المنصة قوية وقابلة للتوسع وتوفر تحليلات مذهلة. معجب حقاً!',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ما يقوله <span className="text-white">عملاؤنا</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا الراضون عن العمل معنا.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-black border border-white/10">
            <CardContent className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Quote Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <Quote className="w-5 h-5 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6 gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 max-w-3xl mx-auto">
                    &ldquo;{currentTestimonial.text}&rdquo;
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black font-bold text-xl">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-center md:text-left">
                      <div className="font-bold text-white text-lg">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-gray-300">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group"
                >
                  <ChevronLeft className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-white scale-125'
                          : 'bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group"
                >
                  <ChevronRight className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
