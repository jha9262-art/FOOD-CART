document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let role = document.getElementById("role").value;

        alert(`Thank you, ${name}! You have registered as a ${role}.`);
    });
});