// Data merk untuk setiap jenis produk.
const daftarMerk = {
  desktop: ["Acer", "ASUS", "Dell", "HP", "Lenovo"],
  laptop: ["Acer", "ASUS", "Dell", "HP", "Lenovo", "Apple"],
  smartphone: ["Apple", "Samsung", "Xiaomi", "OPPO", "vivo", "Realme"]
};

// Ambil elemen dropdown dari HTML.
const jenisProduk = document.getElementById("jenisProduk");
const merkProduk = document.getElementById("merkProduk");
const hasil = document.getElementById("hasil");

// Saat jenis produk dipilih, ubah pilihan merk.
jenisProduk.addEventListener("change", function () {
  const jenisDipilih = jenisProduk.value;

  // Kosongkan pilihan merk sebelumnya.
  merkProduk.innerHTML = '<option value="">Pilih Merk</option>';
  hasil.textContent = "";

  // Kalau belum memilih jenis produk, dropdown merk dinonaktifkan.
  if (jenisDipilih === "") {
    merkProduk.disabled = true;
    return;
  }

  // Ambil daftar merk sesuai jenis produk.
  const merk = daftarMerk[jenisDipilih];

  // Tambahkan setiap merk sebagai pilihan dropdown.
  for (let i = 0; i < merk.length; i++) {
    const option = document.createElement("option");
    option.value = merk[i];
    option.textContent = merk[i];
    merkProduk.appendChild(option);
  }

  merkProduk.disabled = false;
});

// Saat merk dipilih, tampilkan pilihan pengguna.
merkProduk.addEventListener("change", function () {
  if (merkProduk.value === "") {
    hasil.textContent = "";
    return;
  }

  hasil.textContent =
    "Kamu memilih " + merkProduk.value +
    " untuk jenis produk " +
    jenisProduk.options[jenisProduk.selectedIndex].text + ".";
});
