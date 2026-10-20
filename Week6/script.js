// Daftar contoh untuk fitur rekomendasi nama mahasiswa.
const daftarNama = [
  "Andi Pratama", "Anisa Putri", "Anwar Rizky", "Budi Santoso",
  "Citra Lestari", "Dewi Anggraini", "Dimas Saputra",
  "Fajar Ramadhan", "Nadia Putri", "Rizky Maulana", "Siti Aisyah"
];

const form = document.getElementById("registration-form");
const namaInput = document.getElementById("nama");
const suggestions = document.getElementById("suggestions");
const result = document.getElementById("result");

function tampilkanRekomendasi() {
  const keyword = namaInput.value.trim().toLowerCase();
  suggestions.innerHTML = "";
  if (!keyword) { suggestions.hidden = true; return; }

  const cocok = daftarNama.filter(n => n.toLowerCase().includes(keyword)).slice(0, 6);
  if (!cocok.length) {
    const li = document.createElement("li");
    li.textContent = "Tidak ada rekomendasi nama.";
    li.style.cursor = "default";
    suggestions.appendChild(li);
  } else {
    cocok.forEach(nama => {
      const li = document.createElement("li");
      li.textContent = nama;
      li.tabIndex = 0;
      li.setAttribute("role", "option");
      li.addEventListener("mousedown", event => {
        event.preventDefault();
        namaInput.value = nama;
        suggestions.hidden = true;
        namaInput.focus();
      });
      li.addEventListener("keydown", event => {
        if (event.key === "Enter") {
          namaInput.value = nama;
          suggestions.hidden = true;
          namaInput.focus();
        }
      });
      suggestions.appendChild(li);
    });
  }
  suggestions.hidden = false;
}

namaInput.addEventListener("input", () => {
  document.getElementById("nama-error").textContent = "";
  result.hidden = true;
  tampilkanRekomendasi();
});

document.addEventListener("click", event => {
  if (!event.target.closest(".autocomplete-wrap")) suggestions.hidden = true;
});

form.addEventListener("submit", event => {
  event.preventDefault();
  const values = {
    nama: namaInput.value.trim(),
    nim: document.getElementById("nim").value.trim(),
    matakuliah: document.getElementById("matakuliah").value,
    dosen: document.getElementById("dosen").value
  };
  const messages = {
    nama: "Nama mahasiswa wajib diisi.",
    nim: "NIM wajib diisi.",
    matakuliah: "Silakan pilih mata kuliah.",
    dosen: "Silakan pilih dosen."
  };
  let valid = true;
  Object.keys(values).forEach(key => {
    document.getElementById(key + "-error").textContent = "";
    if (!values[key]) {
      document.getElementById(key + "-error").textContent = messages[key];
      valid = false;
    }
  });
  if (!valid) { result.hidden = true; return; }

  result.innerHTML = "<strong>Data registrasi berhasil diperiksa!</strong>" +
    "Nama: " + escapeHTML(values.nama) + "<br>" +
    "NIM: " + escapeHTML(values.nim) + "<br>" +
    "Mata Kuliah: " + escapeHTML(values.matakuliah) + "<br>" +
    "Dosen: " + escapeHTML(values.dosen);
  result.hidden = false;
  suggestions.hidden = true;
});

form.addEventListener("reset", () => {
  suggestions.hidden = true;
  result.hidden = true;
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
});

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[c]);
}
