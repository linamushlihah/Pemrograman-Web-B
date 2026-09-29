# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Website Profil SMAIT Ihsanul Fikri Mungkid
---

Nama : Lina Mushlihah

NRP  : 5025251063

---

## 1. Informasi Produk

| Item                | Detail                                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| **Nama Produk**     | Website Profil SMAIT Ihsanul Fikri Mungkid                                                            |
| **Jenis Produk**    | Website Informasi & Profil Sekolah                                                                    |
| **Target Pengguna** | Siswa, calon siswa, orang tua, guru, dan masyarakat                                                   |
| **Platform**        | Web Responsive                                                                                        |
| **Teknologi**       | HTML, CSS, JavaScript                                                                                 |
| **Deployment**      | Vercel                                                                                                |
| **Tujuan**          | Menyediakan informasi dasar mengenai SMAIT Ihsanul Fikri Mungkid secara terstruktur dan mudah diakses |

---

## 2. Latar Belakang

Website sekolah dapat menjadi salah satu media untuk memperkenalkan identitas dan informasi sekolah kepada masyarakat. Informasi seperti profil sekolah, sambutan kepala sekolah, visi dan misi, jurusan, serta kontak dapat disampaikan melalui sebuah website agar lebih mudah diakses.

Oleh karena itu, dibuat website profil **SMAIT Ihsanul Fikri Mungkid** yang menampilkan informasi dasar sekolah dengan tampilan yang sederhana, informatif, dan responsive.

Desain website dibuat dengan mengambil inspirasi dari identitas visual SMAIT Ihsanul Fikri Mungkid, terutama penggunaan warna hijau serta foto lingkungan sekolah.

---

## 3. Tujuan Produk

Produk ini memiliki beberapa tujuan:

* Menampilkan identitas dan informasi dasar sekolah.
* Menampilkan sambutan kepala sekolah.
* Menampilkan visi dan misi sekolah.
* Menampilkan informasi jurusan yang tersedia.
* Menampilkan data jumlah siswa dalam bentuk tabel.
* Menyediakan halaman kontak sekolah.
* Menyediakan form kontak untuk interaksi pengguna.
* Membuat website yang dapat digunakan pada desktop maupun mobile.
* Menerapkan HTML, CSS, dan JavaScript dalam sebuah project website.
* Melakukan deployment website agar dapat diakses secara online.

---

## 4. Target Pengguna

### Pengunjung Umum

Mengakses informasi dasar mengenai sekolah, jurusan, dan kontak.

### Calon Siswa

Mencari informasi mengenai sekolah dan pilihan jurusan yang tersedia.

### Orang Tua

Mendapatkan informasi mengenai profil dan program pendidikan sekolah.

### Siswa

Mengakses informasi sekolah dan jurusan melalui website.

---

# 5. Struktur Website

Struktur website yang dibuat:

```text
Website SMAIT Ihsanul Fikri Mungkid
│
├── Beranda
│   ├── Hero Section
│   ├── Sambutan Kepala Sekolah
│   ├── Tentang Sekolah
│   └── Visi & Misi
│
├── Jurusan
│   ├── IPA Reguler
│   ├── IPA Tahfidz
│   ├── IPS Reguler
│   ├── IPS Tahfidz
│   └── Tabel Jumlah Siswa
│
└── Kontak
    ├── Informasi Kontak
    └── Form Kontak
```

Struktur ini dibuat lebih sederhana dibandingkan struktur website sekolah pada PRD contoh dosen karena project yang dibuat berfokus pada **website profil sekolah sederhana**.

---

# 6. Functional Requirements

## FR-01 — Beranda

Halaman Beranda harus menyediakan:

* Header dan navigation bar.
* Logo sekolah.
* Hero section.
* Nama sekolah.
* Tagline **"Lead Globally Act Locally"**.
* Foto sekolah.
* Sambutan kepala sekolah.
* Informasi singkat mengenai sekolah.
* Visi dan Misi.
* Footer.

## FR-02 — Navigasi

Navigation bar harus menyediakan akses menuju:

* Beranda
* Jurusan
* Kontak

Navigasi juga harus dapat menyesuaikan tampilan pada perangkat mobile.

## FR-03 — Informasi Sekolah

Website menampilkan informasi dasar mengenai sekolah, termasuk:

* Foto sekolah.
* Informasi singkat sekolah.
* Foto kepala sekolah.
* Sambutan kepala sekolah.
* Visi sekolah.
* Misi sekolah.

## FR-04 — Jurusan

Halaman Jurusan harus menampilkan:

* Nama jurusan.
* Deskripsi masing-masing jurusan.
* Informasi program reguler dan tahfidz.
* Daftar informasi menggunakan list.
* Tabel jumlah siswa.

Jurusan yang ditampilkan meliputi:

* IPA Reguler
* IPA Tahfidz
* IPS Reguler
* IPS Tahfidz

## FR-05 — Kontak

Halaman Kontak harus menampilkan informasi kontak sekolah serta menyediakan form yang terdiri dari:

* Nama.
* Email.
* Pesan.
* Tombol kirim.

Form dapat memberikan feedback kepada pengguna setelah tombol kirim ditekan.

**Catatan:** Pada versi saat ini, form masih berupa simulasi dan belum terhubung dengan database atau layanan email.

---

# 7. Non-Functional Requirements

### Responsive

Website harus dapat menyesuaikan tampilan pada:

* Desktop
* Tablet
* Mobile

### Usability

* Navigasi mudah dipahami.
* Informasi disusun berdasarkan halaman yang jelas.
* Tombol dan link dapat digunakan dengan mudah.
* Teks dapat dibaca dengan nyaman.

### Visual

Website menggunakan identitas visual yang terinspirasi dari SMAIT Ihsanul Fikri Mungkid, dengan warna utama hijau dan penggunaan foto sekolah sebagai elemen visual.

### Performance

Website dibuat menggunakan HTML, CSS, dan JavaScript tanpa framework sehingga dapat dijalankan secara langsung melalui browser.

### Accessibility

* Setiap gambar memiliki `alt`.
* Struktur heading digunakan secara berurutan.
* Kontras warna diperhatikan agar teks tetap mudah dibaca.

---

# 8. Teknologi yang Digunakan

### Frontend

* HTML5
* CSS3
* JavaScript

### Version Control

* Git
* GitHub

### Deployment

* Vercel

Website tidak menggunakan backend atau database pada versi saat ini.

---

# 9. Struktur Project

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

### Contoh Flow Calon Siswa

```text
Beranda
   ↓
Informasi Sekolah
   ↓
Jurusan
   ↓
Melihat Pilihan Jurusan
   ↓
Kontak
```

---

# 12. Acceptance Criteria

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

# 13. Output Project

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
