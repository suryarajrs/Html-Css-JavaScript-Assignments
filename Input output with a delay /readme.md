# Input and Output with Delay

### Objective:
This project creates two input fields, a toggle button, and display sections. The behavior of the inputs and display is enhanced with JavaScript, including character and word counting, delay-based output, and dynamic input visibility.

---

## 📋 **Project Specifications**:

### 1. **HTML Structure**:
- **Button**:
  - **ID**: `toggleinputs`
  - **Text**: `Toggle Inputs`
  - Clicking this button toggles the visibility and enabling/disabling of the second input field.

- **Input Fields**:
  - **ID of Input 1**: `input1`
  - **ID of Input 2**: `input2` (Initially invisible and disabled)
  - **Class for Both Inputs**: `userinput`

- **Display Section**:
  - **ID of Output Paragraph**: `textoutput` (Displays the final text after a 4-second delay)
  - **Class for Display Paragraph**: `display`
  
- **Character/Word Count Display**:
  - **ID**: `count` (Displays the character count for `input1` or the word count for `input2`)

---

## 🎯 **JavaScript Functionalities**:

### 1. **Toggle Button Behavior**:
- Initially, `input2` is **invisible** and **disabled**.
- Clicking the button toggles the visibility and enabling/disabling of `input2`.
  - **Visible and Enabled**: When the button is clicked, `input2` appears and becomes editable.
  - **Invisible and Disabled**: Clicking the button again hides and disables `input2`.

---

### 2. **Input 1 Behavior**:
- **Character Counting**: While typing in `input1`, the **count** paragraph displays the number of characters entered in real-time.
- **Delayed Output**: If the user stops typing for **4 seconds**, the text from `input1` is moved to the `textoutput` paragraph.
  - After the delay:
    - The `input1` field is **cleared**.
    - The `count` paragraph is **reset**.

---

### 3. **Input 2 Behavior**:
- **Word Counting**: While typing in `input2`, the **count** paragraph displays the number of words entered.
- **Delayed Output**: If the user stops typing for **4 seconds**, the text from `input2` is moved to the `textoutput` paragraph.
  - After the delay:
    - The `input2` field is **cleared**.
    - The `count` paragraph is **reset**.

---

## 💻 **Interactive Flow**:

1. **User Interaction with Input 1**:
   - The user begins typing in `input1`.
   - The **count** paragraph displays the current character count in real-time.
   - If the user stops typing for 4 seconds:
     - The text from `input1` is displayed in the `textoutput` paragraph.
     - `input1` and the **count** paragraph are both cleared.

2. **User Interaction with Input 2**:
   - After clicking the **Toggle Inputs** button, `input2` becomes visible and enabled.
   - The user types in `input2`, and the **count** paragraph updates in real-time to display the word count.
   - If the user stops typing for 4 seconds:
     - The text from `input2` is displayed in the `textoutput` paragraph.
     - `input2` and the **count** paragraph are cleared.

3. **Toggling Input 2**:
   - Clicking the **Toggle Inputs** button again hides and disables `input2`.

---

### Example Scenarios:

- **Initial Load**:
  - `input1` is visible and ready for typing.
  - `input2` is hidden and disabled.
  
- **Typing in Input 1**:
  - Typing displays character count in real-time.
  - Stopping for 4 seconds moves the text to the `textoutput` paragraph and clears `input1`.

- **Toggling Input 2**:
  - Clicking the **Toggle Inputs** button makes `input2` visible and editable.

- **Typing in Input 2**:
  - Typing displays word count in real-time.
  - Stopping for 4 seconds moves the text to the `textoutput` paragraph and clears `input2`.

---
##Demo video


https://github.com/user-attachments/assets/69a5ce24-33bf-429a-8b34-abf09eba0e76


