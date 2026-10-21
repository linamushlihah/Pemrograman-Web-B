// Base URL API wilayah Indonesia.
const baseURL = "https://www.emsifa.com/api-wilayah-indonesia/v2";

// Mengambil elemen HTML yang akan dipakai.
const provinceSelect = document.getElementById("province");
const regencySelect = document.getElementById("regency");
const districtSelect = document.getElementById("district");
const villageSelect = document.getElementById("village");
const searchForm = document.getElementById("searchForm");
const searchButton = document.getElementById("searchButton");
const statusMessage = document.getElementById("status");
const resultSection = document.getElementById("result");

let selectedProvince = "";
let selectedRegency = "";
let selectedDistrict = "";
let selectedVillage = null;

// Mengambil JSON dari API dan mengembalikan bagian "data".
async function getData(endpoint) {
  const response = await fetch(`${baseURL}/${endpoint}.json`);
  if (!response.ok) throw new Error("Data gagal dimuat");
  const json = await response.json();
  return json.data;
}

// Memasukkan data ke dropdown.
function fillDropdown(dropdown, items, placeholder) {
  dropdown.innerHTML = `<option value="">${placeholder}</option>`;
  for (const item of items) {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    dropdown.appendChild(option);
  }
  dropdown.disabled = false;
}

function resetDropdown(dropdown, placeholder) {
  dropdown.innerHTML = `<option value="">${placeholder}</option>`;
  dropdown.disabled = true;
}

function showStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle("error", isError);
}

// Saat halaman dibuka, ambil semua provinsi.
async function loadProvinces() {
  try {
    const provinces = await getData("provinces");
    fillDropdown(provinceSelect, provinces, "Pilih provinsi");
    showStatus("Silakan pilih provinsi.");
  } catch (error) {
    showStatus("API tidak bisa diakses. Periksa internet lalu refresh halaman.", true);
  }
}

// Saat provinsi berubah, ambil kabupaten/kota di provinsi itu.
provinceSelect.addEventListener("change", async function () {
  const provinceId = provinceSelect.value;
  selectedProvince = provinceSelect.options[provinceSelect.selectedIndex]?.text || "";
  selectedRegency = "";
  selectedDistrict = "";
  selectedVillage = null;
  resetDropdown(regencySelect, "Memuat kabupaten/kota...");
  resetDropdown(districtSelect, "Pilih kecamatan");
  resetDropdown(villageSelect, "Pilih kelurahan/desa");
  searchButton.disabled = true;
  resultSection.hidden = true;

  if (!provinceId) {
    resetDropdown(regencySelect, "Pilih kabupaten/kota");
    return;
  }
  try {
    showStatus("Memuat kabupaten/kota...");
    const regencies = await getData(`regencies/${provinceId}`);
    fillDropdown(regencySelect, regencies, "Pilih kabupaten/kota");
    showStatus("Pilih kabupaten/kota.");
  } catch (error) {
    resetDropdown(regencySelect, "Data gagal dimuat");
    showStatus("Kabupaten/kota gagal dimuat. Coba lagi.", true);
  }
});

// Saat kabupaten/kota berubah, ambil kecamatannya.
regencySelect.addEventListener("change", async function () {
  const regencyId = regencySelect.value;
  selectedRegency = regencySelect.options[regencySelect.selectedIndex]?.text || "";
  selectedDistrict = "";
  selectedVillage = null;
  resetDropdown(districtSelect, "Memuat kecamatan...");
  resetDropdown(villageSelect, "Pilih kelurahan/desa");
  searchButton.disabled = true;
  resultSection.hidden = true;

  if (!regencyId) {
    resetDropdown(districtSelect, "Pilih kecamatan");
    return;
  }
  try {
    showStatus("Memuat kecamatan...");
    const districts = await getData(`districts/${regencyId}`);
    fillDropdown(districtSelect, districts, "Pilih kecamatan");
    showStatus("Pilih kecamatan.");
  } catch (error) {
    resetDropdown(districtSelect, "Data gagal dimuat");
    showStatus("Kecamatan gagal dimuat. Coba lagi.", true);
  }
});

// Saat kecamatan berubah, ambil desa/kelurahan yang sudah memiliki kode pos.
districtSelect.addEventListener("change", async function () {
  const districtId = districtSelect.value;
  selectedDistrict = districtSelect.options[districtSelect.selectedIndex]?.text || "";
  selectedVillage = null;
  resetDropdown(villageSelect, "Memuat kelurahan/desa...");
  searchButton.disabled = true;
  resultSection.hidden = true;

  if (!districtId) {
    resetDropdown(villageSelect, "Pilih kelurahan/desa");
    return;
  }
  try {
    showStatus("Memuat kelurahan/desa...");
    const villages = await getData(`villages/${districtId}`);
    fillDropdown(villageSelect, villages, "Pilih kelurahan/desa");
    villageSelect.dataset.items = JSON.stringify(villages);
    showStatus("Pilih kelurahan/desa, lalu klik Cari Kode Pos.");
  } catch (error) {
    resetDropdown(villageSelect, "Data gagal dimuat");
    showStatus("Kelurahan/desa gagal dimuat. Coba lagi.", true);
  }
});

// Simpan data kelurahan/desa yang dipilih.
villageSelect.addEventListener("change", function () {
  const villages = JSON.parse(villageSelect.dataset.items || "[]");
  selectedVillage = villages.find(item => item.id === villageSelect.value) || null;
  searchButton.disabled = !selectedVillage;
  resultSection.hidden = true;
});

// Tampilkan kode pos dan informasi wilayah.
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!selectedVillage) {
    showStatus("Pilih kelurahan/desa terlebih dahulu.", true);
    return;
  }

  document.getElementById("postalCode").textContent =
    selectedVillage.postal_code || "Kode pos tidak tersedia";
  document.getElementById("resultVillage").textContent = selectedVillage.name;
  document.getElementById("resultDistrict").textContent = selectedDistrict;
  document.getElementById("resultRegency").textContent = selectedRegency;
  document.getElementById("resultProvince").textContent = selectedProvince;
  resultSection.hidden = false;
  showStatus("Data wilayah berhasil ditemukan.");
});

loadProvinces();
