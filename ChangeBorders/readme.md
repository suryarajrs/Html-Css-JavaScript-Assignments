# Profile Card Editor with Dynamic Border and Text Update

A simple interactive web-based profile card editor that allows users to modify the name, description, and border color of the profile card dynamically. 

## Features

1. **Real-Time Text Updates**  
   - Users can update the profile name and description in real-time as they type in the input fields.

2. **Random Border Color for Profile Image**  
   - Clicking on the profile image changes its border to a randomly selected color from a predefined array.

## How It Works

1. **Real-Time Updates**  
   - Input fields for the profile name and description are linked to the corresponding elements on the preview card. As the user types, the changes are reflected instantly.

2. **Dynamic Border Color**  
   - A predefined array of colors is used to style the border of the profile image. On clicking the image, a random color is picked and applied.

## HTML Structure

- **Input Fields**  
  - `#nameInput`: Updates the profile name.  
  - `#descriptionInput`: Updates the profile description.  

- **Profile Card**  
  - `#profileName`: Displays the updated name.  
  - `#profileDescription`: Displays the updated description.  
  - `#profileImage`: The profile picture that changes border color on click.  

## CSS Highlights

- The profile card has a clean and minimalistic design.
- Borders and spacing ensure a polished look.
- Transition effects on the profile image for smooth border-color changes.

## Implementation Steps

1. **Setup Event Listeners**  
   - Attach `input` event listeners to both `#nameInput` and `#descriptionInput` to update `#profileName` and `#profileDescription` dynamically.

2. **Random Border Color**  
   - Define an array of colors (e.g., `['#FF5733', '#33FF57', '#3357FF', '#FFC300', '#DAF7A6']`).
   - Attach a `click` event listener to `#profileImage` that selects a random color and applies it to the border.

3. **Interactive Updates**  
   - Ensure the input values are sanitized and displayed in real time.
   - Handle edge cases like empty inputs gracefully.

## Usage

1. Enter text in the "Name" and "Description" fields to see real-time updates on the profile card.
2. Click the profile image to randomly change its border color.

## Demo Video



https://github.com/user-attachments/assets/c9b7dc08-477c-4552-b85c-5bf41cb68c3b



## Example Output

**Profile Card Before Interaction**  
- Name: Default Name  
- Description: Default Description  

**Profile Card After Interaction**  
- Name: Updated Name  
- Description: Updated Description  
- Border Color: Randomly picked from the predefined array.  

## Acknowledgments

- Thanks to JavaScript's `Math.random` for random color generation!
- Inspiration from common card editors.
