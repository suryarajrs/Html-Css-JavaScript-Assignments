# Workout with JS

This project allows users to input a workout and interact with a simple personal trainer object to start a workout. The functionality is implemented using JavaScript's ES6 `this` keyword.

---

## Features

- A JavaScript object `personalTrainer` that holds the trainer's name and an array of workouts.
- A `startWorkout` method that checks if the input workout is available in the workouts array and displays a message in the output div accordingly.
- Handles both valid and invalid workout inputs.
  
---

## How to Use

1. **Setup**: 
   - The HTML file includes:
     - An input field with the `id` **`input-workout`** for entering the workout.
     - A button with the `id` **`btn-start`** to trigger the workout start function.
     - A div with the `id` **`output`** to display the result.
   
2. **Input**:
   - Enter a workout name (e.g., "Squats") in the input field.
   
3. **Output**:
   - Upon clicking the **Start** button, the `startWorkout` method is called.
   - If the workout is in the `workouts` array, it displays a message like: `"John is starting Squats"`.
   - If the workout is not found in the array, it shows a message like: `"John doesn't know the dumbbells workout."`.

---

## Example



https://github.com/user-attachments/assets/45b71fd0-2b4f-4929-a5fc-ddde2a205293


