// Ambil elemen DOM
const modal = document.getElementById("mapModal");
const openBtn = document.getElementById("openMapBtn");
const closeBtn = document.getElementById("closeMapBtn");
const mainMapImage = document.getElementById("mainMapImage");

// Link / sumber gambar peta yang sudah kita buat sebelumnya
const mapImages = {
    main: "map/benua.png",
            centralis: "map/Centralis Continent.png",
    eldoria: "map/Eldoria Continent.png",
    ignaris: "map/Ignaris Continent.png",
    frostheim: "map/Frostheim Continent.png",
    sylvara: "map/Sylvara Continent.png",
    abyssal: "map/Abyssal Border Continent.png",
    forbidden: "map/The Forbidden Land.png"
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