# Task Application (Part 1)

This guide describes how to build a mini-task application with sequential task execution using JavaScript. The tasks are represented by buttons, each associated with a timed simulation and callback functions to control their execution flow.

---

## Requirements

1. **Three Task Buttons**:
   - **Task 1**: Runs for 2 seconds and displays "Task 1 completed!".
   - **Task 2**: Becomes clickable after Task 1 finishes. Runs for 3 seconds and displays "Task 2 completed!".
   - **Task 3**: Becomes clickable after Task 2 finishes. Runs for 2 seconds and displays "Task 3 completed!".

2. **Initial State**:
   - Only the **Task 1** button is enabled. Other buttons are disabled.

3. **Sequential Execution**:
   - Tasks are executed in order, ensuring dependencies are respected using callback functions.

---

## Workflow

1. **Initial Setup**:
   - Task 1 button is enabled.
   - Task 2 and Task 3 buttons are disabled.

2. **Task Execution**:
   - **Task 1**:
     - User clicks Task 1.
     - A 2-second simulation runs.
     - Displays "Task 1 completed!" below the button.
     - Enables Task 2.
   - **Task 2**:
     - User clicks Task 2.
     - A 3-second simulation runs.
     - Displays "Task 2 completed!" below the button.
     - Enables Task 3.
   - **Task 3**:
     - User clicks Task 3.
     - A 2-second simulation runs.
     - Displays "Task 3 completed!" below the button.

3. **Control Flow**:
   - Callback functions are used to manage sequential execution, ensuring that each task is only accessible after the preceding one completes.

---

## Key Features

1. **Button State Management**:
   - Buttons are dynamically enabled and disabled based on task completion.

2. **Timed Simulations**:
   - Each task has a defined duration (2 or 3 seconds) to simulate asynchronous operations.

3. **User Feedback**:
   - Messages are displayed below each button upon task completion.

---

## User Interaction Example

- **Initial State**:
  - Task 1: Enabled
  - Task 2: Disabled
  - Task 3: Disabled

- **Execution**:
  1. User clicks **Task 1** → 2 seconds → Displays "Task 1 completed!" → Enables **Task 2**.
  2. User clicks **Task 2** → 3 seconds → Displays "Task 2 completed!" → Enables **Task 3**.
  3. User clicks **Task 3** → 2 seconds → Displays "Task 3 completed!".

---

## Potential Enhancements

- Add more tasks for extended workflows.
- Introduce progress bars or spinners during task execution.
- Display a summary or completion notification after all tasks are finished.

---

Enjoy building your task flow! 🚀

## Demo output video 


https://github.com/user-attachments/assets/7179cc86-3ea8-419e-8d5e-e7ec07cabe20

