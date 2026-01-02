import {Link} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import About from './components/About';
import ContactForm from './components/ContactForm';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

// Dummy Data for the Course Cards
const courses = [
  { id: 1, title: 'HTML & CSS Basics', description: 'Learn the building blocks of the web: structure and styling.', level: 'Beginner', duration: '6 hours' },
  { id: 2, title: 'JavaScript Fundamentals', description: 'Make your web pages interactive with core JavaScript concepts.', level: 'Beginner', duration: '8 hours' },
  { id: 3, title: 'React for Beginners', description: 'Build modern single-page applications using React.', level: 'Intermediate', duration: '10 hours' },
  { id: 4, title: 'Node & Express API', description: 'Create backend APIs and connect them to your frontend apps.', level: 'Intermediate', duration: '9 hours' },
];


function App() {
  return (
    // Structure fix: This wrapper is now full-width due to index.css changes
    <div className="bg-slate-100 text-slate-800 min-h-screen flex flex-col">
      <Header />
      <Hero />

      {/* Main content area */}
      <main className="px-4 py-8 grow w-full"> 
        
        {/* All main content is centered and width-limited inside this div for readability */}
        <div className="max-w-5xl mx-auto"> 

          {/* Courses Section */}
          <section id="courses" className="mb-10">
            <h2 className="text-2xl font-semibold mb-1">Available Courses</h2>
            <p className="text-sm text-slate-600 mb-4">
              Pick a course to start learning today.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>

          <About />
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;