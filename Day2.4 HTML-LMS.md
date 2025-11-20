# Codelab: LMS Course Landing Page with HTML & CSS

## 1. Setup – Project and Files

### 1.1 Create the project folder

1. Create a folder named `lms-landing-page`.  
2. Inside it, create two files:  
   - `index.html`  
   - `styles.css`  

***

## 2. Step 1 – Basic HTML Structure for LMS Page

Goal: Create the main sections of an LMS landing page.

Paste this into `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>MyLMS – Courses</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header and navigation -->
  <header class="site-header">
    <div class="logo">MyLMS</div>
    <nav class="main-nav">
      <a href="#courses">Courses</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#login" class="login-link">Login</a>
    </nav>
  </header>

  <!-- Hero / main banner -->
  <section class="hero">
    <div class="hero-content">
      <h1>Learn Web Development the Smart Way</h1>
      <p>Browse interactive courses, track your progress, and build real projects in our LMS.</p>
      <button class="primary-btn">Browse All Courses</button>
    </div>
  </section>

  <!-- Courses section -->
  <main>
    <section id="courses" class="courses-section">
      <h2>Available Courses</h2>
      <p>Pick a course to start learning today.</p>

      <div class="course-grid">
        <article class="course-card">
          <h3>HTML & CSS Basics</h3>
          <p>Learn the building blocks of the web: structure and styling.</p>
          <p class="course-meta">Beginner • 6 hours</p>
          <button class="secondary-btn">View Course</button>
        </article>

        <article class="course-card">
          <h3>JavaScript Fundamentals</h3>
          <p>Make your web pages interactive with core JavaScript concepts.</p>
          <p class="course-meta">Beginner • 8 hours</p>
          <button class="secondary-btn">View Course</button>
        </article>

        <article class="course-card">
          <h3>React for Beginners</h3>
          <p>Build modern single-page applications using React.</p>
          <p class="course-meta">Intermediate • 10 hours</p>
          <button class="secondary-btn">View Course</button>
        </article>

        <article class="course-card">
          <h3>Node & Express API</h3>
          <p>Create backend APIs and connect them to your frontend apps.</p>
          <p class="course-meta">Intermediate • 9 hours</p>
          <button class="secondary-btn">View Course</button>
        </article>
      </div>
    </section>

    <!-- About section -->
    <section id="about" class="about-section">
      <h2>About MyLMS</h2>
      <p>
        MyLMS is a simple learning management system designed to help students
        learn web development step by step with practical projects.
      </p>
    </section>

    <!-- Contact / simple form -->
    <section id="contact" class="contact-section">
      <h2>Contact Us</h2>
      <p>Have questions about a course? Send us a message.</p>

      <form class="contact-form">
        <label for="studentName">Name:</label>
        <input type="text" id="studentName" name="studentName" required>

        <label for="studentEmail">Email:</label>
        <input type="email" id="studentEmail" name="studentEmail" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" class="primary-btn">Send Message</button>
      </form>
    </section>

    <!-- Login section (just a placeholder) -->
    <section id="login" class="login-section">
      <h2>Student Login</h2>
      <p>Use your LMS account to continue your courses.</p>
      <form class="login-form">
        <label for="loginEmail">Email:</label>
        <input type="email" id="loginEmail" name="loginEmail" required>

        <label for="loginPassword">Password:</label>
        <input type="password" id="loginPassword" name="loginPassword" required>

        <button type="submit" class="primary-btn">Login</button>
      </form>
    </section>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <p>© 2025 MyLMS. All rights reserved.</p>
  </footer>
</body>
</html>
```

Open `index.html` in the browser.  
You will see a plain LMS layout without styling yet.

***

## 3. Step 2 – Global Styles and Page Layout

Goal: Set base font, background color, and basic layout.

Paste this into `styles.css`:

```css
/* Global styles */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f7fb;
  color: #333;
  line-height: 1.6;
}

main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 15px 40px;
}
```

Save and refresh.  
The font and background should change.

***

## 4. Step 3 – Header and Navigation Styling

Goal: Make a top bar with logo and nav links.

Add this to `styles.css` below the previous code:

```css
/* Header and navigation */
.site-header {
  background-color: #1f2933;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
}

.logo {
  font-size: 1.4rem;
  font-weight: bold;
}

.main-nav a {
  color: #d1e5ff;
  text-decoration: none;
  margin-left: 16px;
  font-size: 0.95rem;
}

.main-nav a:hover {
  color: #ffffff;
}

.login-link {
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #3b82f6;
  color: #e5edff;
}

.login-link:hover {
  background-color: #3b82f6;
  color: white;
}
```

Save and refresh.  
You now have a dark header with navigation similar to a modern LMS.

***

## 5. Step 4 – Hero (Landing Banner) Styling

Goal: Make a nice hero section with a title, description, and CTA button.

Add:

```css
/* Hero section */
.hero {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  padding: 60px 15px;
}

.hero-content {
  max-width: 1100px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1rem;
  max-width: 600px;
  margin-bottom: 20px;
}
```

Also add base button styles (used in hero and later):

```css
/* Buttons */
.primary-btn,
.secondary-btn {
  font-size: 0.95rem;
  padding: 10px 18px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.primary-btn {
  background-color: #facc15;
  color: #1f2933;
  font-weight: bold;
}

.primary-btn:hover {
  background-color: #eab308;
}

.secondary-btn {
  background-color: white;
  color: #1f2933;
  border: 1px solid #d1d5db;
}

.secondary-btn:hover {
  background-color: #e5e7eb;
}
```

Save and refresh.  
The top of the page is now a proper LMS landing hero.

***

## 6. Step 5 – Courses Grid Styling

Goal: Show courses in a responsive grid of cards.

Add this to `styles.css`:

```css
/* Courses section */
.courses-section {
  margin-top: 30px;
}

.courses-section h2 {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.courses-section p {
  margin-bottom: 16px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
}

.course-card {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.course-card h3 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.course-card p {
  margin: 4px 0;
}

.course-meta {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 8px;
  margin-bottom: 12px;
}
```

Save and refresh.  
You should now see a grid of white course cards with shadows.

***

## 7. Step 6 – About, Contact, and Login Styling

Goal: Make the lower sections look clean and consistent.

Add:

```css
/* About, Contact, Login sections */
.about-section,
.contact-section,
.login-section {
  margin-top: 40px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
}

.about-section h2,
.contact-section h2,
.login-section h2 {
  margin-top: 0;
  margin-bottom: 10px;
}
```

### Forms styling

Add form styles:

```css
/* Forms */
.contact-form,
.login-form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-form label,
.login-form label {
  font-weight: bold;
  font-size: 0.9rem;
}

.contact-form input,
.login-form input,
.contact-form textarea {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  font: inherit;
}

.contact-form textarea {
  resize: vertical;
}
```

Save and refresh.  
The About, Contact, and Login sections are now styled as cards.

***

## 8. Step 7 – Footer and Small Tweaks

Goal: Finish the page with a simple footer and spacing tweaks.

Add:

```css
/* Footer */
.site-footer {
  background-color: #111827;
  color: #9ca3af;
  text-align: center;
  padding: 12px 10px;
  font-size: 0.85rem;
  margin-top: 30px;
}
```

Optional: Add hover effect to course cards:

```css
.course-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(15, 23, 42, 0.12);
}
```

Save and refresh.  
You now have a complete LMS landing page: hero, course list, about, contact, login, and footer.

***

## Full `styles.css` (Copyable)

```css
/* Global styles */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f7fb;
  color: #333;
  line-height: 1.6;
}

main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 15px 40px;
}

/* Header and navigation */
.site-header {
  background-color: #1f2933;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
}

.logo {
  font-size: 1.4rem;
  font-weight: bold;
}

.main-nav a {
  color: #d1e5ff;
  text-decoration: none;
  margin-left: 16px;
  font-size: 0.95rem;
}

.main-nav a:hover {
  color: #ffffff;
}

.login-link {
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #3b82f6;
  color: #e5edff;
}

.login-link:hover {
  background-color: #3b82f6;
  color: white;
}

/* Hero section */
.hero {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  padding: 60px 15px;
}

.hero-content {
  max-width: 1100px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1rem;
  max-width: 600px;
  margin-bottom: 20px;
}

/* Buttons */
.primary-btn,
.secondary-btn {
  font-size: 0.95rem;
  padding: 10px 18px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.primary-btn {
  background-color: #facc15;
  color: #1f2933;
  font-weight: bold;
}

.primary-btn:hover {
  background-color: #eab308;
}

.secondary-btn {
  background-color: white;
  color: #1f2933;
  border: 1px solid #d1d5db;
}

.secondary-btn:hover {
  background-color: #e5e7eb;
}

/* Courses section */
.courses-section {
  margin-top: 30px;
}

.courses-section h2 {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.courses-section p {
  margin-bottom: 16px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
}

.course-card {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.course-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(15, 23, 42, 0.12);
}

.course-card h3 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.course-card p {
  margin: 4px 0;
}

.course-meta {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 8px;
  margin-bottom: 12px;
}

/* About, Contact, Login sections */
.about-section,
.contact-section,
.login-section {
  margin-top: 40px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
}

.about-section h2,
.contact-section h2,
.login-section h2 {
  margin-top: 0;
  margin-bottom: 10px;
}

/* Forms */
.contact-form,
.login-form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-form label,
.login-form label {
  font-weight: bold;
  font-size: 0.9rem;
}

.contact-form input,
.login-form input,
.contact-form textarea {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  font: inherit;
}

.contact-form textarea {
  resize: vertical;
}

/* Footer */
.site-footer {
  background-color: #111827;
  color: #9ca3af;
  text-align: center;
  padding: 12px 10px;
  font-size: 0.85rem;
  margin-top: 30px;
}
```
