// This file contains the JavaScript code for the QR code generator web application.

document.addEventListener('DOMContentLoaded', function() {
    const qrCodeForm = document.getElementById('qrCodeForm');
    const qrCodeInput = document.getElementById('qrCodeInput');
    const qrCodeOutput = document.getElementById('qrCodeOutput');

    qrCodeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const qrCodeValue = qrCodeInput.value;
        generateQRCode(qrCodeValue);
    });

    function generateQRCode(value) {
        qrCodeOutput.innerHTML = ''; // Clear previous QR code
        const qrCode = new QRCode(qrCodeOutput, {
            text: value,
            width: 128,
            height: 128,
        });
    }
});
// filepath: /n:/Visual code/My qrwebsite/qr-code-generator/src/scripts/app.js
document.getElementById('generateBtn').addEventListener('click', function() {
    var text = document.getElementById('qrInput').value;
    var qrCodeDiv = document.getElementById('qrCode');
    qrCodeDiv.innerHTML = ''; // Clear previous QR code
    var qrCode = new QRCode(qrCodeDiv, {
        text: text,
        width: 128,
        height: 128
    });
});