# Toggle the Theme

## 🚀 Task Overview
Create a responsive webpage with toggle functionality to switch between **Light Mode** and **Dark Mode**. The theme can be changed dynamically via a button click.

---

## ✨ Features
1. **Initial Light Mode**:
   - The webpage starts in Light Mode by default.
   - Elements (background, text, navbar, footer, header, cards) reflect the light theme.

2. **Theme Toggle**:
   - Clicking the button with the `id #btn` toggles between **Light Mode** and **Dark Mode**.
   - The theme change modifies:
     - Body background and text color.
     - Navbar, footer, and header styles.
     - Background color of cards.
   - The button text updates dynamically to display:
     - `Switch to Dark Mode` in Light Mode.
     - `Switch to Light Mode` in Dark Mode.

3. **Dynamic Classes**:
   - Use JavaScript to toggle between the `light` and `dark` classes for the `<body>` tag.

---

## 🛠️ Implementation Steps

### 1. **HTML Structure**:
Ensure you have a button with `id #btn` for toggling themes. Your webpage should include necessary elements like navbar, header, footer, and cards to apply styles dynamically.

### 2. **CSS Classes**:
- **Light Theme (`.light`)**:
  - Light background for the body (`#ffffff` or similar).
  - Darker text (`#333333`).
  - Subtle styling for navbar, footer, and cards.

- **Dark Theme (`.dark`)**:
  - Dark background for the body (`#000000` or similar).
  - Light text (`#eeeeee`).
  - Enhanced styling for navbar, footer, and cards to suit a dark theme.

### 3. **JavaScript Logic**:
- Add an event listener to the button with `id #btn`.
- Implement a function to:
  - Toggle the `light` and `dark` classes on the `<body>` tag.
  - Update the button text based on the current theme.

---

## 📋 Example Behavior

### **Default Light Mode**:
- Background: White.
- Text: Black.
- Button: Displays `Switch to Dark Mode`.

### **After Toggling to Dark Mode**:
- Background: Dark Gray or Black.
- Text: White.
- Button: Displays `Switch to Light Mode`.

---

## 🖌️ Styling Tips
1. Use contrast-friendly colors for text and background in both themes.
2. Ensure card designs are visibly distinct in Light and Dark modes.
3. Maintain consistent padding, margin, and layout for header, navbar, and footer in both themes.

---

## 🎯 Key Points to Remember
- The toggle must update all required elements simultaneously.
- Button text should accurately describe the theme to be switched to.
- Ensure the design is visually appealing in both modes.


## Output Video



https://github.com/user-attachments/assets/692e4329-da20-4f54-a290-a9ba50ed3098

