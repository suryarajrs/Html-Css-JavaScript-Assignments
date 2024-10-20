# Number Sum Calculator

### Objective:
This program allows users to enter two numbers, either integers or decimals, and calculates their sum when a button is clicked. The result is displayed in a disabled input box, rounded to one decimal place only when necessary.

---

## 📋 **Program Specifications**:

### 1. **Number Input Fields**:
- **ID**: `num1` and `num2`
- These fields accept both **integer** and **decimal** input values.
- Users can enter any number in these input boxes.

---

### 2. **Sum Button**:
- **ID**: `mybtn`
- This button triggers the calculation of the sum of the two numbers entered in `num1` and `num2`.

---

### 3. **Result Input Box**:
- **ID**: `result`
- This field displays the calculated sum. It is a **disabled** field, meaning users cannot edit the result manually.
- **Format**:
  - The result will be rounded to **one decimal place** if necessary (for decimal inputs).
  - If the result is an integer, it will be displayed without any decimal places.

---

## 🎯 **Functional Requirements**:
- When the button is clicked:
  - The sum of `num1` and `num2` will be calculated.
  - The result will be displayed in the `result` input box.
  - If the sum involves decimal numbers, it will be **rounded to one decimal place**.
  - For purely integer inputs, the result will be displayed without decimals.

### Example Scenarios:
- **Input**: `num1 = 5.7`, `num2 = 3.3`  
  **Output**: `result = 9.0`
  
- **Input**: `num1 = 7`, `num2 = 8`  
  **Output**: `result = 15`

---

## 💻 **Interactive Flow**:
1. **User** enters values into the `num1` and `num2` input fields.
2. **User** clicks the button with the ID `mybtn`.
3. **Program** calculates the sum of the two numbers.
4. **Result** is displayed in the `result` input box, formatted accordingly.

---

This setup ensures that users can perform accurate calculations with both integers and decimals, with the appropriate formatting applied to the result!

##Demo
![sumcalculator](https://github.com/user-attachments/assets/6f3b1a1a-ecf2-4e15-87a0-383924b5274f)

