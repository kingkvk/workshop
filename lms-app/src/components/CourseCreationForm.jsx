// src/components/CourseCreationForm.jsx
import React, { useState } from "react";
import { useCourses } from "../context/CourseContext";

const initialFormData = {
  title: "",
  description: "",
  duration: "",
  level: "Beginner",
};

const BASE_INPUT_CLASS =
  "w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-700 " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

function CourseCreationForm({ onCourseAdded }) {
  const [formData, setFormData] = useState(initialFormData);
  const { addCourse } = useCourses();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // This must use the same keys as initialFormData
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(formData);
    setFormData(initialFormData);
    if (onCourseAdded) onCourseAdded();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
      <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">
        New Course Details
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Course Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className={BASE_INPUT_CLASS}
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className={BASE_INPUT_CLASS + " resize-y"}
          />
        </div>

        {/* Duration & Level */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Duration (e.g., 8 hours)
            </label>
            <input
              id="duration"
              name="duration"
              type="text"
              value={formData.duration}
              onChange={handleChange}
              className={BASE_INPUT_CLASS}
            />
          </div>

          <div>
            <label
              htmlFor="level"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Level
            </label>
            <select
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              className={BASE_INPUT_CLASS}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="self-start bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded"
        >
          Create Course
        </button>
      </form>
    </div>
  );
}

export default CourseCreationForm;
