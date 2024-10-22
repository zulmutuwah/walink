// script.js

document.getElementById("generateBtn").addEventListener("click", function() {
    const phoneInput = document.getElementById("phone").value.trim();
    const messageInput = document.getElementById("message").value.trim();

    // Ensure phone number and message are not empty
    if (phoneInput === "" || messageInput === "") {
        alert("Nomor WhatsApp dan Pesan tidak boleh kosong!");
        return;
    }

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageInput);

    // Generate the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneInput}?text=${encodedMessage}`;

    // Display the link
    document.getElementById("whatsappLink").value = whatsappLink;
    document.getElementById("output").style.display = "block";
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("waForm").reset();
    document.getElementById("output").style.display = "none";
});
