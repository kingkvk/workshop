***
## 1. Page & Global Styles

| Concept / Element | Classic CSS (styles.css) | Tailwind CSS Classes (index-tailwind.html) |
| --- | --- | --- |
| Page background & text | `body { background-color: #f5f7fb; color: #333; font-family: Arial; }` | `<body class="bg-slate-100 text-slate-800">` |
| Center main content | `main { max-width: 1100px; margin: 0 auto; padding: 20px 15px 40px; }` | `<main class="max-w-5xl mx-auto px-4 py-8">` |
| Box sizing reset | `* { box-sizing: border-box; }` | Not needed with CDN demo (Tailwind includes sensible defaults); can be added separately if desired. |

***

## 2. Header and Navigation

| Concept / Element | Classic CSS | Tailwind Classes |
| --- | --- | --- |
| Header container | `.site-header { background-color: #1f2933; color: white; display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; }` | `<header class="bg-slate-900 text-white flex items-center justify-between px-6 py-3">` |
| Logo text | `.logo { font-size: 1.4rem; font-weight: bold; }` | `<div class="text-xl font-bold">MyLMS</div>` |
| Nav links base | `.main-nav a { color: #d1e5ff; text-decoration: none; margin-left: 16px; font-size: 0.95rem; }` | `<nav class="flex items-center space-x-4 text-sm"> <a class="text-slate-200 hover:text-white">...</a> </nav>` |
| Nav link hover | `.main-nav a:hover { color: #ffffff; }` | `hover:text-white` on each `<a>` |
| Login link shape | `.login-link { padding: 6px 12px; border-radius: 4px; border: 1px solid #3b82f6; color: #e5edff; }` | `class="ml-2 border border-blue-500 text-blue-300 rounded px-3 py-1"` |
| Login link hover | `.login-link:hover { background-color: #3b82f6; color: white; }` | `hover:bg-blue-500 hover:text-white` |

***

## 3. Hero Section

| Concept / Element | Classic CSS | Tailwind Classes |
| --- | --- | --- |
| Hero background & padding | `.hero { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 60px 15px; }` | `<section class="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12">` |
| Hero inner width & centering | `.hero-content { max-width: 1100px; margin: 0 auto; }` | `<div class="max-w-5xl mx-auto px-4">` |
| Hero heading | `.hero h1 { font-size: 2.2rem; margin-bottom: 10px; }` | `<h1 class="text-3xl md:text-4xl font-bold mb-3">` |
| Hero paragraph | `.hero p { font-size: 1rem; max-width: 600px; margin-bottom: 20px; }` | `<p class="text-sm md:text-base max-w-xl mb-5">` |
| Hero primary button | `.primary-btn { background-color: #facc15; color: #1f2933; font-weight: bold; padding: 10px 18px; border-radius: 4px; border: none; cursor: pointer; }` and `.primary-btn:hover { background-color: #eab308; }` | `<button class="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-5 py-2 rounded">` |

***

## 4. Courses Section & Grid

| Concept / Element | Classic CSS | Tailwind Classes |
| --- | --- | --- |
| Section spacing | `.courses-section { margin-top: 30px; }` | `<section id="courses" class="mb-10">` |
| Section heading | `.courses-section h2 { font-size: 1.6rem; margin-bottom: 8px; }` | `<h2 class="text-2xl font-semibold mb-1">` |
| Intro paragraph | `.courses-section p { margin-bottom: 16px; }` | `<p class="text-sm text-slate-600 mb-4">` |
| Grid layout | `.course-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(230px,1fr)); gap: 16px; }` | `<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">` |
| Course card base | `.course-card { background-color: white; border-radius: 8px; padding: 16px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(...); display: flex; flex-direction: column; justify-content: space-between; }` | `<article class="bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex flex-col">` |
| Course card hover | `.course-card:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(...); }` | Add `transition` + `hover`: `<article class="... transition-transform hover:-translate-y-0.5 hover:shadow-md">` (optional enhancement) |
| Course title | `.course-card h3 { margin-top: 0; margin-bottom: 8px; font-size: 1.1rem; }` | `<h3 class="text-lg font-semibold mb-1">` |
| Course description | `.course-card p { margin: 4px 0; }` | `<p class="text-sm text-slate-700 mb-2">` |
| Meta text | `.course-meta { font-size: 0.85rem; color: #6b7280; margin-top: 8px; margin-bottom: 12px; }` | `<p class="text-xs text-slate-500 mb-3">` |
| “View Course” button | `.secondary-btn { background-color: white; color: #1f2933; border: 1px solid #d1d5db; padding: 10px 18px; border-radius: 4px; }` etc. plus flex trick for bottom alignment | `<button class="mt-auto inline-block bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 text-sm px-3 py-1 rounded">` |

***

## 5. About Section

| Concept / Element | Classic CSS | Tailwind Classes |
| --- | --- | --- |
| Card container | `.about-section { margin-top: 40px; background-color: white; border-radius: 8px; padding: 20px; border: 1px solid #e5e7eb; box-shadow: 0 1px 2px rgba(...); }` | `<section id="about" class="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">` |
| Heading | `.about-section h2 { margin-top: 0; margin-bottom: 10px; }` | `<h2 class="text-xl font-semibold mb-2">` |
| Paragraph | normal paragraph styling | `<p class="text-sm text-slate-700">` |

***

## 6. Contact Section (Form)

| Concept / Element | Classic CSS | Tailwind Classes |
| --- | --- | --- |
| Card container | `.contact-section { margin-top: 40px; background-color: white; border-radius: 8px; padding: 20px; border: 1px solid #e5e7eb; box-shadow: 0 1px 2px rgba(...); }` | `<section id="contact" class="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">` |
| Section heading | `.contact-section h2 { margin-top: 0; margin-bottom: 10px; }` | `<h2 class="text-xl font-semibold mb-1">` |
| Intro text | margin-bottom in CSS | `<p class="text-sm text-slate-700 mb-4">` |
| Form layout | `.contact-form { margin-top: 10px; display: flex; flex-direction: column; gap: 10px; }` | `<form class="flex flex-col gap-3">` |
| Label | `.contact-form label { font-weight: bold; font-size: 0.9rem; }` | `<label class="block text-sm font-medium text-slate-700 mb-1">` |
| Text input | `.contact-form input { padding: 8px; border-radius: 4px; border: 1px solid #d1d5db; font: inherit; }` | `class="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"` |
| Textarea | same base styles + `resize: vertical;` | `class="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"` |
| Submit button | `.primary-btn` styles + self-aligned left | `class="self-start bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded"` |

***

## 7. Login Section (Form)

| Concept / Element | Classic CSS | Tailwind Classes |
| --- | --- | --- |
| Card container | `.login-section { margin-top: 40px; background-color: white; border-radius: 8px; padding: 20px; border: 1px solid #e5e7eb; box-shadow: 0 1px 2px rgba(...); }` | `<section id="login" class="mb-10 bg-white rounded-lg border border-slate-200 shadow-sm p-5">` |
| Heading & text | similar to About/Contact | `<h2 class="text-xl font-semibold mb-1">` + `<p class="text-sm text-slate-700 mb-4">` |
| Form layout | `.login-form { margin-top: 10px; display: flex; flex-direction: column; gap: 10px; max-width: 400px; }` | `<form class="flex flex-col gap-3 max-w-sm">` |
| Labels & inputs | same pattern as contact form | same Tailwind input + label classes |
| Login button | `.primary-btn` styles | `class="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded"` |

***

## 8. Footer

| Concept / Element | Classic CSS | Tailwind Classes |
| --- | --- | --- |
| Footer styling | `.site-footer { background-color: #111827; color: #9ca3af; text-align: center; padding: 12px 10px; font-size: 0.85rem; margin-top: 30px; }` | `<footer class="bg-slate-900 text-slate-300 text-center text-xs py-3">` |

***