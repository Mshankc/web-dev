function validation() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('phone').value;
    const email = document.getElementById('mail').value;
    const age = document.getElementById('age').value;
    let isTrue = false;

    const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number");
            return false;
        }
    document.write("Name: " + name + "<br>");
    document.write("Phone Number: " + number + "<br>");
    document.write("Email: " + email + "<br>");
    document.write("Age: " + age + "<br>");

    // Returning false to prevent form submission for demonstration
    return false;
}