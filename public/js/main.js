// Mengambil elemen toggle menu dan ikon menu di dalamnya
const toggleMenu = document.querySelector("#toggle-menu");
const toggleMenuIcon = toggleMenu.querySelector("img");
const menu = document.querySelector("#menu");

// Event listener untuk menampilkan atau menyembunyikan menu saat tombol menu di klik
toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("translate-y-[-200%]");
  changeMenuIcon();
});

// Menutup menu ketika salah satu link di dalam menu diklik
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("translate-y-[-200%]");
    changeMenuIcon();
  });
});

// Fungsi untuk mengganti ikon menu antara 'icon-menu' dan 'icon-close'
function changeMenuIcon() {
  const isContainTranslate = menu.classList.contains("translate-y-[-200%]");
  const icon = isContainTranslate ? "icon-menu" : "icon-close";
  toggleMenuIcon.src = `./images/icons/${icon}.svg`;
}

// Mengambil elemen HTML untuk toggle theme (dark/light)
const html = document.querySelector("html");
const toggleTheme = document.querySelector("#toggle-theme");
const toggleThemeIcon = toggleTheme.querySelector("img");

// Event listener untuk mengganti tema antara dark dan light saat tombol tema di klik
toggleTheme.addEventListener("click", () => {
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");
  const themeIcon = isDark ? "light" : "dark";
  toggleThemeIcon.src = `./images/icons/icon-${themeIcon}.svg`;
});

// Inisialisasi animasi AOS (Animate On Scroll) setelah halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    offset: 100,
    once: true,
  });
});

// Fungsi untuk mengaktifkan link navbar sesuai dengan bagian yang sedang terlihat
function activateNavLinksOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  // Event listener untuk mendeteksi scroll dan mengaktifkan link sesuai posisi
  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      // Mengecek apakah posisi scroll saat ini berada di dalam section tertentu
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Menambahkan/menghapus kelas aktif pada link navbar sesuai dengan section aktif
    navLinks.forEach((link) => {
      link.classList.remove("nav-link-active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("nav-link-active");
      }
    });
  });
}

// Memanggil fungsi untuk mengaktifkan link navbar saat halaman di-scroll
activateNavLinksOnScroll();

const texts = ["Web Developer", "UI/UX Designer", "Frontend Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector("#typewriter-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 100);
  }
}

window.onload = type;
