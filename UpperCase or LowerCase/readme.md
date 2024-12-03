# UpperCase or LowerCase Transformation

This guide explains how to implement functionality that allows users to transform an input string to uppercase or lowercase using callback functions in JavaScript.

---

## Features

1. **Input Field**:
   - Users can enter a string into an input field with the `id` **#inputText**.

2. **Two Buttons**:
   - **Uppercase Button** (`id` **#upperCaseBtn**): Converts the input string to uppercase.
   - **Lowercase Button** (`id` **#lowerCaseBtn**): Converts the input string to lowercase.

3. **Result Display**:
   - The transformed string is displayed in a paragraph with the `id` **#result**.

---

## User Interface Components

### HTML Structure:
1. **Input Field**:
   - Single-line text input for user input.
2. **Action Buttons**:
   - Two buttons for uppercase and lowercase transformations.
3. **Output Display**:
   - A paragraph element to show the transformed string.

---

## Functionality Overview

### Core Logic:
1. **Uppercase Transformation**:
   - When the "Uppercase" button is clicked:
     - Fetch the string from the input field.
     - Convert the string to uppercase using a callback function.
     - Display the transformed string in the result paragraph.

2. **Lowercase Transformation**:
   - When the "Lowercase" button is clicked:
     - Fetch the string from the input field.
     - Convert the string to lowercase using a callback function.
     - Display the transformed string in the result paragraph.

---

## Steps for Implementation

1. **Attach Event Listeners**:
   - Listen for click events on both buttons.

2. **Handle Transformations**:
   - Use callback functions to process the transformations based on the clicked button.

3. **Update the Display**:
   - Dynamically update the result paragraph with the transformed string.

---

## Expected Behavior

### Example Workflow:
1. Enter "Hello World" into the input field.
2. Click the **Uppercase** button:
   - Output: "HELLO WORLD"
3. Click the **Lowercase** button:
   - Output: "hello world"

### Demo Output:
- **Input**: `JavaScript is Fun`
- **Uppercase Result**: `JAVASCRIPT IS FUN`
- **Lowercase Result**: `javascript is fun`
![upperCase](https://github.com/user-attachments/assets/5b7affa8-fe89-4ecd-980a-507ed8363d16)
![lowerCase](https://github.com/user-attachments/assets/439b2a29-71b3-4e72-9a95-a1d8ab9c24e0)

---

With this setup, users can easily toggle between uppercase and lowercase transformations for their input string. Enjoy building this interactive feature!
