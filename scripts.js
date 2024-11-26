// scripts.js
const canvas = document.getElementById("signature-pad");
const ctx = canvas.getContext("2d");
let isDrawing = false;

canvas.addEventListener("mousedown", () => {
    isDrawing = true;
});
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.beginPath();
});
canvas.addEventListener("mousemove", draw);

function draw(event) {
    if (!isDrawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000000";
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

function clearSignature() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("signature").value = "";
}

function saveSignature() {
    const dataURL = canvas.toDataURL();
    if (dataURL) {
        document.getElementById("signature").value = dataURL;
    }
}

// อัปเดตชื่อในวงเล็บแบบเรียลไทม์
const nameInput = document.getElementById("name");
const signatureName = document.getElementById("signature-name");
nameInput.addEventListener("input", () => {
    const name = nameInput.value.trim();
    if (name) {
        signatureName.textContent = `(${name})`;
    } else {
        signatureName.textContent = "(ชื่อผู้ป่วย)";
    }
});
