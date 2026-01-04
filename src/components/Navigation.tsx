'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code, BookOpen, Users, Mail, Facebook, MessageCircle } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            className="cursor-pointer flex items-center h-full"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#hero');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <img 
              src="/logo.png" 
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
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
              href="https://wa.me/0771488888"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              title="WhatsApp"
            >
              <img src="/whats.png" alt="WhatsApp" className="w-6 h-6 filter brightness-0 invert" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white" />
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
                  href="https://wa.me/0771488888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  title="WhatsApp"
                  onClick={() => setIsOpen(false)}
                >
                  <img src="/whats.png" alt="WhatsApp" className="w-6 h-6 filter brightness-0 invert" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  title="Facebook"
                  onClick={() => setIsOpen(false)}
                >
                  <Facebook className="w-6 h-6 text-gray-300 hover:text-white" />
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
