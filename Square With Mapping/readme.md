# Squaring Numbers Using JavaScript's Map

This guide explains how to process a comma-separated list of numbers entered by the user, square each number using JavaScript, and display the result dynamically on a webpage.

---

## Features

1. **User Input**: Accepts a comma-separated list of numbers through an input field.
2. **Computation**: Squares each number in the list using JavaScript's `map` method.
3. **Dynamic Display**: Outputs the results in a designated paragraph tag upon submitting the form.

---

## Workflow

1. **Input Retrieval**:
   - The user enters a list of numbers separated by commas in the input field.
   - Input validation ensures the format is correct.

2. **Number Processing**:
   - The input is split into an array.
   - Each number is squared using the `map` method, producing a new array of squared values.

3. **Output Display**:
   - The squared numbers are joined into a comma-separated string.
   - The results are displayed dynamically in the result paragraph.

---

## Example

- **Input**: `34,67,78,65`
- **Process**: The numbers are squared as follows:
  - \( 34^2 = 1156 \)
  - \( 67^2 = 4489 \)
  - \( 78^2 = 6084 \)
  - \( 65^2 = 4225 \)
- **Output**: "The squares are: 1156, 4489, 6084, 4225"

---

## Key Elements

- **Validation**:
  - Ensures input is not empty.
  - Handles invalid formats or non-numeric values gracefully.
- **Dynamic Interaction**:
  - Results are updated in real-time upon user interaction.

---

### User Prompt

- Enter a list of numbers in the input field (e.g., `1, 2, 3`).
- Click the **Submit** button to calculate and view the squared values.

### Output
![squarewithmapping](https://github.com/user-attachments/assets/6bdd6b39-ab13-4da6-8406-3a1ddfeb4ce3)
