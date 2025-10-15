'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Code, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "خدمات التطوير",
      subtitle: "Mobile & Web Solutions",
      description: "نطور تطبيقات الجوال والمواقع الإلكترونية الاحترافية بأحدث التقنيات",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      cta: "ابدأ مشروعك",
      icon: Code,
      stats: "50+ مشروع مطور"
    },
    {
      id: 2,
      title: "الدورات التعليمية",
      subtitle: "Tech Courses",
      description: "نقدم دورات تعليمية متخصصة لبناء الجيل القادم من المطورين",
      image: "/images/hero/edu.png",
      cta: "استكشف الدورات",
      icon: BookOpen,
      stats: "200+ طالب متخرج"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Slider Container */}
      <div className="relative w-full h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                  {/* Slide Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-white"
                  >
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-6">
                        {React.createElement(slides[currentSlide].icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-2">
                          {slides[currentSlide].title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300">
                          {slides[currentSlide].subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
                    >
                      {slides[currentSlide].description}
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="mb-8"
                    >
                      <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="text-2xl font-bold text-white mr-3">
                          {slides[currentSlide].stats}
                        </span>
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        className="bg-white text-black hover:bg-gray-100 shadow-xl px-8 py-4 text-lg font-semibold rounded-xl"
                      >
                        {slides[currentSlide].cta}
                        <ArrowRight className="w-5 h-5 mr-2" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
