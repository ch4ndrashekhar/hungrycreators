function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;

    // Construct the resume output
    var resumeOutput = `
        <h2>Resume Output</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Work Experience:</strong> ${experience}</p>
    `;

    // Open a new window
    var newWindow = window.open();

    // Write the resume output to the new window
    newWindow.document.write(resumeOutput);
}