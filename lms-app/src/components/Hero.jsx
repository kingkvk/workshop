function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-500 text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Learn Web Development the Smart Way
        </h1>
        <p className="text-sm md:text-base max-w-xl mb-5">
          Browse interactive courses, track your progress, and build real projects in our learning management system.
        </p>
        <button className="inline-block bg-yellow-400 hover:bg-yellow-300  text-white text font-semibold px-5 py-2 rounded">
          Browse All Courses
        </button>
      </div>
    </section>
  );
}

export default Hero;