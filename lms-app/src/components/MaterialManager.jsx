// src/components/MaterialManager.jsx
import React, { useState } from 'react';
import { useCourses } from '../context/CourseContext';

const MaterialManager = ({ course, onBack }) => {
    const { addMaterial } = useCourses();
    const [type, setType] = useState('video');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !url.trim()) {
            setError('All fields are required.');
            return;
        }

        const materialData = { title, url, type };
        addMaterial(course.id, materialData);

        // Reset form and show success
        setTitle('');
        setUrl('');
        setError('');
        alert(`Successfully added ${type} to ${course.title}!`);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-xl font-semibold mb-4 text-slate-700 border-b pb-2">
                Manage Content for: {course.title}
            </h3>
            
            <button onClick={onBack} className="mb-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                ← Back to Dashboard
            </button>

            {/* List Existing Materials */}
            <div className="mb-6 border p-4 rounded bg-slate-50">
                <h4 className="font-semibold mb-2">Current Materials ({course.materials.length})</h4>
                <ul className="list-disc pl-5 text-sm text-slate-700">
                    {course.materials.map(m => (
                        <li key={m.mid} className="mb-1">
                            [{m.type.toUpperCase()}] {m.title}
                        </li>
                    ))}
                    {course.materials.length === 0 && <li className="text-slate-500">No materials added yet.</li>}
                </ul>
            </div>

            {/* Add New Material Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h4 className="font-semibold">Add New Resource</h4>

                {/* Resource Type */}
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">Resource Type</label>
                    <select id="type" value={type} onChange={(e) => { setType(e.target.value); setError(''); }} 
                            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="video">Video URL (e.g., YouTube/Vimeo)</option>
                        <option value="pdf">File/PDF Link</option>
                        <option value="link">External Link/Reading</option>
                    </select>
                </div>

                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => { setTitle(e.target.value); setError(''); }} 
                           className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                {/* URL/Link */}
                <div>
                    <label htmlFor="url" className="block text-sm font-medium text-slate-700 mb-1">URL / Link Address</label>
                    <input type="url" id="url" value={url} onChange={(e) => { setUrl(e.target.value); setError(''); }} 
                           className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <button type="submit" className="self-start bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded">
                    Add {type.toUpperCase()} Resource
                </button>
            </form>
        </div>
    );
}

export default MaterialManager;