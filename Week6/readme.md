# Form Registrasi Mahasiswa — JavaScript

Project latihan Pemrograman Web untuk membuat form registrasi mahasiswa menggunakan HTML, CSS, dan JavaScript.

## Fitur JavaScript

- **Rekomendasi Nama (Autocomplete):** Menampilkan rekomendasi nama mahasiswa berdasarkan teks yang diketik pengguna.
- **Event Listener:** Menggunakan `input`, `click`, `submit`, `reset`, `mousedown`, dan `keydown` untuk menangani interaksi pengguna.
- **Array dan Filter:** Menyimpan daftar nama contoh dalam array dan mencari nama yang cocok menggunakan `filter()` dan `includes()`.
- **Validasi Form:** Memeriksa apakah nama, NIM, mata kuliah, dan dosen sudah diisi.
- **Manipulasi DOM:** Menggunakan `getElementById()`, `createElement()`, `appendChild()`, dan `innerHTML` untuk memperbarui tampilan halaman.
- **Reset Form:** Mengosongkan input, rekomendasi nama, pesan hasil, dan pesan validasi.
- **Escape HTML:** Menggunakan fungsi `escapeHTML()` untuk mengamankan teks sebelum ditampilkan sebagai HTML.

## Teknologi

- HTML — struktur form registrasi.
- CSS — styling dan responsive design.
- JavaScript — logika, event handling, validasi, dan manipulasi DOM.

## Struktur File

```
registrasi-mahasiswa/
├── index.html
├── style.css
└── script.js
```

## Flow JavaScript

1. Daftar nama mahasiswa contoh disimpan dalam array `daftarNama`.
2. Ketika pengguna mengetik pada kolom nama, event `input` memanggil fungsi `tampilkanRekomendasi()`.
3. JavaScript mencari nama yang sesuai dengan teks input dan menampilkan hasil rekomendasi.
4. Pengguna dapat memilih nama dari daftar rekomendasi.
5. Ketika tombol Daftar ditekan, event `submit` menjalankan validasi setiap kolom.
6. Jika semua kolom terisi, data registrasi ditampilkan sebagai konfirmasi pada halaman.
7. Tombol Reset mengembalikan form ke kondisi awal.

## Catatan

Project ini merupakan latihan JavaScript dasar dengan data contoh yang dikelola di sisi browser. Data registrasi belum disimpan secara permanen dan belum terhubung ke backend atau database.
