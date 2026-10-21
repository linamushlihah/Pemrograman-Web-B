# LibraryReg : Studi Kasus Perpustakaan - ETS

## Rancangan sistem 
---

Nama : Lina Mushlihah

NRP  : 5025251063

---

## 1. Deskripsi dan ruang lingkup pekerjaan

Sistem pengeloaan perpustakaan yang melayani pendaftaran anggota, informasi layanan perpustakaan hingga detail informasi seputar perpustakaan.

| Item                | Detail                                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| **Nama Produk**     | Website LibraryReG                                                          |
| **Jenis Produk**    | Website Informasi & Pendaftaran anggota perpustakaan                                                                    |
| **Target Pengguna** | Petugas perpustakaan, Anggota perpustakaan, Mahasiswa / Calon pendaftar anggota perpustakaan                                                   |
| **Platform**        | Web Responsive                                                                                        |
| **Teknologi**       | HTML, CSS, JavaScript                                                                                 |
| **Deployment**      | Vercel                                                                                                |
| **Tujuan**          | Menyediakan informasi mengenai perpustakaan, menu navigasi yang terstruktur, formulir pendaftaran anggota secara online, dan halaman pengelolaan data anggota untuk petugas perpustakaan |

---

### Ruang lingkup pekerjaan

* Menampilkan Header dengan logo dan nama perpustakaan.
*	Menampilkan Hero section dengan judul, deskripsi, dan tombol ajakan.
*	Menyediakan Informasi layanan perpustakaan.
*	Menampilkan Keunggulan dan fasilitas perpustakaan.
*	Menampilkan Statistik ilustratif jumlah koleksi dan anggota.
*	Menyediakan Footer berisi kontak dan informasi jam layanan.
* Menyediakan menu navigasi ( Beranda, Tentang Perpustakaan, Layanan, Daftar Anggota, Pendaftaran Anggota, Login Petugas (simulasi antarmuka)
* Menyediakan Formulir pendaftaran anggota berisi Nama lengkap, NIM/NIP, Program studi, Alamat, Nomor telepon, Email, dan Jenis keanggotaan (mahasiswa, dosen, atau tenaga kependidikan)
* Menyediakan halaman khusus pengelolaan anggota
* Membuat website yang dapat digunakan pada desktop maupun mobile.
* Menerapkan HTML, CSS, dan JavaScript dalam sebuah project website.
* Melakukan deployment website agar dapat diakses secara online.
---


## 2. Rancangan halaman dan struktur menu 

Struktur website yang dibuat:

```text
Website LibraryReg
│
├── Landing section
│   ├── Hero Section
│   ├── Informasi layanan perpustakaan
│   ├── Keunggulan dan fasilitas
│   ├── Statistik ilustratif jumlah koleksi dan anggota.
│   └── Footer berisi kontak dan informasi jam layanan.
│
├── Form Pendaftaran Anggota
│  └── Input Nama, NIM/NIP, Program studi, Alamat, Nomor telepon, Email, Jenis keanggotaan
│
└── Halaman pengelolaan Anggota (Daftar Anggota)
    ├── Tabel Daftar anggota
    ├── Pecarian anggota berdasarkan nama/ NIM
    ├── Melihat dan mengedit informasi anggota
    └── Menghapus data dengan dialog konfirmasi.
```

---

### Functional Requirements

#### FR-01 — Landing page

Halaman Beranda harus menyediakan:

* Header dan navigation bar.
* Logo Perpustakaan
* Hero section.
* Judul website.
* Informasi layanan perpustakaan.
* Keunggulan dan fasilitas perpustakaan.
* Statistik ilustratif jumlah koleksi dan anggota.
* Footer berisi kontak dan informasi jam layanan

#### FR-02 — Navigasi

Navigation bar harus menyediakan akses menuju:

* Beranda
* Tentang perpustakaan
* Layanan
* Daftar anggota
* Pendaftaran Anggota
* Login Petugas

Navigasi juga harus dapat menyesuaikan tampilan pada perangkat mobile.

#### FR-03 — Form Pendaftaran

Website menerima input data terkait form pendaftaran, diantaranya:

* Nama lengkap
* NIM/NIP
* Program studi
* Alamat
* Nomor telepon
* Email
* Jenis keanggotaan: mahasiswa, dosen, atau tenaga kependidikan

Formulir memiliki validasi kolom wajib, format email, dan keunikan nomor induk. Setelah berhasil, data ditambahkan ke daftar anggota pada sisi front end.


#### FR-04 — Daftar Anggota

Halaman Jurusan harus menampilkan:

* Menampilkan tabel daftar anggota.
* Mencari anggota berdasarkan nama atau NIM/NIP.
* Melihat detail anggota.
* Mengedit data anggota.
* Menghapus data dengan dialog konfirmasi.
* Menampilkan notifikasi keberhasilan atau kesalahan.
* Menyimpan data pada localStorage agar tetap tersedia setelah halaman dimuat ulang di browser yang sama.
  
---

### Non-Functional Requirements

#### Responsive

Website harus dapat menyesuaikan tampilan pada:

* Desktop
* Tablet
* Mobile

#### Usability

* Navigasi mudah dipahami.
* Informasi disusun berdasarkan halaman yang jelas.
* Tombol dan link dapat digunakan dengan mudah.
* Teks dapat dibaca dengan nyaman.

#### Visual

Informasi website mudah dibaca  dan tujuan penggunaannya tercapai. 

#### Performance

Website dibuat menggunakan HTML, CSS, dan JavaScript tanpa framework sehingga dapat dijalankan secara langsung melalui browser.

#### Accessibility

* Setiap gambar memiliki `alt`.
* Struktur heading digunakan secara berurutan.
* Kontras warna diperhatikan agar teks tetap mudah dibaca.

---

### Teknologi yang Digunakan

#### Frontend

* HTML5
* CSS3
* JavaScript

#### Version Control

* Git
* GitHub

#### Deployment

* Vercel

Website tidak menggunakan backend atau database pada versi saat ini.

---

## 3. Design UI Landing Page












--- 

### Struktur Project

```text
Week3/
│
├── image/
│   ├── kepala-sekolah.jpg
│   ├── logo.png
│   ├── sekolah-aerial.jpg
│   └── sekolah.jpg
│
├── index.html
├── jurusan.html
├── kontak.html
├── script.js
├── style.css
└── Readme.md
```

### `index.html`

Berfungsi sebagai halaman utama website dan menampilkan hero, sambutan kepala sekolah, informasi sekolah, serta visi dan misi.

### `jurusan.html`

Berisi informasi jurusan dan tabel jumlah siswa.

### `kontak.html`

Berisi informasi kontak dan form kontak.

### `style.css`

Mengatur tampilan, layout, warna, typography, card, tabel, form, serta responsive design.

### `script.js`

Mengatur interaksi seperti mobile navigation, tab Visi/Misi, dan simulasi pengiriman form.

### `image/`

Menyimpan aset gambar yang digunakan dalam website.

---

# 10. Prioritas Fitur

### MVP / Fitur Utama

* Beranda
* Profil/informasi sekolah
* Sambutan kepala sekolah
* Visi & Misi
* Jurusan
* Tabel jumlah siswa
* Kontak
* Form kontak
* Responsive design
* Navigation antar halaman

### Pengembangan Berikutnya

Jika website dikembangkan lebih lanjut, beberapa fitur yang dapat ditambahkan adalah:

* Database sekolah.
* Form kontak yang benar-benar mengirim pesan.
* Halaman berita sekolah.
* Galeri kegiatan.
* Informasi PPDB.
* Integrasi Google Maps.
* Sistem admin untuk mengelola konten.
* Search.
* Backend dan database.

Ini mirip konsep **"Pengembangan Berikutnya"** pada PRD dosen, jadi fitur yang belum dibuat tidak perlu dipaksakan masuk sebagai fitur produk sekarang. Contoh dosen juga memisahkan fitur MVP dengan pengembangan berikutnya seperti admin dashboard, database, search, API, dan integrasi lainnya. 

---

# 11. User Flow

### Pengunjung Umum

```text
        Pengunjung
             │
             ▼
          Beranda
        ┌────┼────┐
        ▼    ▼    ▼
     Profil Jurusan Kontak
        │     │      │
        ▼     ▼      ▼
    Visi/Misi  Info  Form
    Kepala     Jurusan Kontak
    Sekolah
```

## Acceptance Criteria

Website dinyatakan memenuhi kebutuhan apabila:

* [x] Halaman Beranda dapat diakses.
* [x] Halaman Jurusan dapat diakses.
* [x] Halaman Kontak dapat diakses.
* [x] Navigation berfungsi.
* [x] Logo dan gambar sekolah dapat ditampilkan.
* [x] Informasi sekolah tersedia.
* [x] Visi dan Misi dapat ditampilkan.
* [x] Informasi jurusan tersedia.
* [x] Tabel jumlah siswa tersedia.
* [x] Form kontak dapat digunakan.
* [x] Website memiliki footer.
* [x] Website responsive.
* [x] Tidak terdapat broken link pada navigasi.
* [x] Website dapat dijalankan secara lokal.
* [x] Source code tersimpan di GitHub.
* [x] Website berhasil di-deploy menggunakan Vercel.


---

## Output Project

Output akhir dari project ini adalah:

1. **Website Profil SMAIT Ihsanul Fikri Mungkid**
2. **Source Code HTML, CSS, dan JavaScript**
3. **GitHub Repository**
4. **README.md**
5. **Website hasil deployment pada Vercel**
6. **Dokumentasi project**

---

source web : https://smaitif-boarding-school.vercel.app

Web sekolah asli : https://smait.ihsanulfikri.sch.id

