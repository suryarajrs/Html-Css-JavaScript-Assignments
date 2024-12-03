# Digital Clock - Show Current Time

This guide will explain how to implement the functionality of a real-time digital clock, which displays the current time and updates every second.

---

## Features

1. **Time Display**:
   - The current time will be shown inside a `div` with the `id` **#time**.
   - The `#time` div is located inside another `div` with the class **clockContainer**.

2. **Real-Time Update**:
   - The time will update every second to show the current hours, minutes, and seconds.

---

## HTML Structure

1. **Clock Container**:
   - A `div` with the class **clockContainer** to contain the clock.
2. **Time Display**:
   - A `div` with the `id` **time** where the current time will be displayed.

---

## Steps for Implementation

1. **Get the Current Time**:
   - Use JavaScript to get the current time, including hours, minutes, and seconds.

2. **Format the Time**:
   - Ensure that the time is displayed in a 24-hour format or 12-hour format, depending on your preference.
   - Ensure that minutes and seconds always display two digits (e.g., `08` instead of `8`).

3. **Update the Time**:
   - Use JavaScript's `setInterval()` method to update the time every second (1000 milliseconds).

4. **Display the Time**:
   - Insert the formatted current time into the `div` with the `id` **time**.

---

## Demo Output Video


https://github.com/user-attachments/assets/7fb07bb7-2b68-42fb-be69-49450c4ea0fe

