# WebProject101 - Basic Login Page

A simple web project demonstrating basic form validation, user authentication, and user interaction using core JavaScript (HTML + JS only).

---

## ✨ Features

- **Show/Hide Password**
  - A checkbox allows users to toggle password visibility between `text` and `password` types.

- **Basic Form Validation**
  - Checks if the email and password fields are empty.
  - Shows a red error message if any field is missing.

- **Email Format Validation**
  - Validates the email using a basic regular expression (regex).
  - Shows a red error message if the entered email is invalid.

- **Password Length Validation**
  - Ensures that the password contains at least 6 characters.
  - Displays an error if the password is too short.

- **Multiple User Authentication**
  - Maintains an array of user objects (with email and password).
  - Uses a basic `for` loop to check if the entered credentials match any user.

- **Save Login Status**
  - After successful login, saves the login state (`isLoggedIn`) in `localStorage`.
  - Prevents users from needing to login again during the same browser session.

---

## 📂 Project Structure

```plaintext
/ (root folder)
├── index.html      # Main HTML structure
├── style.css       # (Optional) Styling for the page
└── script.js       # JavaScript handling login and validation


After successful login, saved "isLoggedIn": "true" in the browser's localStorage.

Success and Error Messages

Displayed different success or error messages depending on login success or failure.
