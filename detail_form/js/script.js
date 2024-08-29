function validation() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('mail').value;
    const age = document.getElementById('age').value;

    const namePattern = /^[A-Za-z\s]{2,}$/;
    if (!namePattern.test(name)) {
        alert("Please enter a valid name with at least 2 characters and only letters.");
        return false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const agePattern = /^(?:1[01][0-9]|120|[1-9][0-9]?)$/;
    if (!agePattern.test(age)) {
        alert("Please enter a valid age between 1 and 120.");
        return false;
    }

    document.write("Name: " + name + "<br>");
    document.write("Phone Number: " + phone + "<br>");
    document.write("Email: " + email + "<br>");
    document.write("Age: " + age + "<br>");

    return false;
}
