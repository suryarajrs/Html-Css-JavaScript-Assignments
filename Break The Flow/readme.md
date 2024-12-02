# Break the Flow: Prevent Default and Stop Event Bubbling

This task involves implementing two key functionalities using JavaScript for interaction with the provided HTML and CSS boilerplate.

---

## Functional Overview

### Task 1: Prevent Default Behavior
- **Objective**: Stop the "Submit" button from refreshing the page.
- **Expected Behavior**:
  - On clicking the "Submit" button, the default form submission behavior should be prevented using `event.preventDefault()`.
  - Input values in the form fields should remain intact.

### Task 2: Stop Event Bubbling
- **Objective**: Prevent the `click` event from propagating from `second-div` to `first-div`.
- **Expected Behavior**:
  - Clicking on `second-div` should only display:
    ```
    second div called --
    ```
  - The `click` event should **not propagate** to `first-div`, which means it won't trigger its event listener.

---

## Implementation Details

1. **Event Listener for "Submit" Button**:
   - Attach an event listener to the button.
   - Use `event.preventDefault()` to stop the form from refreshing the page.

2. **Event Listeners for Div Elements**:
   - Attach a `click` event listener to both `first-div` and `second-div`.
   - Use `event.stopPropagation()` inside the `second-div`'s event handler to prevent bubbling up to `first-div`.

---

## Expected Output

1. **Before Implementation**:
   - Task 1: The "Submit" button refreshes the page, clearing the input fields.
   - Task 2: Clicking on `second-div` triggers both its own and `first-div`'s `click` events, displaying:
     ```
     second div called -- first div called
     ```

2. **After Implementation**:
   - Task 1: The page no longer refreshes, and input values persist.
   - Task 2: Clicking on `second-div` stops bubbling, displaying only:
     ```
     second div called --
     ```

---

## Additional Enhancements
- Add form validation to enhance the user experience during submission.
- Provide feedback or styling updates to indicate successful interactions.

This approach ensures better control over page behavior and event flows, resulting in an improved user interface.

## Output Demo

https://github.com/user-attachments/assets/f02eb8fa-5197-41ce-b9fc-4047abe67a52

