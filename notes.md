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

<details>
<summary>1. In the following code, what does the link element do?</summary>

> The `<link>` tag defines the relationship between the current document and an external resource.
> The `<link>` tag is most often used to link to external style sheets or to add a favicon to your website.
> The `<link>` element is an empty element, it contains attributes only.
> > https://www.w3schools.com/tags/tag_link.asp

</details>

<details>
<summary>2. In the following code, what does a div tag do?</summary>

> The `<div>` tag defines a division or a section in an HTML document.
> The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
> The `<div>` tag is easily styled by using the class or id attribute.
> Any sort of content can be put inside the `<div>` tag! \
> <b>Note</b>: By default, browsers always place a line break before and after the `<div>` element.
> > https://www.w3schools.com/tags/tag_div.asp

</details>

<details>
<summary>3. In the following code, what is the difference between the #title and .grid selector?</summary>

> A class name, denoted by a `.`, can be used by multiple HTML elements,
> while an id name, denoted by a `#`, must only be used by one HTML element within the page.
> HTML elements can belong to more than one class.\
> To define multiple classes, separate the class names with a space,
> e.g. `<div class="city main">`. The element will be styled according to all the classes specified.
> 
> ****HTML `class` attribute****
> * The HTML `class` attribute specifies one or more class names for an element
> * Classes are used by CSS and JavaScript to select and access specific elements
> * The `class` attribute can be used on any HTML element
> * The `class` name is case sensitive
> * Different HTML elements can point to the same `class` name
> * JavaScript can access elements with a specific `class` name with the `getElementsByClassName()` method
>
> ****HTML `id` attribute****
> * The `id` attribute is used to specify a unique `id` for an HTML element
> * The value of the `id` attribute must be unique within the HTML document
> * The `id` attribute is used by CSS and JavaScript to style/select a specific element
> * The value of the id attribute is case sensitive
> * The `id` attribute is also used to create HTML bookmarks
> * JavaScript can access an element with a specific `id` with the `getElementById()` method
> > https://www.w3schools.com/html/html_classes.asp \
> > https://www.w3schools.com/html/html_id.asp

</details>

<details>
<summary>4. In the following code, what is the difference between padding and margin?</summary>

> ![alt Box Model](public/box_model.png "Box Model")
> 
> ****Padding****: \
> The CSS `padding` properties are used to generate space around an element's content,
> inside of any defined borders.
> With CSS, you have full control over the padding.
> There are properties for setting the `padding` for each side of an element
> (top, right, bottom, and left). \
> `padding: top right bottom left` \
> `padding: top right/left bottom` \
> `padding: top/bottom left/right` \
> `padding: all`
>
> ****Margin****: \
> The CSS `margin` properties are used to create space around elements, outside of any defined borders.
> With CSS, you have full control over the margins.
> There are properties for setting the `margin` for each side of an element
> (top, right, bottom, and left). \
> Follows the same pattern as padding
>
> > https://www.w3schools.com/css/css_padding.asp
> > https://www.w3schools.com/css/css_margin.asp

</details>

<details>
<summary>5. Given this HTML and this CSS how will the images be displayed using flex?</summary>

> The flex container becomes flexible by setting the `display` property to `flex`.\
> The direct child elements of a flex container automatically becomes flexible (flex) items.
> 
> The `flex-direction` property defines in which direction the container wants to stack the flex items. \
> The `column` value stacks the flex items vertically (from top to bottom). \
> The `column-reverse` value stacks the flex items vertically (but from bottom to top). \
> The `row` value stacks the flex items horizontally (from left to right). \
> The `row-reverse` value stacks the flex items horizontally (but from right to left).
> 
> The `flex-wrap` property specifies whether the flex items should wrap or not. \
> The `wrap` value specifies that the flex items will wrap if necessary. \
> The `nowrap` value specifies that the flex items will not wrap (this is default). \
> The `wrap-reverse` value specifies that the flexible items will wrap if necessary, in reverse order.
>
> The `justify-content` property is used to align the flex items. \
> The `center` value aligns the flex items at the center of the container. \
> The `flex-start` value aligns the flex items at the beginning of the container (this is default). \
> The `flex-end` value aligns the flex items at the end of the container. \
> The `space-around` value displays the flex items with space before, between, and after the lines. \
> The `space-between` value displays the flex items with space between the lines.
>
> The `align-items` property is used to align the flex items. \
> The `center` value aligns the flex items in the middle of the container. \
> The `flex-start` value aligns the flex items at the top of the container. \
> The `flex-end` value aligns the flex items at the bottom of the container. \
> The `stretch` value stretches the flex items to fill the container (this is default). \
> The `baseline` value aligns the flex items such as their baselines aligns.
>
> The `align-content` property is used to align the flex lines. \
> The `space-between` value displays the flex lines with equal space between them. \
> The `space-around` value displays the flex lines with space before, between, and after them. \
> The `stretch` value stretches the flex lines to take up the remaining space (this is default). \
> The `center` value displays the flex lines in the middle of the container. \
> The `flex-start` value displays the flex lines at the start of the container. \
> The `flex-end` value displays the flex lines at the end of the container
>
> The `order` property specifies the order of the flex items. \
> The `flex-grow` property specifies how much a flex item will grow relative to the rest of the flex items. \
> The `flex-shrink` property specifies how much a flex item will shrink relative to the rest of the flex items. \
> The `flex-basis` property specifies the initial length of a flex item. \
> The `flex` property is a shorthand property for the `flex-grow`, `flex-shrink`, and `flex-basis` properties.
>
> 
> The `align-self` property specifies the alignment for the selected item inside the flexible container. \
> The `align-self` property overrides the default alignment set by the container's `align-items` property.
>
> | Property | Description |
> |----------|-------------|
> | `align-content` | Modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines |
> | `align-items` | Vertically aligns the flex items when the items do not use all available space on the cross-axis |
> | `display` | Specifies the type of box used for an HTML element |
> | `flex-direction` | Specifies the direction of the flexible items inside a flex container |
> | `flex-flow` | A shorthand property for flex-direction and flex-wrap |
> | `flex-wrap` | Specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line |
> | `justify-content` | Horizontally aligns the flex items when the items do not use all available space on the main-axis |
> | `align-self` | Specifies the alignment for a flex item (overrides the flex container's align-items property) |
> | `flex` | A shorthand property for the flex-grow, flex-shrink, and the flex-basis properties |
> | `flex-basis` | Specifies the initial length of a flex item |
> | `flex-grow` | Specifies how much a flex item will grow relative to the rest of the flex items inside the same container |
> | `flex-shrink` | Specifies how much a flex item will shrink relative to the rest of the flex items inside the same container |
> | `order` | Specifies the order of the flex items inside the same container |
>
> > https://www.w3schools.com/css/css3_flexbox.asp
> > https://www.w3schools.com/css/css3_flexbox_container.asp
> > https://www.w3schools.com/css/css3_flexbox_items.asp
> > https://www.w3schools.com/css/css3_flexbox_responsive.asp

</details>

<details>
<summary>6. What does the following padding CSS do?</summary>

> | Unit | Description |
> |------|-------------|
> | cm | centimeters |
> | mm | millimeters |
> | in | inches (1in = 96px = 2.54cm) |
> | px* | pixels (1px = 1/96th of 1in) |
> | pt | points (1pt = 1/72 of 1in) |
> | pc | picas (1pc = 12 pt) |
> | em | Relative to the font-size of the element (2em means 2 times the size of the current font) |
> | ex | Relative to the x-height of the current font (rarely used)	|
> | ch | Relative to the width of the "0" (zero) |
> | rem | Relative to font-size of the root element	|
> | vw | Relative to 1% of the width of the viewport†	|
> | vh | Relative to 1% of the height of the viewport† |
> | vmin | Relative to 1% of viewport's† smaller dimension |
> | vmax | Relative to 1% of viewport's† larger dimension	|
> | % | Relative to the parent element |
>
> <p>* Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.</p>
> † Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.

> **Tip:** The `em` and `rem` units are practical in creating perfectly scalable layout!
>
> > https://www.w3schools.com/css/css_units.asp

</details>

<details>
<summary>7. What does the following code using arrow syntax function declaration do?</summary>

> If the function has only one statement, and the statement returns a value,
> you can remove the brackets and the `return` keyword.
> If you have parameters, you pass them inside the parentheses.
> In fact, if you have only one parameter, you can skip the parentheses as well.
>
> With a regular function `this` represents the object that calls the function.
> With an arrow function `this` represents the owner of the function

</details>

<details>
<summary>8. What does the following code using map with an array output?</summary>

> You can create a Map by passing an Array to the `new Map()` constructor.
> You can add elements to a Map with the `set()` method.
> The `set()` method can also be used to change existing Map values.
> The `get()` method gets the value of a key in a Map.
> `typeof` returns object.
> `instanceof` Map returns true.
> 
> ```javascript
> // Create a Map
> const fruits = new Map([
> ["apples", 500],
> ["bananas", 300],
> ]);
>
> // Set Map Values
> fruits.set("oranges", 200);
> fruits.set("apples", 200);
>
> fruits.get("apples");    // Returns 500
> ```
>
> > https://www.w3schools.com/js/js_maps.asp

</details>

<details>
<summary>9. What does the following code output using getElementByID and addEventListener?</summary>

> The `getElementById()` method returns an element with a specified value.
> The `getElementById()` method returns `null` if the element does not exist.
> The `getElementById()` method is one of the most common methods in the HTML DOM.
> It is used almost every time you want to read or edit an HTML element. \
> **Note** \
> Any id should be unique, but:
> If two or more elements with the same id exist, `getElementById()` returns the first.
>
> The `addEventListener()` method attaches an event handler to an element.
>
> > https://www.w3schools.com/jsref/met_document_getelementbyid.asp
> > https://www.w3schools.com/jsref/met_element_addeventlistener.asp

</details>

<details>
<summary>10. What does the following line of Javascript do using a # selector?</summary>

<table class="ws-table-all notranslate">
  <tbody><tr>
    <th style="width:20%">Selector</th>
    <th style="width:20%">Example</th>
    <th>Example description</th>
  </tr>
  <tr>
    <td><a href="sel_class.php">.<i>class</i></a></td>
    <td class="notranslate">.intro</td>
    <td>Selects all elements with class="intro"</td>
  </tr>
  <tr>
    <td><em>.class1.class2</em></td>
    <td class="notranslate">.name1.name2</td>
    <td>Selects all elements with both <em>name1</em> and <em>name2</em> set 
    within its class attribute</td>
  </tr>  
  <tr>
    <td><em>.class1 .class2</em></td>
    <td class="notranslate">.name1 .name2</td>
    <td>Selects all elements with <em>name2</em> that is a descendant of an 
    element with <em>name1</em></td>
  </tr>  
  <tr>
    <td><a href="sel_id.php">#<i>id</i></a></td>
    <td class="notranslate">#firstname</td>
    <td>Selects the element with id="firstname"</td>
  </tr>  <tr>
    <td><a href="sel_all.php">*</a></td>
    <td class="notranslate">*</td>
    <td>Selects all elements</td>
  </tr>
  <tr>
    <td><i><a href="sel_element.php">element</a></i></td>
    <td class="notranslate">p</td>
    <td>Selects all &lt;p&gt; elements</td>
  </tr>
  <tr>
    <td><i><a href="sel_element_class.php">element.class</a></i></td>
    <td class="notranslate">p.intro</td>
    <td>Selects all &lt;p&gt; elements with class="intro"</td>
  </tr>
  <tr>
    <td><i><a href="sel_element_comma.php">element,element</a></i></td>
    <td class="notranslate">div, p</td>
    <td>Selects all &lt;div&gt; elements and all &lt;p&gt; elements</td>
  </tr>
  <tr>
    <td><a href="sel_element_element.php"><i>element</i> <i>element</i></a></td>
    <td class="notranslate">div p</td>
    <td>Selects all &lt;p&gt; elements inside &lt;div&gt; elements</td>
  </tr>
  <tr>
    <td><a href="sel_element_gt.php"><i>element</i>&gt;<i>element</i></a></td>
    <td class="notranslate">div &gt; p</td>
    <td>Selects all &lt;p&gt; elements where the parent is a &lt;div&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_element_pluss.php"><i>element</i>+<i>element</i></a></td>
    <td class="notranslate">div + p</td>
    <td>Selects the first &lt;p&gt; element that is placed immediately after &lt;div&gt; elements</td>
  </tr>
  <tr>
    <td><a href="sel_gen_sibling.php"><i>element1</i>~<i>element2</i></a></td>
    <td>p ~ ul</td>
    <td>Selects every &lt;ul&gt; element that is preceded by a &lt;p&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_attribute.php">[<i>attribute</i>]</a></td>
    <td class="notranslate">[target]</td>
    <td>Selects all elements with a target attribute</td>
  </tr>
  <tr>
    <td><a href="sel_attribute_value.php">[<i>attribute</i>=<i>value</i>]</a></td>
    <td class="notranslate">[target="_blank"]</td>
    <td>Selects all elements with target="_blank"</td>
  </tr>
  <tr>
    <td><a href="sel_attribute_value_contains.php">[<i>attribute</i>~=<i>value</i>]</a></td>
    <td class="notranslate">[title~="flower"]</td>
    <td>Selects all elements with a title attribute containing the word "flower"</td>
  </tr>
  <tr>
    <td><a href="sel_attribute_value_lang.php">[<i>attribute</i>|=<i>value</i>]</a></td>
    <td class="notranslate">[lang|="en"]</td>
    <td>Selects all elements with a lang attribute value equal to "en" or 
    starting with "en-"</td>
  </tr>
  <tr>
    <td><a href="sel_attr_begin.php">[<i>attribute</i>^=<i>value</i>]</a></td>
    <td>a[href^="https"]</td>
    <td>Selects every &lt;a&gt; element whose href attribute value begins with "https"</td>
  </tr>
  <tr>
    <td><a href="sel_attr_end.php">[<i>attribute</i>$=<i>value</i>]</a></td>
    <td>a[href$=".pdf"]</td>
    <td>Selects every &lt;a&gt; element whose href attribute value ends with ".pdf"</td>
  </tr>
  <tr>
    <td><a href="sel_attr_contain.php">[<i>attribute</i>*=<i>value</i>]</a></td>
    <td>a[href*="w3schools"]</td>
    <td>Selects every &lt;a&gt; element whose href attribute value contains the substring "w3schools"</td>
  </tr>
</tbody>
</table>

> > https://www.w3schools.com/cssref/css_selectors.php

</details>


<details>
<summary>11. Which of the following are true? (mark all that are true about the DOM)</summary>

> When an HTML document is loaded into a web browser, it becomes a document object.
> The document object is the root node of the HTML document.
> The document object is a property of the window object.
> The document object is accessed with:
> `window.document` or just `document`

<table class="ws-table-all notranslate">
<tbody><tr>
    <th>Property / Method</th>
    <th>Description</th>
</tr>
<tr>
    <td><a href="prop_document_activeelement.asp">activeElement</a></td>
    <td>Returns the currently focused element in the document</td>
</tr>
<tr>
    <td><a href="met_document_addeventlistener.asp">addEventListener()</a></td>
    <td>Attaches an event handler to the document</td>
</tr>
<tr>
  <td><a href="met_document_adoptnode.asp">adoptNode()</a></td>
  <td>Adopts a node from another document</td>
</tr>
<tr>
    <td><a href="coll_doc_anchors.asp">anchors</a></td>
    <td><span class="deprecated"><a href="coll_doc_anchors.asp">Deprecated</a></span></td>
</tr>
<tr>
    <td><a href="coll_doc_applets.asp">applets</a></td>
    <td><span class="deprecated"><a href="coll_doc_applets.asp">Deprecated</a></span></td>
</tr>
<tr>
  <td><a href="prop_doc_baseuri.asp">baseURI</a></td>
  <td>Returns the absolute base URI of a document</td>
</tr>
<tr>
    <td><a href="prop_doc_body.asp">body</a></td>
    <td>Sets or returns the document's body (the &lt;body&gt; element)</td>
</tr>
  <tr>
  <td><a href="prop_document_charset.asp">charset</a></td>
  <td><span class="deprecated"><a href="prop_document_charset.asp">Deprecated</a></span></td>
  </tr>
  <tr>
  <td><a href="prop_document_characterset.asp">characterSet</a></td>
  <td>Returns the character encoding for the document</td>
  </tr>
<tr>
    <td><a href="met_doc_close.asp">close()</a></td>
    <td>Closes the output stream previously opened with document.open()</td>
</tr>
<tr>
    <td><a href="prop_doc_cookie.asp">cookie</a></td>
    <td>Returns all name/value pairs of cookies in the document</td>
</tr>
<tr>
  <td><a href="met_document_createattribute.asp">createAttribute()</a></td>
  <td>Creates an attribute node</td>
</tr>
<tr>
  <td><a href="met_document_createcomment.asp">createComment()</a></td>
  <td>Creates a Comment node with the specified text</td>
</tr>
<tr>
  <td><a href="met_document_createdocumentfragment.asp">createDocumentFragment()</a></td>
  <td>Creates an empty DocumentFragment node</td>
</tr>
<tr>
  <td><a href="met_document_createelement.asp">createElement()</a></td>
  <td>Creates an Element node</td>
</tr>
<tr>
  <td><a href="event_createevent.asp">createEvent()</a></td>
  <td>Creates a new event</td>
</tr>
<tr>
  <td><a href="met_document_createtextnode.asp">createTextNode()</a></td>
  <td>Creates a Text node</td>
</tr>
<tr>
  <td><a href="prop_document_defaultview.asp">defaultView</a></td>
  <td>Returns the window object associated with a document, or null if none is available.</td>
</tr>
<tr>
  <td><a href="prop_document_designmode.asp">designMode</a></td>
  <td>Controls whether the entire document should be editable or not.</td>
</tr>
<tr>
  <td><a href="prop_document_doctype.asp">doctype</a></td>
  <td>Returns the Document Type Declaration associated with the document</td>
</tr>
<tr>
  <td><a href="prop_document_documentelement.asp">documentElement</a></td>
  <td>Returns the Document Element of the document (the &lt;html&gt; element)</td>
</tr>
<tr>
    <td><a href="prop_doc_documentmode.asp">documentMode</a></td>
    <td><span class="deprecated"><a href="prop_doc_documentmode.asp">Deprecated</a></span></td>
</tr>
<tr>
  <td><a href="prop_document_documenturi.asp">documentURI</a></td>
  <td>Sets or returns the location of the document</td>
</tr>
<tr>
    <td><a href="prop_doc_domain.asp">domain</a></td>
    <td>Returns the domain name of the server that loaded the document</td>
</tr>
<tr>
  <td><a href="prop_document_domconfig.asp">domConfig</a></td>
  <td><span class="deprecated"><a href="prop_document_domconfig.asp">Deprecated</a></span></td>
</tr>
<tr>
  <td><a href="coll_doc_embeds.asp">embeds</a></td>
  <td>Returns a collection of all &lt;embed&gt; elements the document</td>
</tr>
<tr>
  <td><a href="met_document_execcommand.asp">execCommand()</a></td>
  <td><span class="deprecated"><a href="met_document_execcommand.asp">Deprecated</a></span></td>
</tr>
<tr>
    <td><a href="coll_doc_forms.asp">forms</a></td>
    <td>Returns a collection of all &lt;form&gt; elements in the document</td>
</tr>
<tr>
  <td><a href="met_document_getelementbyid.asp">getElementById()</a></td>
  <td>Returns the element that has the ID attribute with the specified value</td>
</tr>
<tr>
    <td><a href="met_document_getelementsbyclassname.asp">getElementsByClassName()</a></td>
    <td>Returns an <a href="dom_obj_htmlcollection.asp">HTMLCollection</a> containing all elements with the specified class name</td>
</tr>
<tr>
    <td><a href="met_doc_getelementsbyname.asp">getElementsByName()</a></td>
    <td>Returns an live <a href="dom_obj_html_nodelist.asp">NodeList</a> containing all elements with the specified name</td>
</tr>
<tr>
  <td><a href="met_document_getelementsbytagname.asp">getElementsByTagName()</a></td>
  <td>Returns an <a href="dom_obj_htmlcollection.asp">HTMLCollection</a> containing all elements with the specified tag name</td>
</tr>
<tr>
    <td><a href="met_document_hasfocus.asp">hasFocus()</a></td>
    <td>Returns a Boolean value indicating whether the document has focus</td>
</tr>
<tr>
    <td><a href="prop_doc_head.asp">head</a></td>
    <td>Returns the &lt;head&gt; element of the document</td>
</tr>
<tr>
    <td><a href="coll_doc_images.asp">images</a></td>
    <td>Returns a collection of all &lt;img&gt; elements in the document</td>
</tr>
<tr>
  <td><a href="prop_document_implementation.asp">implementation</a></td>
  <td>Returns the DOMImplementation object that handles this document</td>
</tr>
<tr>
  <td><a href="met_document_importnode.asp">importNode()</a></td>
  <td>Imports a node from another document</td>
</tr>
<tr>
  <td><a href="prop_document_inputencoding.asp">inputEncoding</a></td>
  <td><span class="deprecated"><a href="prop_document_inputencoding.asp">Deprecated</a></span></td>
</tr>
<tr>
    <td><a href="prop_doc_lastmodified.asp">lastModified</a></td>
    <td>Returns the date and time the document was last modified</td>
</tr>
<tr>
    <td><a href="coll_doc_links.asp">links</a></td>
    <td>Returns a collection of all &lt;a&gt; and &lt;area&gt; elements in the document that have a href attribute</td>
</tr>
<tr>
  <td><a href="met_document_normalize.asp">normalize()</a></td>
  <td>Removes empty Text nodes, and joins adjacent nodes</td>
</tr>
<tr>
  <td><a href="met_document_normalizedocument.asp">normalizeDocument()</a></td>
  <td><span class="deprecated"><a href="met_document_normalizedocument.asp">Deprecated</a></span></td>
</tr>
<tr>
    <td><a href="met_doc_open.asp">open()</a></td>
    <td>Opens an HTML output stream to collect output from document.write()</td>
</tr>
<tr>
    <td><a href="met_document_queryselector.asp">querySelector()</a></td>
    <td>Returns the first element that matches a specified CSS selector(s) in the document</td>
</tr>
<tr>
    <td><a href="met_document_queryselectorall.asp">querySelectorAll()</a></td>
    <td>Returns a static <a href="dom_obj_html_nodelist.asp">NodeList</a> containing all elements that matches a specified CSS selector(s) in the document</td>
</tr>
<tr>
    <td><a href="prop_doc_readystate.asp">readyState</a></td>
    <td>Returns the (loading) status of the document</td>
</tr>
<tr>
    <td><a href="prop_doc_referrer.asp">referrer</a></td>
    <td>Returns the URL of the document that loaded the current document</td>
</tr>
<tr>
    <td><a href="met_document_removeeventlistener.asp">removeEventListener()</a></td>
    <td>Removes an event handler from the document (that has been attached with the <a href="met_document_addeventlistener.asp">addEventListener()</a> method)</td>
</tr>
<tr>
  <td><a href="met_document_renamenode.asp">renameNode()</a></td>
  <td><span class="deprecated"><a href="met_document_renamenode.asp">Deprecated</a></span></td>
</tr>
<tr>
    <td><a href="coll_doc_scripts.asp">scripts</a></td>
    <td>Returns a collection of &lt;script&gt; elements in the document</td>
</tr>
<tr>
  <td><a href="prop_document_stricterrorchecking.asp">strictErrorChecking</a></td>
  <td><span class="deprecated"><a href="prop_document_stricterrorchecking.asp">Deprecated</a></span></td>
</tr>
<tr>
    <td><a href="prop_doc_title.asp">title</a></td>
    <td>Sets or returns the title of the document</td>
</tr>
<tr>
    <td><a href="prop_doc_url.asp">URL</a></td>
    <td>Returns the full URL of the HTML document</td>
</tr>
<tr>
    <td><a href="met_doc_write.asp">write()</a></td>
    <td>Writes HTML expressions or JavaScript code to a document</td>
</tr>
<tr>
    <td><a href="met_doc_writeln.asp">writeln()</a></td>
    <td>Same as write(), but adds a newline character after each statement</td>
</tr>
</tbody></table>

> > https://www.w3schools.com/jsref/dom_obj_document.asp
  
</details>

<details>
<summary>12. By default, the HTML span element has a default CSS display property value of:</summary>

> inline

</details>

<details>
<summary>13. How would you use CSS to change all the div elements to have a background color of red?</summary>

> ```css
> div {
>   background-color: red;
> }
> ```
>
> > https://www.w3schools.com/css/css_background.asp

</details>

<details>
<summary>14. How would you display an image with a hyperlink in HTML?</summary>

> ```html
> <img src="url" alt="alternatetext">
> ```
>
> > https://www.w3schools.com/html/html_images.asp

</details>

<details>
<summary>15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?</summary>

> ![alt Box Model](public/box_model.png "Box Model")
>
> content, padding, boarder, margin

</details>

<details>
<summary>16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?</summary>

> ```css
> [some specific identifier] {
>   color: green;
> }
> ```
>
> see question 10

</details>

<details>
<summary>17. What will the following code output when executed using a for loop and console.log?</summary>

> specific to the question

</details>

<details>
<summary>18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?</summary>

> document.getElementById("byu").style.color = "green";
>
> > https://www.w3schools.com/jsref/prop_style_color.asp

</details>

<details>
<summary>19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?</summary>

> ```html
> <p>paragraph</p>
> <ul>unordered list</ul>
> <ol>ordered list</ol>
> <h2>second level heading</h2>
> <h1>first level heading</h1>
> <h3>third level heading</h3>
> ```

</details>

<details>
<summary>20. How do you declare the document type to be html?</summary>

> The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document
> The `<html>` element is the root element of an HTML page
> The `<head>` element contains meta information about the HTML page
> The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
> The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
> The `<h1>` element defines a large heading
> The `<p>` element defines a paragraph
>
> > https://www.w3schools.com/html/html_intro.asp

</details>

<details>
<summary>21. What is valid javascript syntax for if, else, for, while, switch statements?</summary>

> Use `if` to specify a block of code to be executed, if a specified condition is true. \
> Use `else` to specify a block of code to be executed, if the same condition is false. \
> Use `else if` to specify a new condition to test, if the first condition is false.
>  ```javascript
> if (condition) {
>   //  block of code to be executed if the condition is true
> } else if (condition2) {
>   //  block of code to be executed if the condition1 is false and condition2 is true
> } else {
>   //  block of code to be executed if the condition is false
> }
> ```
>
> The `for` statement creates a loop with 3 optional expressions:
> ```javascript
> for (expression 1; expression 2; expression 3) {
>   // code block to be executed
> }
> ```
>
> Expression 1 is executed (one time) before the execution of the code block.
> Expression 2 defines the condition for executing the code block.
> Expression 3 is executed (every time) after the code block has been executed.
>
> The JavaScript `for in` statement loops through the properties of an Object:
> ```javascript
> for (key in object) {
>   // code block to be executed
> }
> ```
>
> The JavaScript `for of` statement loops through the values of an iterable object.
> It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
> ```javascript
> for (variable of iterable) {
>   // code block to be executed
> }
> ```
> variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
> iterable - An object that has iterable properties.
>
> The `while` loop loops through a block of code as long as a specified condition is true.
> ```javascript
> while (condition) {
>   // code block to be executed
> }
> ```
>
> Use the `switch` statement to select one of many code blocks to be executed.
> ```javascript
> switch(expression) {
>   case x:
>     // code block
>     break;
>   case y:
>     // code block
>     break;
>   default:
>     // code block
> }
> ```
> This is how it works:
> * The switch expression is evaluated once.
> * The value of the expression is compared with the values of each case.
> * If there is a match, the associated block of code is executed.
> * If there is no match, the default code block is executed.
>
> > https://www.w3schools.com/js/js_if_else.asp
> > https://www.w3schools.com/js/js_loop_for.asp
> > https://www.w3schools.com/js/js_loop_forin.asp
> > https://www.w3schools.com/js/js_loop_forof.asp
> > https://www.w3schools.com/js/js_switch.asp

</details>

<details>
<summary>22. What is the correct syntax for creating a javascript object?</summary>

> JavaScript Variables \
> JavaScript variables are containers for data values.
> This code assigns a simple value (Fiat) to a variable named car: \
> ```javascript
> let car = "Fiat";
> ```
> JavaScript Objects \
> Objects are variables too. But objects can contain many values. \
> This code assigns many values (Fiat, 500, white) to an object named car: \
> ```javascript
> const car = {type:"Fiat", model:"500", color:"white"};
> ```
>
> > https://www.w3schools.com/js/js_const.asp

</details>

<details>
<summary>23. Is it possible to add new properties to javascript objects?</summary>

> yes
>
> You can add new properties to an existing object by simply giving it a value.
> ```javascript
> const person = {
>   firstName: "John",
>   lastName: "Doe",
>   age: 50,
>   eyeColor: "blue"
> };
>
> person.nationality = "English";
>
> delete person.age;
> ```
>
> > https://www.w3schools.com/js/js_object_property.asp

</details>

<details>
<summary>24. If you want to include JavaScript on an HTML page, which tag do you use?</summary>

> The `<script>` tag is used to embed a client-side script (JavaScript).
> The `<script>` element either contains scripting statements, or it points to an external script file through the src attribute.
> Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.
> 
> ```html
> <script src="myscripts.js"></script>
> ```
>
> > https://www.w3schools.com/TAGS/tag_script.asp

</details>

<details>
<summary>25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?</summary>

<table class="ws-table-all notranslate">
<tbody><tr>
    <th style="width:35%">Property / Method</th>
    <th>Description</th>
</tr>
<tr>
    <td><a href="prop_html_accesskey.asp">accessKey</a></td>
    <td>Sets or returns the accesskey attribute of an element</td>
</tr>
<tr>
    <td><a href="met_element_addeventlistener.asp">addEventListener()</a></td>
    <td>Attaches an event handler to an element</td>
</tr>
<tr>
  <td><a href="met_node_appendchild.asp">appendChild()</a></td>
  <td>Adds (appends) a new child node to an element</td>
</tr>
<tr>
  <td><a href="prop_node_attributes.asp">attributes</a></td>
  <td>Returns a <a href="dom_obj_attributes.asp">NamedNodeMap</a> of an element's attributes</td>
</tr>
<tr>
  <td><a href="met_html_blur.asp">blur()</a></td>
  <td>Removes focus from an element</td>
</tr>
<tr>
  <td><a href="prop_element_childelementcount.asp">childElementCount</a></td>
  <td>Returns an elements's number of child elements</td>
</tr>
<tr>
  <td><a href="prop_node_childnodes.asp">childNodes</a></td>
  <td>Returns a <a href="dom_obj_html_nodelist.asp">NodeList</a> of an element's child nodes</td>
</tr>
<tr>
  <td><a href="prop_element_children.asp">children</a></td>
  <td>Returns an <a href="dom_obj_htmlcollection.asp">HTMLCollection</a> of an element's child elements</td>
</tr>
<tr>
    <td><a href="prop_element_classlist.asp">classList</a></td>
    <td>Returns the class name(s) of an element</td>
</tr>
<tr>
    <td><a href="prop_html_classname.asp">className</a></td>
    <td>Sets or returns the value of the class attribute of an element</td>
</tr>
<tr>
  <td><a href="met_html_click.asp">click()</a></td>
  <td>Simulates a mouse-click on an element</td>
</tr>
<tr>
    <td><a href="prop_element_clientheight.asp">clientHeight</a></td>
    <td>Returns the height of an element, including padding</td>
</tr>
<tr>
    <td><a href="prop_element_clientleft.asp">clientLeft</a></td>
    <td>Returns the width of the left border of an element</td>
</tr>
<tr>
    <td><a href="prop_element_clienttop.asp">clientTop</a></td>
    <td>Returns the width of the top border of an element</td>
</tr>
<tr>
    <td><a href="prop_element_clientwidth.asp">clientWidth</a></td>
    <td>Returns the width of an element, including padding</td>
</tr>
<tr>
  <td><a href="met_node_clonenode.asp">cloneNode()</a></td>
  <td>Clones an element</td>
</tr>
<tr>
  <td><a href="met_element_closest.asp">closest()</a></td>
  <td>Searches the DOM tree for the closest element that matches a CSS selector</td>
</tr>
<tr>
  <td><a href="met_node_comparedocumentposition.asp">compareDocumentPosition()</a></td>
  <td>Compares the document position of two elements</td>
</tr>
<tr>
  <td><a href="met_node_contains.asp">contains()</a></td>
  <td>Returns true if a node is a descendant of a node</td>
</tr>
<tr>
  <td><a href="prop_html_contenteditable.asp">contentEditable</a></td>
  <td>Sets or returns whether the content of an element is editable or not</td>
</tr>
<tr>
    <td><a href="prop_html_dir.asp">dir</a></td>
    <td>Sets or returns the value of the dir attribute of an element</td>
</tr>
<tr>
  <td><a href="prop_node_firstchild.asp">firstChild</a></td>
  <td>Returns the first child node of an element</td>
</tr>
<tr>
  <td><a href="prop_element_firstelementchild.asp">firstElementChild</a></td>
  <td>Returns the first child element of an element</td>
</tr>
<tr>
  <td><a href="met_html_focus.asp">focus()</a></td>
  <td>Gives focus to an element</td>
</tr>
<tr>
  <td><a href="met_element_getattribute.asp">getAttribute()</a></td>
  <td>Returns the value of an element's attribute</td>
</tr>
<tr>
  <td><a href="met_element_getattributenode.asp">getAttributeNode()</a></td>
  <td>Returns an attribute node</td>
</tr>
<tr>
  <td><a href="met_element_getboundingclientrect.asp">getBoundingClientRect()</a></td>
  <td>Returns the size of an element and its position relative to the viewport</td>
</tr>
<tr>
  <td><a href="met_element_getelementsbyclassname.asp">getElementsByClassName()</a></td>
  <td>Returns a collection of child elements with a given class name</td>
</tr>
<tr>
  <td><a href="met_element_getelementsbytagname.asp">getElementsByTagName()</a></td>
  <td>Returns a collection of child elements with a given tag name</td>
</tr>
<tr>
  <td><a href="met_element_hasattribute.asp">hasAttribute()</a></td>
  <td>Returns true if an element has a given attribute</td>
</tr>
<tr>
  <td><a href="met_node_hasattributes.asp">hasAttributes()</a></td>
  <td>Returns true if an element has any attributes</td>
</tr>
<tr>
  <td><a href="met_node_haschildnodes.asp">hasChildNodes()</a></td>
  <td>Returns true if an element has any child nodes</td>
</tr>
<tr>
    <td><a href="prop_html_id.asp">id</a></td>
    <td>Sets or returns the value of the id attribute of an element</td>
</tr>
<tr>
    <td><a href="prop_html_innerhtml.asp">innerHTML</a></td>
    <td>Sets or returns the content of an element</td>
</tr>
<tr>
    <td><a href="prop_node_innertext.asp">innerText</a></td>
    <td>Sets or returns the text content of a node and its descendants</td>
</tr>
<tr>
  <td><a href="met_node_insertadjacentelement.asp">insertAdjacentElement()</a></td>
  <td>Inserts a new HTML element at a position relative to an element</td>
</tr>
<tr>
  <td><a href="met_node_insertadjacenthtml.asp">insertAdjacentHTML()</a></td>
  <td>Inserts an HTML formatted text at a position relative to an element</td>
</tr>
<tr>
  <td><a href="met_node_insertadjacenttext.asp">insertAdjacentText()</a></td>
  <td>Inserts text into a position relative to an element</td>
</tr>
<tr>
  <td><a href="met_node_insertbefore.asp">insertBefore()</a></td>
  <td>Inserts a new child node before an existing child node</td>
</tr>
<tr>
  <td><a href="prop_html_iscontenteditable.asp">isContentEditable</a></td>
  <td>Returns true if an element's content is editable</td>
</tr>
<tr>
  <td><a href="met_node_isdefaultnamespace.asp">isDefaultNamespace()</a></td>
  <td>Returns true if a given namespaceURI is the default</td>
</tr>
<tr>
  <td><a href="met_node_isequalnode.asp">isEqualNode()</a></td>
  <td>Checks if two elements are equal</td>
</tr>
<tr>
  <td><a href="met_node_issamenode.asp">isSameNode()</a></td>
  <td>Checks if two elements are the same node</td>
</tr>
<tr>
  <td><a href="met_node_issupported.asp">isSupported()</a></td>
  <td><span class="deprecated"><a href="met_node_issupported.asp">Deprecated</a></span></td>
</tr>
<tr>
    <td><a href="prop_html_lang.asp">lang</a></td>
    <td>Sets or returns the value of the lang attribute of an element</td>
</tr>
<tr>
  <td><a href="prop_node_lastchild.asp">lastChild</a></td>
  <td>Returns the last child node of an element</td>
</tr>
<tr>
  <td><a href="prop_element_lastelementchild.asp">lastElementChild</a></td>
  <td>Returns the last child element of an element</td>
</tr>
<tr>
  <td><a href="met_element_matches.asp">matches()</a></td>
  <td>Returns true if an element is matched by a given CSS selector</td>
</tr>
<tr>
  <td><a href="prop_node_namespaceuri.asp">namespaceURI</a></td>
  <td>Returns the namespace URI of an element</td>
</tr>
<tr>
  <td><a href="prop_node_nextsibling.asp">nextSibling</a></td>
  <td>Returns the next node at the same node tree level</td>
</tr>
<tr>
  <td><a href="prop_element_nextelementsibling.asp">nextElementSibling</a></td>
  <td>Returns the next element at the same node tree level</td>
</tr>
<tr>
  <td><a href="prop_node_nodename.asp">nodeName</a></td>
  <td>Returns the name of a node</td>
</tr>
<tr>
  <td><a href="prop_node_nodetype.asp">nodeType</a></td>
  <td>Returns the node type of a node</td>
</tr>
<tr>
  <td><a href="prop_node_nodevalue.asp">nodeValue</a></td>
  <td>Sets or returns the value of a node</td>
</tr>
<tr>
  <td><a href="met_node_normalize.asp">normalize()</a></td>
  <td>Joins adjacent text nodes and removes empty text nodes in an element</td>
</tr>
<tr>
    <td><a href="prop_element_offsetheight.asp">offsetHeight</a></td>
    <td>Returns the height of an element, including padding, border and scrollbar</td>
</tr>
<tr>
    <td><a href="prop_element_offsetwidth.asp">offsetWidth</a></td>
    <td>Returns the width of an element, including padding, border and scrollbar</td>
</tr>
<tr>
    <td><a href="prop_element_offsetleft.asp">offsetLeft</a></td>
    <td>Returns the horizontal offset position of an element</td>
</tr>
<tr>
    <td><a href="prop_element_offsetparent.asp">offsetParent</a></td>
    <td>Returns the offset container of an element</td>
</tr>
<tr>
    <td><a href="prop_element_offsettop.asp">offsetTop</a></td>
    <td>Returns the vertical offset position of an element</td>
</tr>
<tr>
    <td><a href="prop_html_outerhtml.asp">outerHTML</a></td>
    <td>Sets or returns the content of an element (including the start tag and the end tag)</td>
</tr>
<tr>
    <td><a href="prop_node_outertext.asp">outerText</a></td>
    <td>Sets or returns the outer text content of a node and its descendants</td>
</tr>
<tr>
  <td><a href="prop_node_ownerdocument.asp">ownerDocument</a></td>
  <td>Returns the root element (document object) for an element</td>
</tr>
<tr>
  <td><a href="prop_node_parentnode.asp">parentNode</a></td>
  <td>Returns the parent node of an element</td>
</tr>
<tr>
  <td><a href="prop_node_parentelement.asp">parentElement</a></td>
  <td>Returns the parent element node of an element</td>
</tr>
<tr>
  <td><a href="prop_node_previoussibling.asp">previousSibling</a></td>
  <td>Returns the previous node at the same node tree level</td>
</tr>
<tr>
  <td><a href="prop_element_previouselementsibling.asp">previousElementSibling</a></td>
  <td>Returns the previous element at the same node tree level</td>
</tr>
<tr>
    <td><a href="met_element_queryselector.asp">querySelector()</a></td>
    <td>Returns the first child element that matches a CSS selector(s)</td>
</tr>
<tr>
    <td><a href="met_element_queryselectorall.asp">querySelectorAll()</a></td>
    <td>Returns all child elements that matches a CSS selector(s)</td>
</tr>
<tr>
  <td><a href="met_element_remove.asp">remove()</a></td>
  <td>Removes an element from the DOM</td>
</tr>
<tr>
  <td><a href="met_element_removeattribute.asp">removeAttribute()</a></td>
  <td>Removes an attribute from an element</td>
</tr>
<tr>
  <td><a href="met_element_removeattributenode.asp">removeAttributeNode()</a></td>
  <td>Removes an attribute node, and returns the removed node</td>
</tr>
<tr>
  <td><a href="met_node_removechild.asp">removeChild()</a></td>
  <td>Removes a child node from an element</td>
</tr>
<tr>
  <td><a href="met_element_removeeventlistener.asp">removeEventListener()</a></td>
  <td>Removes an event handler that has been attached with the addEventListener() method</td>
</tr>
<tr>
  <td><a href="met_node_replacechild.asp">replaceChild()</a></td>
  <td>Replaces a child node in an element</td>
</tr>
<tr>
    <td><a href="prop_element_scrollheight.asp">scrollHeight</a></td>
    <td>Returns the entire height of an element, including padding</td>
</tr>
<tr>
    <td><a href="met_element_scrollintoview.asp">scrollIntoView()</a></td>
    <td>Scrolls the an element into the visible area of the browser window</td>
</tr>
<tr>
    <td><a href="prop_element_scrollleft.asp">scrollLeft</a></td>
    <td>Sets or returns the number of pixels an element's content is scrolled horizontally</td>
</tr>
<tr>
    <td><a href="prop_element_scrolltop.asp">scrollTop</a></td>
    <td>Sets or returns the number of pixels an element's content is scrolled vertically</td>
</tr>
<tr>
    <td><a href="prop_element_scrollwidth.asp">scrollWidth</a></td>
    <td>Returns the entire width of an element, including padding</td>
</tr>
<tr>
    <td><a href="met_element_setattribute.asp">setAttribute()</a></td>
  <td>Sets or changes an attribute's value</td>
</tr>
<tr>
  <td><a href="met_element_setattributenode.asp">setAttributeNode()</a></td>
  <td>Sets or changes an attribute node</td>
</tr>
<tr>
    <td><a href="prop_html_style.asp">style</a></td>
    <td>Sets or returns the value of the style attribute of an element</td>
</tr>
<tr>
    <td><a href="prop_html_tabindex.asp">tabIndex</a></td>
    <td>Sets or returns the value of the tabindex attribute of an element</td>
</tr>
<tr>
  <td><a href="prop_element_tagname.asp">tagName</a></td>
  <td>Returns the tag name of an element</td>
</tr>
<tr>
  <td><a href="prop_node_textcontent.asp">textContent</a></td>
  <td>Sets or returns the textual content of a node and its descendants</td>
</tr>
<tr>
    <td><a href="prop_html_title.asp">title</a></td>
    <td>Sets or returns the value of the title attribute of an element</td>
</tr>
<tr>
    <td>toString()</td>
    <td>Converts an element to a string</td>
</tr>
</tbody></table>

</details>

<details>
<summary>26. Which of the following correctly describes JSON?</summary>

> JSON is a format for storing and transporting data. \
> JSON is often used when data is sent from a server to a web page. \
> JSON stands for JavaScript Object Notation \
> JSON is a lightweight data interchange format \
> JSON is language independent * \
> JSON is "self-describing" and easy to understand \
> <p>* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.</p>

</details>

<details>
<summary>27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?</summary>

> - **chmod** - Modifies file permissions
> - **pwd** - Output the present working directory
> - **cd** - Change directory
> - **ls** - List files
> - **vim** - Opens vim editor
> - **nano** - Opens nano editor
> - **mkdir** - Make directory
> - **mv** - Move file(s)
> - **rm** - Remove file(s)
> - **man** - Look up a command in the manual
> - **ssh** - Create a secure shell on a remote computer
> - **ps** - View the currently running processes
> - **wget** - Download the resource specified in the `[url]` to the current directory
> - **sudo** - Execute a command as a super user (admin)
> - **echo** - Output the parameters of the command
> - **rmdir** - Remove directory
> - **cp** - Copy files
> - **curl** - Command line client URL browser
> - **grep** - Regular expression search
> - **find** - Find files
> - **top** - View running processes with CPU and memory usage
> - **df** - View disk statistics
> - **cat** - Output the contents of a file
> - **less** - Interactively output the contents of a file
> - **wc** - Count the words in a file
> - **kill** - Kill a currently running process
> - **scp** - Securely copy files to a remote computer
> - **history** - Show the history of commands
> - **ping** - Check if a website is up
> - **tracert** - Trace the connections to a website
> - **dig** - Show the DNS information for a domain
>
> > https://github.com/webprogramming260/.github/blob/main/profile/essentials/console/console.md

</details>

<details>
<summary>28. Which of the following console command creates a remote shell session?</summary>

> ssh

</details>

<details>
<summary>29. Which of the following is true when the -la parameter is specified for the ls console command?</summary>

> The `ls -al` command is a combination of `ls -l` (use a long listing format) and `ls -a` (do not ignore entries starting with `.`)
> The result is a long list (the `ls -l` part) with (from left to right):
> * filetype
> * file permissions
> * number of links
> * owner name
> * owner group
> * file size
> * time of last modification
> * the name of the file or directory
> while the `ls -a` means that hidden files are listed as well.
>
> > https://askubuntu.com/questions/517229/what-does-ls-la-do

</details>

<details>
<summary>30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?</summary>

> ![alt Domain Name Parts](public/domainNameParts.jpg "Domain Name Parts")
> 
> - **Top Level Domain (TLD)** - .click
> - **Subdomain** - banana is a subdomain of fruit.bozo.click and fruit is a subdomain of bozo.click
> - **Root Domain** - bozo.click
> - **Second Level Domain (SLD)** - bozo
> - **Third Level Domain** - fruit
> - **Fourth Level Domain** - banana

</details>

<details>
<summary>31. Is a web certificate is necessary to use HTTPS.</summary>

> Yes, a web certificate (also known as an SSL certificate) is necessary to use HTTPS

</details>

<details>
<summary>32. Can a DNS A record can point to an IP address or another A record.</summary>

> Yes, a DNS A record can point to an IP address or another A record:
> > IP address \
> > An A record points a domain or subdomain to an IPv4 address. For example, a domain like google.com might be pointed to the IP address of its DNS hosting server. \
> > Another A record \
> > You can have multiple A records for the same domain name, each pointing to a different IP address. This can be used to provide redundancy and fallbacks.

</details>

<details>
<summary>33. Port 443, 80, 22 is reserved for which protocol?</summary>

> - **443** - HTTPS
> - **80** - HTTP
> - **22** - ssh

</details>

<details>
<summary>34. What will the following code using Promises output when executed?</summary>

> JavaScript Promises are a powerful feature for handling asynchronous operations in web programming. Here's a summary of the key points:
> ## Purpose and Functionality
> Promises allow for the execution of long-running or blocking tasks without interrupting the main rendering thread. This is crucial for maintaining a responsive user interface while performing complex operations in the background.
> ## Promise States
> A Promise can be in one of three states:
> 1. **Pending**: The asynchronous operation is still running.
> 2. **Fulfilled**: The operation completed successfully.
> 3. **Rejected**: The operation failed to complete.
> ## Creating and Using Promises
> To create a Promise, you use the Promise constructor and pass it an executor function. This function takes two parameters: `resolve` and `reject`, which are used to change the Promise's state to fulfilled or rejected, respectively.
> ## Handling Promise Results
> Promises provide three methods for handling their results:
> 1. **then()**: Called when the Promise is fulfilled.
> 2. **catch()**: Called when the Promise is rejected.
> 3. **finally()**: Always called after the Promise is settled, regardless of its final state.
>
> > https://github.com/webprogramming260/.github/blob/main/profile/javascript/promises/promises.md

</details>

</details>
