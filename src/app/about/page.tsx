import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Users, Target, Award, Heart, Code, BookOpen, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      image: '/api/placeholder/200/200',
      description: 'Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies.',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      image: '/api/placeholder/200/200',
      description: 'Creative designer passionate about creating intuitive and beautiful user experiences.',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
    },
    {
      name: 'Mike Rodriguez',
      role: 'Mobile Developer',
      image: '/api/placeholder/200/200',
      description: 'Mobile app specialist with expertise in React Native and native iOS/Android development.',
      skills: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
    },
    {
      name: 'Emily Davis',
      role: 'Tech Educator',
      image: '/api/placeholder/200/200',
      description: 'Experienced instructor who loves teaching programming and helping students succeed.',
      skills: ['JavaScript', 'Python', 'Mentoring', 'Curriculum Design'],
    },
  ];

  const values = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'We stay up-to-date with the latest technologies and best practices to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to understand their vision and bring it to life.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'We are passionate about learning and sharing knowledge through our educational programs.',
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We are committed to helping you achieve your business goals.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-400">COCAK</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We&apos;re a passionate team of developers and educators dedicated to 
              creating exceptional digital experiences and sharing knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    Founded in 2020, COCAK started as a small team of passionate developers 
                    who wanted to make a difference in the tech industry. We noticed a gap 
                    between the demand for skilled developers and the availability of quality 
                    education and services.
                  </p>
                  <p>
                    Today, we&apos;ve grown into a full-service technology company that not only 
                    builds amazing digital products but also educates the next generation of 
                    developers. Our mission is to bridge the gap between ideas and reality, 
                    one project at a time.
                  </p>
                  <p>
                    We believe in the power of technology to transform businesses and lives. 
                    That&apos;s why we&apos;re committed to delivering exceptional results while 
                    maintaining the highest standards of quality and integrity.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-slate-600 dark:text-slate-300">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="text-slate-600 dark:text-slate-300">Students Taught</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99%</div>
                    <div className="text-slate-600 dark:text-slate-300">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-slate-800">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience and passion for technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
