// ==========================================================
// script.js - dipakai oleh semua halaman
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
  // ---------- 1. Menu mobile ----------
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Tutup menu setelah salah satu link diklik
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- 2. Tab Visi / Misi (index.html) ----------
  var tabButtons = document.querySelectorAll(".tab-btn");
  var tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var target = button.getAttribute("data-target");

      tabButtons.forEach(function (btn) {
        var active = btn === button;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-selected", active ? "true" : "false");
      });

      tabPanels.forEach(function (panel) {
        panel.classList.toggle("active", panel.id === target);
      });
    });
  });

  // ---------- 3. Form kontak (kontak.html) ----------
  var contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Pesan berhasil dikirim!");
      contactForm.reset();
    });
  }
});
