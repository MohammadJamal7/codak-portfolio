import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Clock, Users, Star, Play, BookOpen, Code, Smartphone, Globe, ArrowRight } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: 'Complete React Development',
      description: 'Master React from basics to advanced concepts including hooks, context, and state management.',
      image: '/api/placeholder/400/250',
      duration: '12 weeks',
      level: 'Beginner to Intermediate',
      students: 150,
      rating: 4.9,
      price: '$299',
      originalPrice: '$399',
      instructor: 'Alex Johnson',
      category: 'Web Development',
      technologies: ['React', 'JavaScript', 'JSX', 'Hooks'],
      featured: true,
      icon: Code,
    },
    {
      id: 2,
      title: 'Mobile App Development with React Native',
      description: 'Build cross-platform mobile apps using React Native and modern development practices.',
      image: '/api/placeholder/400/250',
      duration: '10 weeks',
      level: 'Intermediate',
      students: 120,
      rating: 4.8,
      price: '$349',
      originalPrice: '$449',
      instructor: 'Mike Rodriguez',
      category: 'Mobile Development',
      technologies: ['React Native', 'JavaScript', 'iOS', 'Android'],
      featured: true,
      icon: Smartphone,
    },
    {
      id: 3,
      title: 'Full-Stack Web Development',
      description: 'Complete web development course covering frontend, backend, and database technologies.',
      image: '/api/placeholder/400/250',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      students: 200,
      rating: 4.9,
      price: '$499',
      originalPrice: '$699',
      instructor: 'Sarah Chen',
      category: 'Full-Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      featured: false,
      icon: Globe,
    },
    {
      id: 4,
      title: 'JavaScript Fundamentals',
      description: 'Learn JavaScript from the ground up with hands-on projects and real-world examples.',
      image: '/api/placeholder/400/250',
      duration: '8 weeks',
      level: 'Beginner',
      students: 300,
      rating: 4.7,
      price: '$199',
      originalPrice: '$299',
      instructor: 'Emily Davis',
      category: 'Programming',
      technologies: ['JavaScript', 'ES6+', 'DOM', 'Async Programming'],
      featured: false,
      icon: BookOpen,
    },
    {
      id: 5,
      title: 'UI/UX Design for Developers',
      description: 'Learn design principles and tools to create beautiful and functional user interfaces.',
      image: '/api/placeholder/400/250',
      duration: '6 weeks',
      level: 'Beginner',
      students: 80,
      rating: 4.8,
      price: '$249',
      originalPrice: '$349',
      instructor: 'Sarah Chen',
      category: 'Design',
      technologies: ['Figma', 'Adobe XD', 'Design Systems', 'Prototyping'],
      featured: false,
      icon: BookOpen,
    },
    {
      id: 6,
      title: 'Python for Data Science',
      description: 'Learn Python programming and data analysis with pandas, numpy, and machine learning.',
      image: '/api/placeholder/400/250',
      duration: '14 weeks',
      level: 'Intermediate',
      students: 100,
      rating: 4.9,
      price: '$399',
      originalPrice: '$549',
      instructor: 'Alex Johnson',
      category: 'Data Science',
      technologies: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
      featured: false,
      icon: Code,
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Full-Stack', 'Programming', 'Design', 'Data Science'];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tech <span className="text-yellow-400">Courses</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Master the latest technologies with our comprehensive courses. 
              Learn from industry experts and build real-world projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View All Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white shadow-md hover:shadow-lg"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Featured <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Courses</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our most popular courses designed to take you from beginner to professional developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-800 overflow-hidden">
                {/* Course Image */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                    <course.icon className="w-16 h-16 text-slate-400" />
                  </div>
                  
                  {/* Featured Badge */}
                  {course.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="success">Featured</Badge>
                    </div>
                  )}

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white text-slate-900 hover:bg-white/90"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Preview Course
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Course Info */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {course.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                      {course.description}
                    </p>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {course.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        {course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-sm text-slate-500 line-through ml-2">
                          {course.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                    >
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
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
