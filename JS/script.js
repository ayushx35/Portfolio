function SendMail() {
    // Collect form data into params object
    var params = {
        first_name: document.getElementById("firstname").value,
        last_name: document.getElementById("lastname").value,
        email_id: document.getElementById("email").value,  // Use consistent casing for variables
        contact_no: document.getElementById("number").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_gqx3n4b";  // Your actual service ID
    const templateID = "template_60bayhc";  // Your actual template ID

    // Send the email using emailjs
    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            alert("Success! Your message has been sent. Status: " + response.status);
        })
        .catch(function (error) {
            alert("Failed to send email. Error: " + JSON.stringify(error));
        });
}
