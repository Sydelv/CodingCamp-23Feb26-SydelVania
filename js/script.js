document.addEventListener("DOMContentLoaded", function () {

    // Cek apakah halaman adalah index.html
    const isHomePage =
        window.location.pathname.includes("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/");

    if (isHomePage) {
        let name = prompt("Masukkan Nama Anda:");

        if (name && name.trim() !== "") {
            document.getElementById("welcomeText").innerText =
                "Hi " + name + ", Welcome To Website";
        }
    }

});

const form = document.getElementById("messageForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nama = document.getElementById("nama").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let pesan = document.getElementById("pesan").value.trim();

        if (nama === "" || email === "" || phone === "" || pesan === "") {
            alert("Semua field wajib diisi!");
            return;
        }

        document.getElementById("outputBox").innerHTML = `
            <strong>Current time:</strong> ${new Date()} <br><br>
            <strong>Nama:</strong> ${nama} <br>
            <strong>Email:</strong> ${email} <br>
            <strong>Nomor Telepon:</strong> ${phone} <br>
            <strong>Pesan:</strong> ${pesan}
        `;
    });
}