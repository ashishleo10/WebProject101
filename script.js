
'use strict';
/*
// STEP 1: Select the login form and listen for the submit event
document.getElementById('loginForm').addEventListener('submit', (event) => {
     event.preventDefault(); // STEP 2: Stop the form from refreshing the page (important for SPA behavior)

    // STEP 3: Grab the email and password entered by the user
     let email = document.getElementById('email').value;
     let password = document.getElementById('password').value;
    
     // STEP 4: Define the correct (valid) email and password
     const validEmail = 'user@example.com';
     const validPassword = 'password123';

    // STEP 5: Compare user input with valid credentials
     if (email === validEmail && password === validPassword ){
        // STEP 6A: If login is successful, show a success message
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerText = 'Login successful!';
     } else{
        // STEP 6B: If login fails, show an error message
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerText = 'Invalid email or password';
     }

})
*/

// Show/Hide Password Feature (Beginner-friendly)

document.querySelector('#showPassword').addEventListener('change', function() {
    const passwordInput = document.querySelector('#password');
    const checkbox = document.querySelector('#showPassword');
    console.log(checkbox.checked); // checked function Retruns a Bollean value
  
    if (checkbox.checked) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });

// STEP 1: Select the login form and listen for the submit event

document.querySelector('#loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    let email = document.querySelector('#email').value.trim(); // Trim removes any extra space
    console.log(email);
    let password = document.querySelector('#password').value.trim();
    console.log(password);

    //const validEmail = 'user@example.com';
    //const validPassword = 'password123';
    const users = [
        { email: 'user1@example.com', password: 'pass123'},
        { email: 'user2@example.com', password: 'pass1234'},
        { email: 'user3@example.com', password: 'pass1235'},
    ]

    console.log(users);

// Check if fields are empty

    if(email === '' || password === '' )
    {
        document.querySelector('#message').style.color = 'red';
        document.querySelector('#message').innerText = 'Please fill in both email and password.';
        return;

    }

    //Check email format using a simple regex

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // .test() is used with regular expressions to check if a string matches a pattern
    if(!emailPattern.test(email)){
        document.querySelector('#message').style.color = 'red';
        document.querySelector('#message').innerText = 'Please enter a valid email address.';
        return;
    } 
    
    // Check the password length 
    if (password.length < 6 ){
        document.querySelector('#message').style.color = 'red';
        document.querySelector('#message').innerText = 'Password must be at least 6 characters.'
        return;
    }

/*
    if (email === validEmail && password === validPassword ){
        // STEP 6A: If login is successful, show a success message
        document.querySelector('#message').style.color = 'green';
        document.querySelector('#message').innerText = 'Login successful!'; 
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
    } else{
        // STEP 6B: If login fails, show an error message
        document.querySelector('#message').style.color = 'red';
        document.querySelector('#message').innerText = 'Invalid email or password';
         }
*/

// check if already logged in as the same user 

if (localStorage.getItem('isLoggedIn') === 'true' && localStorage.getItem('loggedInUser') === email){
    document.querySelector('#message').style.color = 'green';
    document.querySelector('#message').innerText = `You are already logged in as ${email}. No need to login again.`
    return;
}


// Check if entered credentials match any user

let userFound = false ;
for(let i=0; i<users.length; i++){
    if (users[i].email === email && users[i].password === password){
        userFound = true ;
        break;
    }
}


// Print the Message for sucessful login
if (userFound){
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUser', email);
    document.querySelector('#message').style.color = 'green';
    document.querySelector('#message').innerText = 'Login successful!';
    document.querySelector('#email').value = '';
    document.querySelector('#password').value = '';
}else{
    document.querySelector('#message').style.color = 'red';
    document.querySelector('#message').innerText = 'Invalid email or password.'; 
}

})


