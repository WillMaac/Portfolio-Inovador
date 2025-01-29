document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    
    fetch("https://script.google.com/macros/s/SEU_SCRIPT_ID/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("E-mail enviado com sucesso!");
    })
    .catch(error => {
        alert("Erro ao enviar e-mail.");
        console.error("Erro:", error);
    });
});