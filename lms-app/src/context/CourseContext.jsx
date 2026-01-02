/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

// Mock initial courses
const initialCourses = [
    { id: 'c1', title: 'React for Beginners', instructor: 'Alice Instructor', duration: '10 hours', status: 'Published', 
      materials: [
          { mid: 1, type: 'video', title: 'Introduction to React Hooks', url: 'https://youtube.com/hook_intro' },
          { mid: 2, type: 'pdf', title: 'Styling with Tailwind Guide', url: '/files/tailwind_guide.pdf' }
      ]
    },
    { id: 'c2', title: 'JavaScript Fundamentals', instructor: 'Alice Instructor', duration: '8 hours', status: 'Draft', materials: [] },
];
const CourseContext = createContext(null);

export const useCourses = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState(initialCourses);

    // Function to simulate adding a new course
    const addCourse = (newCourseData) => {
        const newCourse = {
            ...newCourseData,
            id: 'c' + (courses.length + 1),
            instructor: 'Alice Instructor', // Hardcode instructor for simplicity
            status: 'Draft',
        };
        setCourses(prevCourses => [...prevCourses, newCourse]);
        console.log('Course Added:', newCourse);
    };

    const addMaterial = (courseId, materialData) => {
        setCourses(prevCourses => prevCourses.map(course => {
            if (course.id === courseId) {
                const newMaterial = {
                    ...materialData,
                    mid: Date.now(), // Use timestamp for unique ID
                };
                return {
                    ...course,
                    materials: [...course.materials, newMaterial],
                };
            }
            return course;
        }));
    };

    return (
        <CourseContext.Provider value={{ courses, addCourse , addMaterial }}>
            {children}
        </CourseContext.Provider>
    );
};