🌐 Dynamic URL Generator with Query Parameters
This project enables users to generate and share URLs dynamically by adding query parameters based on form input. With each input, the URL updates to reflect the user’s selections, creating a shareable link.

📋 Acceptance Criteria
Initial Setup: The webpage should display an h3 element with the text:

arduino
Copy code
https://localhost:8080/
Form Interaction:

When the user fills out the form and clicks the Submit button, the text in the h3 element should update to reflect the URL with query parameters based on user input.
If the form inputs change, clicking the Submit button again will refresh the h3 element with the new URL.
Dynamic URL: The URL should adapt to include any query parameters provided by the user.

🛠️ Setup Instructions
HTML Structure:

Create an HTML form containing input fields for each parameter you want to include in the URL.
Add a submit button to trigger the URL update.
Include an h3 element where the generated URL will be displayed.
JavaScript Logic:

Use JavaScript to capture the form input values.
Construct the URL based on these values, appending them as query parameters.
Update the h3 element to display the modified URL when the submit button is clicked.
URL Display:

JavaScript should update the h3 element with the base URL https://localhost:8080/ and append query parameters based on user input.
🧩 Features
Real-Time URL Generation: The page will dynamically generate and display the updated URL based on form input.
User-Friendly Sharing: Users can easily copy the generated URL with their specified parameters.
📽️ Demo
Refer to the attached image for an example of how the URL updates dynamically with various form inputs.![sharable](https://github.com/user-attachments/assets/d9810d04-6b88-4db0-8dcf-16dc472ebdd4)
