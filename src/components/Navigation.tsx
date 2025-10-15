'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code, BookOpen, Users, Mail, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'الخدمات', href: '#services' },
    // { name: 'المشاريع', href: '#projects' },
    { name: 'الدورات', href: '#courses' },
    { name: 'من نحن', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#hero');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className="flex items-center space-x-3">
             
            <img 
                src="/images/codak-irbid-logo.png" 
                alt="CODAK IRBID Logo" 
                className="w-15 h-15 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  CODAK
                </span>
                <span className="text-xs text-gray-300 -mt-1">
                  IRBID
                </span>
              </div>

            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wide cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Icon Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/962792803658"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-gray-300" /> : <Menu className="w-6 h-6 text-gray-300" />}
          </button>
        </div>

        {/* Professional Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wide py-2 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-800/50">
                <button
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={() => {
                    const element = document.querySelector('#courses');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                  title="استكشف الدورات"
                >
                  <BookOpen className="w-5 h-5 text-gray-300 hover:text-white" />
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                  title="اتصل بنا"
                >
                  <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
                </button>
                <a
                  href="https://wa.me/962792803658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  title="WhatsApp"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  title="Facebook"
                  onClick={() => setIsOpen(false)}
                >
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  title="LinkedIn"
                  onClick={() => setIsOpen(false)}
                >
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
