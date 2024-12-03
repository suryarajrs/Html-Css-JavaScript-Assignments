# Filtering the Fruits

This guide outlines the steps to create a user interface for filtering fruits based on their type using JavaScript's `filter` method.

---

## Features

1. **Dropdown for Fruit Types**:
   - A dropdown menu with the `id` **fruitType** allows users to select the type of fruit they want to filter.
   - Includes an "All" option to display all fruits.

2. **Filter Button**:
   - A button with the `id` **filterBtn** triggers the filtering functionality when clicked.

3. **Display Area**:
   - Filtered results are displayed in a list format within an element with the `id` **fruitList**.

---

## User Interface Components

### HTML Structure:
- A dropdown menu to select the fruit type.
- A "Filter" button to apply the filter.
- A list area to show the filtered fruits.

### CSS:
- Ensure the dropdown, button, and list are styled consistently.
- Use margins and padding for spacing and a clean layout.

---

## Functionality Overview

1. **Dropdown Input**:
   - User selects a fruit type from the dropdown menu.

2. **Filtering Logic**:
   - Use JavaScript's `filter` method to filter the fruits based on the selected type.
   - If "All" is selected, bypass filtering and display the entire list.

3. **Display Results**:
   - Render the filtered fruits dynamically in the list area.

---

## Expected Behavior

1. **Default State**:
   - All fruits are displayed initially.

2. **After Filtering**:
   - Only fruits matching the selected type are displayed.
   - If "All" is selected, all fruits are shown.

---

### Example Workflow:
1. Select a type (e.g., "Citrus") from the dropdown.
2. Click the "Filter" button.
3. The list updates to show only fruits categorized as "Citrus."

### Demo Output:

![filterFruit](https://github.com/user-attachments/assets/a582d488-40b4-4a3f-9b59-ccb799a85221)
