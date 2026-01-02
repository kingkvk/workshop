function CourseCard({ course }) {
  const { title, description, level, duration } = course;

  return (
    <article className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex flex-col">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-slate-700 mb-2">
        {description}
      </p>
      <p className="text-xs text-slate-500 mb-3">{level} • {duration}</p>
      <button className="mt-auto inline-block bg-white border border-slate-300  text-white text hover:bg-slate-100 text-sm px-3 py-1 rounded">
        View Course
      </button>
    </article>
  );
}

export default CourseCard;