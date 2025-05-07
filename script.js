// darkmode.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-dark');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Simpan preferensi pengguna di localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'dark');
      toggle.textContent = 'Light Mode';
    } else {
      localStorage.setItem('mode', 'light');
      toggle.textContent = 'Dark Mode';
    }
  });

  // Cek preferensi mode saat halaman dimuat
  if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = 'Light Mode';
  }
});

// Fungsi untuk membuat bintang jatuh
function createFallingStars() {
  const starContainer = document.getElementById("star-container");
  
  // Membuat sejumlah bintang (misalnya 100)
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    
    // Menentukan posisi dan kecepatan acak untuk setiap bintang
    const size = Math.random() * 3 + 2; // Ukuran bintang (2px hingga 5px)
    const left = Math.random() * 100; // Posisi bintang secara horizontal (0-100%)
    const delay = Math.random() * 5; // Delay acak untuk animasi

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${left}%`;
    star.style.animationDelay = `${delay}s`;

    // Menambahkan bintang ke dalam container
    starContainer.appendChild(star);
  }
}

// Memanggil fungsi untuk membuat bintang saat halaman dimuat
window.onload = createFallingStars;

// JavaScript untuk efek teks dinamis
const texts = ["HI!", "Hola!", "Halo!", "Connect With Me!"];
let textIndex = 0;
const dynamicTextElement = document.querySelector("#dynamic-text");

function changeText() {
  dynamicTextElement.innerHTML = `<h3 class="dynamic-item">${texts[textIndex]}</h3>`;
  textIndex = (textIndex + 1) % texts.length;
}

// Ganti teks setiap 2 detik
setInterval(changeText, 2000);

// Panggil fungsi pertama kali untuk menampilkan teks pertama
changeText();

// Tunggu sampai halaman sepenuhnya dimuat
window.addEventListener('load', function () {
  // Pilih semua progress bar berdasarkan class 'progress-bar'
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(function (bar) {
    // Ambil persentase dari atribut style (contoh: width: 90%)
    const width = bar.getAttribute('data-width');
    bar.style.width = '0%'; // Set awal ke 0%

    // Animasi pengisian progress bar
    setTimeout(function () {
      bar.style.width = width; // Isi progress bar dengan nilai yang diinginkan
    }, 500); // Tunggu sedikit untuk efek visual
  });
});
