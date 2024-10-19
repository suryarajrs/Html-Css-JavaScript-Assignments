# Interactive Web Page Text Modifier

The goal of this task is to enhance the interactivity of a web page by implementing JavaScript functionalities that allow users to modify the appearance of a sample text. The provided HTML boilerplate includes elements for changing text color, font size, applying text styles (underline, italic, bold), changing the font family, and a button to display the CSS properties applied to the text.

## Requirements:

### 1. Color Change Functionality:
- Implement JavaScript to change the color of the text inside the `#text-container` div when the "Change Color" button is clicked.
- The color value should be taken from the input field next to the button.

### 2. Font Size Adjustment:
- Use JavaScript to adjust the font size of the text inside `#text-container` based on the value of the range input slider.
- The font size should update **live** as the slider is moved. The default should be `55px`.

### 3. Text Style Toggles:
- Add event listeners to the "Underline", "Italic", and "Bold" buttons to toggle the respective text styles for the content inside `#text-container`.
- If the text is already styled with underline, italic, or bold, clicking the button again should remove the style.

### 4. Font Family Selection:
- Enable the dropdown list to change the font family of the text inside `#text-container` based on the selected option.

### 5. Display CSS Properties:
- When the "Get CSS Properties" button is clicked, display the current CSS properties applied to the `#text-container` text.
- The displayed properties should include:
  - `color`
  - `font-size`
  - `text-decoration`
  - `font-style`
  - `font-weight`
  - `font-family`

- These properties should be displayed inside a paragraph with the `id="css-props"`, in the following format:

- This is how the result should look like:

- ## Video Demo

[![Watch the demo]](./Dynamic-css-frontend.mp4)
