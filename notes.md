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

<details>
<summary><h2>Midterm Questions</h2></summary>

1. In the following code, what does the link element do?

> "The `<link>` tag defines the relationship between the current document and an external resource.
> The `<link>` tag is most often used to link to external style sheets or to add a favicon to your website.
> The `<link>` element is an empty element, it contains attributes only."
> > https://www.w3schools.com/tags/tag_link.asp

2. In the following code, what does a div tag do?

> The `<div>` tag defines a division or a section in an HTML document.
> The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
> The `<div>` tag is easily styled by using the class or id attribute.
> Any sort of content can be put inside the `<div>` tag! \
> <b>Note</b>: By default, browsers always place a line break before and after the `<div>` element.
> > https://www.w3schools.com/tags/tag_div.asp

3. In the following code, what is the difference between the #title and .grid selector?

> A class name, denoted by a `.`, can be used by multiple HTML elements,
> while an id name, denoted by a `#`, must only be used by one HTML element within the page.
> HTML elements can belong to more than one class.\
> To define multiple classes, separate the class names with a space,
> e.g. `<div class="city main">`. The element will be styled according to all the classes specified.
> 
> HTML `class` attribute
> * The HTML `class` attribute specifies one or more class names for an element
> * Classes are used by CSS and JavaScript to select and access specific elements
> * The `class` attribute can be used on any HTML element
> * The `class` name is case sensitive
> * Different HTML elements can point to the same `class` name
> * JavaScript can access elements with a specific `class` name with the `getElementsByClassName()` method
>
>  HTML `id` attribute
> * The `id` attribute is used to specify a unique `id` for an HTML element
> * The value of the `id` attribute must be unique within the HTML document
> * The `id` attribute is used by CSS and JavaScript to style/select a specific element
> * The value of the id attribute is case sensitive
> * The `id` attribute is also used to create HTML bookmarks
> * JavaScript can access an element with a specific `id` with the `getElementById()` method
> > https://www.w3schools.com/html/html_classes.asp \
> > https://www.w3schools.com/html/html_id.asp

4. In the following code, what is the difference between padding and margin?

Given this HTML and this CSS how will the images be displayed using flex?
What does the following padding CSS do?
What does the following code using arrow syntax function declaration do?
What does the following code using map with an array output?
What does the following code output using getElementByID and addEventListener?
What does the following line of Javascript do using a # selector?
Which of the following are true? (mark all that are true about the DOM)
By default, the HTML span element has a default CSS display property value of: 
How would you use CSS to change all the div elements to have a background color of red?
How would you display an image with a hyperlink in HTML?
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
What will the following code output when executed using a for loop and console.log?
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
How do you declare the document type to be html?
What is valid javascript syntax for if, else, for, while, switch statements?
What is the correct syntax for creating a javascript object?
Is it possible to add new properties to javascript objects?
If you want to include JavaScript on an HTML page, which tag do you use?
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Which of the following correctly describes JSON?
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
Which of the following console command creates a remote shell session?
Which of the following is true when the -la parameter is specified for the ls console command?
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Is a web certificate is necessary to use HTTPS.
Can a DNS A record can point to an IP address or another A record.
Port 443, 80, 22 is reserved for which protocol?
What will the following code using Promises output when executed?

</details>
