function tampilkanWaktu() {
    const now = new Date();
    document.getElementById("waktu").innerHTML = now.toLocaleString();
}

setInterval(tampilkanWaktu, 1000);