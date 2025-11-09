'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Facebook, 
  Linkedin, 
  ArrowRight,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'تطوير التطبيقات المحمولة', href: '#' },
      { name: 'تطوير المواقع الإلكترونية', href: '#' },
      { name: 'تصميم واجهات المستخدم', href: '#' },
      { name: 'الاستشارات التقنية', href: '#' },
    ],
    courses: [
      { name: 'تطوير React', href: '#' },
      { name: 'تطوير التطبيقات المحمولة', href: '#' },
      { name: 'تطوير المواقع الإلكترونية', href: '#' },
      { name: 'علوم البيانات', href: '#' },
    ],
    company: [
      { name: 'من نحن', href: '#' },
      { name: 'فريقنا', href: '#' },
      { name: 'الوظائف', href: '#' },
      { name: 'المدونة', href: '#' },
    ],
    support: [
      { name: 'اتصل بنا', href: '#' },
      { name: 'مركز المساعدة', href: '#' },
      { name: 'سياسة الخصوصية', href: '#' },
      { name: 'شروط الخدمة', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/962792803658' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-black text-white w-full overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold">كوداك إربد</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-sm">
              نحن فريق من المطورين والمعلمين المتحمسين المكرسين لإنشاء 
              تجارب رقمية استثنائية ومشاركة المعرفة مع العالم.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {/* <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="text-sm">hello@cocak.dev</span>
              </div> */}
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="text-sm">+962 792 803 658</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span className="text-sm">إربد، الأردن</span>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/10 hover:bg-white hover:text-black rounded-md flex items-center justify-center transition-all duration-300 group hover:scale-105"
                    >
                      <social.icon className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">الخدمات</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                    onClick={e => e.preventDefault()}
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">الدورات</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
