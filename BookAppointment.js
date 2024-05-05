
function bookAppointment() {
    // Open appointment.html in a new browser tab
    window.open("appointment.html", "_blank");
}
// bookAppointment.js

// Function to save appointment details
function saveAppointment(name, email, datetime, doctor) {
    // Get existing appointments from local storage or initialize as empty array
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    // Add new appointment
    appointments.push({ name, email, datetime, doctor });
    // Save updated appointments to local storage
    localStorage.setItem('appointments', JSON.stringify(appointments));
    // Notify user (You can customize this as needed)
    alert('Appointment booked successfully!');
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const datetime = document.getElementById('datetime').value;
    const doctor = document.getElementById('doctor').value;
    // Save appointment details
    saveAppointment(name, email, datetime, doctor);
    // Reset form
    document.getElementById('appointment-form').reset();
}

// Event listener for form submission
document.getElementById('appointment-form').addEventListener('submit', handleFormSubmission);


