# ⏲️ Countdown Timer Project

### Objective:
Create an interactive countdown timer using HTML, CSS, and JavaScript. The timer counts down from a given number of seconds, starting when a button is clicked. Once the countdown completes, the timer's appearance changes to indicate it has stopped.

---

## 📋 **Project Requirements**

### 1. **HTML Structure**
   - **Main Container** (`#control`):
      - **Input Element** (`#limit`): 
         - **Type**: `text`
         - **Default Value**: 10
         - Represents the total countdown duration (in seconds).
      - **Start Button** (`#btnStart`):
         - Starts the timer or restarts it with the new input value if the timer is already running.
   - **Timer Display** (`#clock`):
      - The div displays the remaining time in **minutes: seconds** format.
      - **Initial Display Value**: `"00:00"`
      - **Class Changes**: 
         - Initially, the div has a class `"running"`.
         - Once the countdown reaches zero, change the class to `"stopped"`.

### 2. **CSS Styling**
   - **Clock Display**:
      - Initial **Background Color**: `blue`
      - **Transition to Red**: Upon countdown completion, the background color should change from blue to red by altering the class name.

### 3. **JavaScript Functionality**
   - **Countdown Logic**:
      - Start the countdown when the **Start Button** is clicked.
      - Format the time in `minutes:seconds`:
         - Ensure **single-digit minutes/seconds** are prefixed with a `0`.
         - For example, `02:04` for 2 minutes and 4 seconds.
   - **Restarting the Timer**:
      - If the timer is already running, pressing **Start** should reset the timer with the new input value.

---

## 🛠 **Setup Instructions**

1. **Clone Repository**:
    ```bash
    git clone https://github.com/your-username/timer-project.git
    ```

2. **Open `index.html`** in your browser to interact with the timer.

### 📽 Demo Video
Watch the [demo video](https://demo-video-url...) for a walkthrough of the timer’s behavior and interactions.

---

## 🌟 **Project Highlights**
This project allows you to practice:
- Building interactive UIs with HTML, CSS, and JavaScript
- Handling input validation and countdown resets
- Managing dynamic CSS class changes
- Formatting timer outputs with JavaScript

Get started with this project to deepen your understanding of interactive web applications!


https://github.com/user-attachments/assets/6a387795-bb32-46ab-bc48-2a06a9d9e172

