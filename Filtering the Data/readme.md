# Filtering the Data

A simple interactive JavaScript feature to filter and display even numbers from a user-inputted list of numbers. The user enters a comma-separated list of numbers in an input field, and the result is displayed after pressing the "Submit" button.

---

## Features

- **Input Field:** Accepts a list of comma-separated numbers.
- **Filter Even Numbers:** Extracts only the even numbers from the list using the JavaScript `filter()` method.
- **Dynamic Output:** Displays the filtered list of even numbers below the input field.

---

## Instructions

1. **Input the Numbers:**
   - Enter a list of comma-separated numbers into the input field with the ID `#numbers`.

2. **Submit the Input:**
   - Press the "Submit" button with the ID `#submitBtn`.

3. **View the Results:**
   - The filtered list of even numbers will be displayed in the paragraph tag with the ID `#result`.

---

## Example Usage

1. Enter `34,67,78,65` in the input field.
2. Click the "Submit" button.
3. The output will display:  
   **The even numbers are: 34, 78**

---

## How It Works

1. The user inputs a list of numbers in the `#numbers` field.
2. On clicking the "Submit" button:
   - The input is retrieved and split into an array of numbers.
   - The `filter()` method is applied to extract even numbers.
3. The resulting list of even numbers is displayed dynamically in the `#result` paragraph.

---

## Preview

### HTML Structure
- **Input Field:** `id="numbers"`
- **Button:** `id="submitBtn"`
- **Output Paragraph:** `id="result"`

### Styling
- The styling is predefined in CSS to enhance visual presentation.

---

## Notes

- Ensure the input contains only valid numbers separated by commas to avoid errors.
- The program gracefully handles cases with no even numbers, displaying an empty result.

Enjoy filtering your data with ease!

## Output
![filtering](https://github.com/user-attachments/assets/55b44ae6-d016-4c56-8555-39df1cc99c45)

