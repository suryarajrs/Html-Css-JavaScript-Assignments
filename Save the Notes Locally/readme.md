# Notes App: Save Notes Locally

This guide details the creation of a simple web application for storing and retrieving notes using HTML, CSS, and JavaScript. The application uses local storage for data persistence and provides a minimalistic interface for user interaction.

---

## Features

1. **Input and Save Notes**:
   - A text area where users can enter their notes.
   - A "Save" button to store notes locally in the browser's local storage.

2. **Load Notes**:
   - Saved notes are displayed as a list with each note accompanied by a "Load" button.
   - Clicking the "Load" button shows the note text in an alert box.

3. **Automatic Clearing**:
   - The text area is cleared automatically after saving a note.

4. **Persistent Storage**:
   - Notes are stored in an array in local storage with the key `notes`.

---

## HTML Structure

### Elements Overview

- **Header**: Displays the title "Notes App" in an `<h1>` tag.
- **Text Area**: A `<textarea>` element with:
  - `id="noteInput"`
  - Placeholder text: "Enter your note".
- **Save Button**: A `<button>` element with:
  - `id="saveButton"`
  - Label: "Save".
- **Notes List**: A `<div>` with:
  - `id="noteList"`
  - Displays saved notes along with their respective "Load" buttons.

---

## CSS Styling

### General Page Styling
- **Font Family**: Arial or sans-serif.
- **Text Alignment**: Centered.

### Element-Specific Styling

1. **Header (`<h1>`)**:
   - Font color: `#333`.

2. **Text Area**:
   - Width: 80%.
   - Height: 100px.
   - Padding: 10px.
   - Margin: 10px (top and bottom), auto (left and right).
   - Display: Block.

3. **Save Button**:
   - Background color: `#007bff`.
   - Text color: `#fff`.
   - Padding: 10px (top and bottom), 20px (left and right).
   - No border.
   - Cursor: Pointer.

4. **Notes List (`#noteList`)**:
   - Text Alignment: Left.
   - Margin: 20px (top).

---

## JavaScript Functionality

### Core Actions

1. **Saving Notes**:
   - On clicking the "Save" button:
     - Retrieve input from the text area.
     - Append the note to an array stored in local storage under the key `notes`.
     - Clear the text area.

2. **Displaying Saved Notes**:
   - Notes are loaded from local storage and displayed in the `noteList` section.
   - Each note is accompanied by a "Load" button with:
     - Class: `load-button`.
     - Data attribute: `data-index` (note's array index).

3. **Loading Notes**:
   - Clicking a "Load" button retrieves the corresponding note and displays it in an alert.

---

## Workflow Example

1. **User Interaction**:
   - Enter a note in the text area.
   - Click the "Save" button to store the note.

2. **Note Display**:
   - Saved notes appear in the list with "Load" buttons.

3. **Note Retrieval**:
   - Click a "Load" button to view the note in an alert.

---

## Enhancements

- Add an edit feature to update saved notes.
- Include a delete button for removing specific notes.
- Implement a search bar to filter through notes.

---

Happy Note-Taking! ✏️

### Demo Output video


https://github.com/user-attachments/assets/d5c3a0d6-3510-428f-8c57-03817fb8aaed

