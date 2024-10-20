# Like & Dislike Button Feature

### Objective:
Replicate the **Like** and **Dislike** button functionality similar to YouTube. The number of likes should be displayed and updated as users press the buttons. Dislikes should not reduce the count below zero.

---

## 📋 **Acceptance Criteria**:

### 1. **Like Button**:
- **ID**: `increment`
- Pressing this button increases the **Likes count** by 1.
  
---

### 2. **Dislike Button**:
- **ID**: `decrement`
- Pressing this button decreases the **Likes count** by 1, but:
  - **The count cannot go below zero.** If the count is already 0, it should stay at 0 when this button is pressed.

---

### 3. **Likes Counter**:
- **Element Type**: `<h3>` element
- **ID**: `counter`
- This element displays the current count of likes.
- The initial count is set to **0**.
  
---

## 🎯 **Functional Requirements**:
1. The **Like** button increments the likes count and updates the value displayed in the `<h3>` element with the ID `counter`.
2. The **Dislike** button decreases the likes count, but the value displayed cannot go below **0**.
3. The counter dynamically updates in real-time as
