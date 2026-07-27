// Ambil elemen DOM
const modal = document.getElementById("mapModal");
const openBtn = document.getElementById("openMapBtn");
const closeBtn = document.getElementById("closeMapBtn");
const mainMapImage = document.getElementById("mainMapImage");

// Link / sumber gambar peta yang sudah kita buat sebelumnya
const mapImages = {
    main: "file:///D:/data%20rafi/Novel/fantasi/map/benua.png",
    centralis: "file:///D:/data%20rafi/Novel/fantasi/map/Centralis%20Continent.png",
    eldoria: "file:///D:/data%20rafi/Novel/fantasi/map/Eldoria%20Continent.png",
    ignaris: "file:///D:/data%20rafi/Novel/fantasi/map/Ignaris%20Continent.png",
    frostheim: "file:///D:/data%20rafi/Novel/fantasi/map/Frostheim%20Continent.png",
    sylvara: "file:///D:/data%20rafi/Novel/fantasi/map/Sylvara%20Continent.png",
    abyssal: "file:///D:/data%20rafi/Novel/fantasi/map/Abyssal%20Border%20Continent.png",
    forbidden: "file:///D:/data%20rafi/Novel/fantasi/map/The%20Forbidden%20Land.png"
};

// Ketika tombol MAP diklik, buka modal
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    mainMapImage.src = mapImages.main; // Tampilkan peta utama saat pertama dibuka
});

// Ketika tombol 'X' diklik, tutup modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Tutup modal jika user klik di luar area modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Fungsi untuk mengganti gambar peta sesuai tombol benua yang dipilih
function showContinent(continentName) {
    if (mapImages[continentName]) {
        mainMapImage.src = mapImages[continentName];
    }
}