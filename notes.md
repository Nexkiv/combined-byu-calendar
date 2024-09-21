# Class Notes
This file can be used on the midterm and final

<details>
<summary><h2>Git and GitHub</h2></summary>

---

Today (2024-09-14) I learned about some basic Git command and about GitHub.

### Git
- clone
Clones a working repository using an HTTPS link
- add
Preps file changes to be commited
- commit
Preps all added file changes with a comment
- push
Pushes all commited file changes to the online repository
- fetch
Gets the latest information about the changes on GitHub
- status
Displays the differences between the clone and the repo
- pull
Pulls current main repo with all its changes

### GitHub
An online location to host repositories to be able to access them in one place and to access other people's repositories.
</details>

<details>
<summary><h2>Amazon Web Services - EC2</h2></summary>

---

You can ssh into your server using the format:
```sh
➜  ssh -i [key pair file] ubuntu@[ip address]
```

The public ip address for my server is currently: 35.170.208.120
</details>

<details>
<summary><h1>HTML</h1></summary>

<details>
<summary><h2>HTML Structure</h2></summary>

---

### Purpose of HTML
HTML serves two main purposes:
1. Provide structure
2. Provide content

### Common HTML Structural Elements
There are several common structural elements, including:

- body, header, footer, main
- section ~ Used to compartmentalize sections
- aside ~ A different way to compartmentalize a section
- p (paragraph) ~ Used for unanchored text
- table ~ Used for building a table
- ol/ul (ordered/unordered lists) ~ The two ways to make lists
- div ~ Yet another way to compartmentalize a section that doen't span the length of the screen
- span ~ A section that spans the length of the screen

### Document Structure
These elements are typically used to structure an HTML document:

- The **body** is the top-level content container.
- The body usually has three main children: **header**, **main**, and **footer**.
- Each of these children contains other structural content:
  - The **header** often includes a paragraph with a span and navigation with divisions.
  - The **main** section typically contains multiple sections with lists or tables, and may include an aside for content that doesn't fit the main flow.
  - The **footer** usually has a content division, often with a span.

### Importance of Proper Structure
Using the correct structural elements is crucial for:
1. Logical organization for programmers
2. Proper interpretation by automated tools like search indexing crawlers
3. Accessibility for screen readers

### Block vs. Inline Elements
There is a distinction between block and inline elements:

- **Block elements** create distinct blocks in the content flow (e.g., div, p).
- **Inline elements** fit within the content flow of block elements without disrupting it (e.g., b, span).

#### My CodePen file
[html:structure](https://codepen.io/Nexkiv/pen/JjgPZBr)

</details>

<details>
<summary><h2>HTML Input</h2></summary>

---

This section discussed HTML input elements and their importance in web forms.

### Purpose of Input Elements
Input elements are useful for creating interactive web applications, allowing users to provide data that can be processed and stored.

### Common Input Elements
The document lists several input elements, including:

text, password, email, number, tel, url, date, datetime-local, month, week, time, color, file, checkbox, radio, range, reset, submit, etc...

### Input Attributes
Important attributes for input elements are discussed:

- **name**: Identifies the input when submitting to a server
- **value**: Specifies the current value of the input
- **required**: Indicates if the input must have a value
- **placeholder**: Provides an example of what to enter
- **autocomplete**: Suggests previous values as the user types
- **autofocus**: Automatically focuses the input on page load
- **spellcheck**: Enables spell checking for text

### Form Element
Input elements are typically wrapped in a **form** element, which:

1. Groups related inputs
2. Enables collective submission of input values

### Label Element
The importance of the **label** element is highlighted as:

- Associating text with an input element
- Increasing usability by expanding the clickable area
- Improving accessibility for screen readers

### Output Element
The **output** element is introduced as a way to represent the result of a calculation or user action within a form.

#### My CodePen file
[html:input](https://codepen.io/Nexkiv/pen/PoMYaMr)

</details>

<details>
<summary><h2>HTML Media</h2></summary>

---

This section discussed HTML media elements and their usage in web development.

### HTML Media Elements
Five main media elements were covered:
- img
- audio
- video
- svg
- canvas

### External Media
There are two ways to reference external media using URLs:

- Full paths include protocol, domain name, and file path
- Relative paths are preferred for easier code portability

#### Image Element
The `img` element is used to include images:
- Requires a `src` attribute with the image URL
- Should include an `alt` attribute for accessibility

#### Audio Element
The `audio` element is used for including audio files:
- Requires a `src` attribute with the audio file URL
- Optional attributes include `controls`, `autoplay`, and `loop`
- Autoplay is discouraged without user opt-in

#### Video Element
The `video` element is used for including videos:
- Requires a `src` attribute with the video file URL
- Can include `controls` and `autoplay` attributes
- May need `crossorigin="anonymous"` for files from different domains

### Internal Media
The section discussed two elements for creating images within HTML:

#### SVG (Scalable Vector Graphics)
- Allows inline creation of graphics in HTML
- Can be combined with JavaScript and CSS for complex visualizations

#### Canvas
- Introduced for 2D drawing and animation
- Requires JavaScript for actual drawing on the canvas

### My CodePen file
[html:media](https://codepen.io/Nexkiv/pen/OJKLwVL)

</details>

</details>
