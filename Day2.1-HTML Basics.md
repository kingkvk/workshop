***

## HTML Basics with Interactive Code Examples

### HTML Document Structure
The foundation of any webpage starts with a simple HTML document structure.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Basic HTML Structure</title>
</head>
<body>
  <!-- Content goes here -->
</body>
</html>
```

### Headings
Use heading tags `<h1>` to `<h6>` to define the importance and hierarchy of headings.

```html
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
```

### Paragraphs and Line Breaks
Paragraphs are defined using `<p>`. Use `<br>` for line breaks within text.

```html
<p>This is a paragraph.</p>
<p>This paragraph has a line break<br>right here.</p>
```

### Links
Create hyperlinks using the `<a>` tag with the `href` attribute.

```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```

### Images
Embed images using the `<img>` tag with `src` and `alt` attributes.

```html
<img src="https://via.placeholder.com/150" alt="Placeholder Image" />
```

### Lists
Ordered and unordered lists use `<ol>` and `<ul>`, respectively, with list items inside `<li>`.

```html
<ul>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Bananas</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
```

### Forms and Inputs
Create forms for user input with `<form>`, `<input>`, `<label>`, and other form elements.

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />
  
  <input type="submit" value="Submit" />
</form>
```

### Semantic Tags
Use semantic HTML5 tags to structure content meaningfully.

```html
<header>
  <h1>Site Header</h1>
</header>

<nav>
  <a href="#home">Home</a> |
  <a href="#about">About</a>
</nav>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content...</p>
  </article>
</main>

<footer>
  <p>Copyright © 2025</p>
</footer>
```

### Multimedia
Embed audio and video with controls.

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Comments
Add comments inside HTML code for notes or documentation.

```html
<!-- This is a comment -->
```

### Special Text Tags
- `<strong>` for important text (bold)
- `<em>` for emphasized text (italic)
- `<span>` for inline grouping
- `<div>` for block-level grouping

```html
<p>This is <strong>important</strong> and <em>emphasized</em> text.</p>
<span>This is inline span text.</span>
<div>This is a block level div.</div>
```

***
