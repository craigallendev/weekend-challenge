document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const dob = urlParams.get('dob');
    const location = urlParams.get('location');
    const email = urlParams.get('email');

    if (name && dob && location && email) {
        const output = `
            <strong>Name:</strong> ${name}<br>
            <strong>Date of Birth:</strong> ${dob}<br>
            <strong>Location:</strong> ${location}<br>
            <strong>Email Address:</strong> ${email}
        `;

        document.getElementById('output').innerHTML = output;
    }

    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const location = document.getElementById('location').value;
        const email = document.getElementById('email').value;

        const output = `
            <strong>Name:</strong> ${name}<br>
            <strong>Date of Birth:</strong> ${dob}<br>
            <strong>Location:</strong> ${location}<br>
            <strong>Email Address:</strong> ${email}
        `;

        document.getElementById('output').innerHTML = output;
    });
});
