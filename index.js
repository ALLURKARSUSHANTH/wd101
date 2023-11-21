document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let dob = new Date(document.getElementById('dob').value);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 18 || age > 55) {
        alert('Age must be between 18 and 55');
        return;
    }

    let terms = document.getElementById('terms').checked;

    let row = `<tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${dob}</td>
        <td>${terms ? 'Yes' : 'No'}</td>
    </tr>`;

    document.getElementById('dataTable').getElementsByTagName('tbody')[0].innerHTML += row;
});

