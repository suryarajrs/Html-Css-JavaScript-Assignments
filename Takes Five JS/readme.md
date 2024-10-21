# Pagination with Numbers Display

### Objective:
This project displays a sequence of 5 numbers at a time, with **Next Page** and **Prev Page** buttons to navigate between number sets. The navigation buttons dynamically enable or disable based on the current page.

---

## 📋 **Project Specifications**:

### 1. **Initial Load**:
- **Numbers Displayed**: The numbers from **1 to 5** are shown in individual divs when the page initially loads.

---

### 2. **Back Button**:
- **ID**: `back-button`
- **Text**: `Prev Page`
- **Disabled by default** since the user starts on the first page (showing numbers 1-5).
- This button becomes **enabled** when the user navigates to any other page (e.g., from numbers 6-10).

---

### 3. **Next Button**:
- **ID**: `next-button`
- **Text**: `Next Page`
- On clicking this button, the displayed numbers will change to the next set of 5 numbers.
  - **Example**: If numbers 1-5 are shown, clicking **Next Page** will display numbers **6-10**.
  
---

## 🎯 **Functional Requirements**:
1. **Next Page Navigation**:
   - Clicking the **Next Page** button moves the display to the next set of 5 numbers.
   - When numbers **6-10** are displayed, the **Prev Page** button becomes enabled.
   
2. **Prev Page Navigation**:
   - Clicking the **Prev Page** button moves back to the previous set of numbers.
   - If the user navigates back to numbers **1-5**, the **Prev Page** button is **disabled** again (since there is no earlier set of numbers).

3. **Dynamic Button States**:
   - The **Back Button** is disabled on the first page (showing numbers 1-5).
   - The **Next Button** can be clicked to display the next set of 5 numbers, enabling the **Back Button** when moving past the first page.

---

## 💻 **Interactive Flow**:
1. **User** sees numbers **1 to 5** and two buttons: `Prev Page` (disabled) and `Next Page`.
2. **User** clicks the **Next Page** button, and the numbers change to **6 to 10**. The **Prev Page** button becomes enabled.
3. **User** clicks the **Prev Page** button, returning to the original numbers **1 to 5**, and the **Prev Page** button becomes disabled again.

---

### Example Scenarios:

- **Initial Page (1-5)**:
  - Display: Numbers **1, 2, 3, 4, 5**
  - **Back Button**: Disabled
  - **Next Button**: Enabled
  
- **Next Page (6-10)**:
  - Display: Numbers **6, 7, 8, 9, 10**
  - **Back Button**: Enabled
  - **Next Button**: Enabled
  
- **Going Back to First Page**:
  - Display: Numbers **1, 2, 3, 4, 5**
  - **Back Button**: Disabled
  - **Next Button**: Enabled

---

This project demonstrates a basic pagination mechanism that can be extended to handle larger data sets or other kinds of pagination logic. The button states change dynamically to ensure a smooth and intuitive navigation experience.

## Demo



https://github.com/user-attachments/assets/e1adaea8-0892-4636-a209-9d9f54597169

