# Custom Hooks
This repository contains a React application that allows users to manage data in Local Storage and Session Storage. It also includes a real-time clock displayed at the top-left corner of the application. The app provides functionality to add, edit, save, and delete data with user-friendly notifications for each action.

# Features

1. Manage Local Storage
2. Manage Session Storage
3. Real-Time Clock
4. User Notifications
5. Dynamic UI


# How It Works
1. Local Storage Management
  * Add New Field: Use the "Add" button to create a new input field.
  * Enter Data: Type data into the input field and click Save to store it in localStorage.
  * Edit Data: Click the Edit button to enable editing for a saved field.
  * Remove Data: Click the Remove button to delete the data from localStorage.
  * Persistence: Data saved in localStorage will remain even after a page refresh.
2. Session Storage Management
  * Add New Field: Use the "Add" button to create a new input field.
  * Enter Data: Type data into the input field and click Save to store it in sessionStorage.
  * Edit Data: Click the Edit button to enable editing for a saved field.
  * Remove Data: Click the Remove button to delete the data from sessionStorage.
  * Persistence: Data saved in sessionStorage will persist across page refreshes but will be removed when the         browser session ends.
3. Notifications
  * Success or error messages are displayed as animated pop-ups in the top-right corner.
  * ✔ Success Notification: For successful actions like save or edit.
  * ✖ Error Notification: For invalid actions like saving an empty field.
4. Real-Time Clock
  * A clock updates every second to show the current time in hh:mm:ss AM/PM format.
# Website Looks Like..
![Screenshot 2024-12-01 111755](https://github.com/user-attachments/assets/e8f87f34-da27-42b0-a98f-07f127fe41c4)

# How to Use This Repo
* Step 1: Clone the Repository or download zip file
* Step 2: Install Dependencies
  * bun or npm install
* Step 3: Start the Application
  * bun or npm run dev
* Step 4: Open in Browser

# Usage Instructions
1. Add New Data:

  * Click the Add button under Local Storage or Session Storage.
   * Enter a value in the newly created input field.
2. Save Data:

  * Click the Save button to store the data.
3. Edit Data:
  * Click the Edit button to enable editing of the input field.
  * Modify the value and click Save to update it.
4. Remove Data:
  * Click the Remove button to delete the data permanently.
5. Refresh the Page:
  * Local Storage data will remain intact and will reappear in the input fields.
  * Session Storage data will also persist across refreshes but will be cleared once the browser session ends.
