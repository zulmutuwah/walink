// Function to generate WhatsApp link
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

    // Display the link in the input field and show the output section
    document.getElementById("whatsappLink").value = whatsappLink;
    document.getElementById("output").style.display = "block";

    // Generate QR code
    const qrCodeContainer = document.getElementById("qrCode");
    qrCodeContainer.innerHTML = ""; // Clear previous QR code if any
    new QRCode(qrCodeContainer, {
        text: whatsappLink,
        width: 128,
        height: 128,
    });
});

// Function to reset the form
document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("waForm").reset();
    document.getElementById("output").style.display = "none";
});

// Function to copy the generated link to clipboard
document.getElementById("copyBtn").addEventListener("click", function() {
    const linkField = document.getElementById("whatsappLink");
    linkField.select();
    document.execCommand("copy");
    alert("Link disalin ke clipboard!");
});
