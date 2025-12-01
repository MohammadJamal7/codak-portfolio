import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Clock, Users, Star, Play, BookOpen, Code, Smartphone, Globe, ArrowRight, DollarSign, Award, User } from 'lucide-react';

export default function CoursesPage() {
  const course = {
    title: 'انشاء تطبيقات الهاتف باستخدام فلاتر',
    description: 'تعلم كيفية إنشاء تطبيقات الهاتف المحمول باستخدام Flutter، إطار العمل الشهير من Google. ستتعلم أساسيات Dart، تصميم واجهات المستخدم، والتعامل مع البيانات.',
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
    { days: 'الثلاثاء والخميس', times: ['9-10:30', '11-12:30', '1-2:30'] },
    { days: 'الاثنين والأربعاء', times: ['9-10:30', '11-12:30', '1-2:30'] },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              الدورات <span className="text-yellow-400">التعليمية</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              تعلم أحدث التقنيات من خلال دوراتنا الشاملة.
              تعلم من خبراء الصناعة وأنشئ مشاريع حقيقية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#course"
                className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                ابدأ التعلم
              </a>
              <a
                href="https://wa.me/962792841721"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                سجل الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section id="course" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              الدورات <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">التعليمية</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              دورات متخصصة لبناء الجيل القادم من المطورين
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-white dark:bg-slate-800 overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/flutter.png" 
                    alt="Flutter Course" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <CardContent className="p-8">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4">
                    {course.category}
                  </Badge>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-slate-900 dark:text-white">{course.duration}</p>
                    <p className="text-sm text-slate-500">المدة</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-slate-900 dark:text-white">{course.level}</p>
                    <p className="text-sm text-slate-500">المستوى</p>
                  </div>
                  <div className="text-center">
                    <User className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-slate-900 dark:text-white">{course.instructor}</p>
                    <p className="text-sm text-slate-500">المدرب</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="flex flex-col items-center">
                      <span className="font-semibold text-slate-900 dark:text-white">{course.price}</span>
                      <span className="text-sm text-slate-500 line-through">{course.originalPrice}</span>
                      <span className="text-xs text-green-400 mt-1">خصم</span>
                    </div>
                    <p className="text-sm text-slate-500">السعر</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">التقنيات المستخدمة</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://wa.me/962792841721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
                  >
                    سجل الآن
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              جدول <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">المحاضرات</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              اختر الجدول المناسب لك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {schedules.map((schedule, index) => (
              <Card key={index} className="border-0 bg-white dark:bg-slate-800">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">
                    {schedule.days}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedule.times.map((time, timeIndex) => (
                      <div key={timeIndex} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-slate-900 dark:text-white">{time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Courses</span>?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We provide comprehensive learning experiences that prepare you for real-world development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Hands-on Learning
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Build real projects and gain practical experience with industry-standard tools and practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Expert Instructors
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Learn from experienced developers who work in the industry and understand current trends.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Lifetime Access
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Keep access to course materials and updates forever, and join our community of learners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Play className="w-5 h-5 mr-2" />
              Browse All Courses
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
