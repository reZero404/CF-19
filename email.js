function sendmail(){
    let params ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_wa3ozpk","template_2eg86jm",params).then(alert("Email Sent!!"))
}