## 1: Open Tailwind Play

1) Open https://play.tailwindcss.com  
2) Use the default playground (or click “New playground”).  
3) Work only in the HTML editor on the left; the result appears in the preview on the right.

***

## 2: Text, Colors, and Font Weight

Paste this HTML:

```html
<div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div>
    <h1 class="text-3xl font-bold text-blue-600 mb-2">
      Tailwind Play Practice
    </h1>
    <p class="text-gray-700">
      Change these classes to explore Tailwind typography and colors.
    </p>
  </div>
</div>
```

Explore these utilities by replacing values in the code:

- Text size: `text-sm`, `text-base`, `text-xl`, `text-3xl`  
- Text color: `text-gray-700`, `text-red-500`, `text-green-500`, `text-blue-600`  
- Font weight: `font-light`, `font-normal`, `font-medium`, `font-bold`

***

## 3: Spacing – Margin and Padding

Replace the inner HTML with:

```html
<div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white">
    <h2 class="text-2xl font-bold">
      Spacing Example
    </h2>
    <p class="text-gray-700">
      Adjust margin and padding to see how spacing works.
    </p>
  </div>
</div>
```

Enhance spacing by adding these classes:

- Container padding:  
  - `class="bg-white p-4"`  
  - `class="bg-white p-8"`  
- Margin below heading:  
  - `class="text-2xl font-bold mb-2"`  
- Button with padding:

```html
<button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
  Spaced Button
</button>
```

Useful spacing utilities:

- Margin: `m-4`, `mt-4`, `mb-4`, `mx-4`, `my-4`  
- Padding: `p-4`, `px-4`, `py-2`, `pt-2`, `pb-2`

***

## 4: Buttons – Colors, Radius, Hover

Use this HTML:

```html
<div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white p-6 rounded shadow">
    <h2 class="text-2xl font-bold mb-4">
      Buttons Practice
    </h2>

    <button class="bg-blue-500 text-white px-4 py-2 rounded">
      Primary Button
    </button>
  </div>
</div>
```

Improve the button step by step:

- Hover state: `hover:bg-blue-600`  
- Shadow: `shadow` or `shadow-md`  
- Rounded variations: `rounded`, `rounded-lg`, `rounded-full`  

Example with multiple utilities:

```html
<button
  class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
>
  Primary Button
</button>
```

Outline button variant:

```html
<button
  class="ml-2 border border-blue-500 text-blue-500 px-4 py-2 rounded"
>
  Outline Button
</button>
```

***

## 5: Flexbox Layout

Use this layout:

```html
<div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white p-6 rounded shadow max-w-xl w-full">
    <h2 class="text-2xl font-bold mb-4">
      Flexbox Practice
    </h2>

    <div class="flex bg-gray-50 p-4">
      <div class="bg-blue-200 p-2">Box 1</div>
      <div class="bg-green-200 p-2">Box 2</div>
      <div class="bg-red-200 p-2">Box 3</div>
    </div>
  </div>
</div>
```

Key flex utilities:

- `flex` – turn container into flexbox  
- `flex-col` – vertical layout  
- `flex-row` – horizontal layout (default)  
- `items-center` – vertical alignment  
- `justify-between`, `justify-around`, `justify-center` – horizontal distribution  
- `gap-4` – spacing between children

Examples:

- Add gaps: `class="flex bg-gray-50 p-4 gap-4"`  
- Column layout: `class="flex flex-col bg-gray-50 p-4 gap-2"`

***

## 6: Grid Layout

Use this HTML:

```html
<div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white p-6 rounded shadow max-w-3xl w-full">
    <h2 class="text-2xl font-bold mb-4">
      Grid Practice
    </h2>

    <div class="grid gap-4">
      <div class="bg-blue-100 p-4">Card 1</div>
      <div class="bg-green-100 p-4">Card 2</div>
      <div class="bg-yellow-100 p-4">Card 3</div>
      <div class="bg-red-100 p-4">Card 4</div>
    </div>
  </div>
</div>
```

Core grid utilities:

- `grid` – turn container into CSS grid  
- `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4` – number of columns  
- `gap-4` – gap between grid items

Responsive grid example:

```html
<div class="grid gap-4 grid-cols-1 md:grid-cols-3">
  ...
</div>
```

Mobile-first behavior:

- On small screens: `grid-cols-1`  
- On medium and larger screens: `md:grid-cols-3`

***

## 7: Responsive Design with Breakpoints

Use this HTML:

```html
<div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white p-6 rounded shadow max-w-3xl w-full">
    <h2 class="text-2xl md:text-3xl font-bold mb-4">
      Responsive Practice
    </h2>

    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex-1 bg-blue-100 p-4">
        Left box
      </div>
      <div class="flex-1 bg-green-100 p-4">
        Right box
      </div>
    </div>

    <p class="text-sm md:text-base lg:text-lg text-gray-700 mt-4">
      This text grows on larger screens using responsive classes.
    </p>
  </div>
</div>
```

Important breakpoint prefixes:

- `sm:` – small screens and up  
- `md:` – medium screens and up  
- `lg:` – large screens and up  
- `xl:` – extra‑large screens and up  

Examples:

- `text-sm md:text-base lg:text-lg` – increases text size as screen gets bigger  
- `flex-col md:flex-row` – stacked on mobile, side‑by‑side on desktop  
- `w-full md:w-1/2` – full width on mobile, half width on larger screens

Use the width slider in Tailwind Play to see these changes in real time.

***

## 8: Hero Section Mini‑Project

Combine utilities into a simple hero section:

```html
<div class="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
  <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
    <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
      Welcome to My Tailwind Page
    </h1>
    <p class="text-gray-600 mb-6">
      This hero section is built entirely with Tailwind utility classes in Tailwind Play.
    </p>
    <div class="flex flex-col sm:flex-row gap-3 justify-center">
      <button class="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
        Get Started
      </button>
      <button class="w-full sm:w-auto border border-blue-500 text-blue-500 px-6 py-2 rounded-full">
        Learn More
      </button>
    </div>
  </div>
</div>
```

Key utilities used here:

- Backgrounds and effects: `bg-gradient-to-r`, `from-blue-500`, `to-purple-600`, `bg-white/90`, `backdrop-blur-sm`  
- Layout: `min-h-screen`, `flex`, `items-center`, `justify-center`, `max-w-lg`, `w-full`  
- Typography: `text-3xl md:text-4xl`, `font-bold`, `text-gray-800`, `text-gray-600`  
- Buttons: `bg-blue-500`, `hover:bg-blue-600`, `border`, `rounded-full`, `px-6`, `py-2`, `w-full sm:w-auto`

