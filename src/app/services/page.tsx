import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Smartphone, Globe, BookOpen, Code, ArrowRight, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Smartphone,
      title: 'تطوير التطبيقات المحمولة',
      description: 'تطبيقات iOS و Android أصلية مبنية بأحدث التقنيات والأدوات المتطورة.',
      features: [
        'تطوير React Native',
        'تطبيقات Flutter',
        'تطبيقات iOS أصلية (Swift)',
        'تطبيقات Android أصلية (Kotlin)',
        'حلول متعددة المنصات',
        'تحسين متاجر التطبيقات',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xcode', 'Android Studio'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'تطوير المواقع والتطبيقات',
      description: 'مواقع ويب وتطبيقات ويب حديثة ومتجاوبة لجميع الأجهزة والمنصات.',
      features: [
        'تصميم ويب متجاوب',
        'حلول التجارة الإلكترونية',
        'تطبيقات ويب تقدمية',
        'تطوير APIs',
        'تصميم قواعد البيانات',
        'تحسين الأداء',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'التعليم التقني',
      description: 'دورات برمجية شاملة وبرامج إرشاد متخصصة لتطوير المهارات التقنية.',
      features: [
        'جلسات برمجة مباشرة',
        'التعلم القائم على المشاريع',
        'إرشاد فردي',
        'شهادات صناعية',
        'إرشاد مهني',
        'تطوير المحفظة المهنية',
      ],
      technologies: ['JavaScript', 'Python', 'React', 'Node.js', 'Data Science', 'AI/ML'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'الاكتشاف والتخطيط',
      description: 'نفهم متطلباتك ونضع خارطة طريق مفصلة للمشروع.',
    },
    {
      step: '02',
      title: 'التصميم والنماذج',
      description: 'يصنع فريقنا الإطارات السلكية والنماذج الأولية لتصور مشروعك.',
    },
    {
      step: '03',
      title: 'التطوير',
      description: 'نبني حلك باستخدام أحدث التقنيات وأفضل الممارسات.',
    },
    {
      step: '04',
      title: 'الاختبار والإطلاق',
      description: 'الاختبار الشامل يضمن الجودة، يليه النشر والإطلاق.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Professional Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">خدماتنا</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              من التطبيقات المحمولة إلى منصات الويب والتعليم التقني، نقدم 
              حلولاً شاملة لتحويل رؤيتك الرقمية إلى واقع.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary-dark hover:to-purple-700 px-8 py-4 text-lg font-semibold"
            >
              احصل على استشارة مجانية
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-800">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                      ما نقدمه
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-600 dark:text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                      التقنيات
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    اعرف المزيد
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">منهجيتنا</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              نتبع منهجية مثبتة لضمان تسليم مشروعك في الوقت المحدد، 
              ضمن الميزانية، ويتجاوز توقعاتك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            مستعد لبدء مشروعك؟
          </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              دعنا نناقش متطلباتك ونخلق شيئاً مذهلاً معاً. 
              احصل على استشارة مجانية وتقدير للمشروع.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary-dark hover:to-purple-700 px-8 py-4 text-lg font-semibold"
            >
              احصل على استشارة مجانية
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-400 text-slate-200 hover:bg-slate-800 hover:border-primary px-8 py-4 text-lg font-semibold"
            >
              شاهد أعمالنا
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
