
// Get references to the buttons and modal elements
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const modalTitle = document.getElementById("modalTitle");
const loginForm = document.getElementById("loginForm");

// Show the login modal when the Login button is clicked
loginBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link action
    modal.style.display = "block"; // Show the modal
    modalTitle.textContent = "Login"; // Change the title
    loginForm.reset(); // Reset form fields
});

// Show the signup modal when the Sign Up button is clicked
signupBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link action
    modal.style.display = "block"; // Show the modal
    modalTitle.textContent = "Sign Up"; // Change the title
    loginForm.reset(); // Reset form fields (if any)
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function() {
    modal.style.display = "none"; // Hide the modal
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
});

// Handle form submission
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById("email").value;
    const Phonenumber = document.getElementById("phonenbr").value;
    const name=document.getElementById("name").value;

    alert(`Logging in with email: ${email} , Phone number:${ Phonenumber} and name: ${name}`);

    // Close the modal after submission
    modal.style.display = "none";
});
