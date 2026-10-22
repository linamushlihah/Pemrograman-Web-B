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

<img width="740" height="1476" alt="Untitled" src="https://github.com/user-attachments/assets/f5765439-e157-4f48-a54d-8643f82e28b8" />

link figma : https://www.figma.com/design/etUIQXuRdJ8GUN8AXFMx5C/Untitled?node-id=0-1&t=cbxj5YuOD6LfpUan-1 

<img width="1869" height="886" alt="image" src="https://github.com/user-attachments/assets/82b88971-8e00-4333-8cec-e34453ceacef" />

<img width="1717" height="885" alt="image" src="https://github.com/user-attachments/assets/f04a2618-d695-4455-ad4b-9f9802ea4f65" />

<img width="890" height="430" alt="image" src="https://github.com/user-attachments/assets/e04862c9-2e0f-4d38-9e9a-546d45f7403e" />

<img width="886" height="449" alt="image" src="https://github.com/user-attachments/assets/3d53db9b-58fc-4639-8d70-e0b6fc13f030" />

<img width="863" height="438" alt="image" src="https://github.com/user-attachments/assets/003ac123-a6f2-47c2-b4c4-6537b67e5e5b" />

## 4. Update design UI Landing page & Implementasi web deployment

<img width="950" height="448" alt="image" src="https://github.com/user-attachments/assets/a4d26d5a-5507-48c6-941f-e2de261a258b" />

<img width="946" height="449" alt="image" src="https://github.com/user-attachments/assets/43dc3a37-dc02-49fb-8eea-750ab2d009d1" />

<img width="947" height="448" alt="image" src="https://github.com/user-attachments/assets/4b30461b-66ab-4311-a439-e4b160979e43" />

<img width="944" height="445" alt="image" src="https://github.com/user-attachments/assets/43441b69-c2c8-495a-803e-0cd60a8bbb20" />

<img width="949" height="445" alt="image" src="https://github.com/user-attachments/assets/42287823-3c82-4439-b3c1-56fabbe18c95" />

<img width="948" height="449" alt="image" src="https://github.com/user-attachments/assets/88e47f76-14ba-40ff-9d10-2802deade5c5" />

<img width="948" height="448" alt="image" src="https://github.com/user-attachments/assets/663dd6c6-1a0d-4426-a992-171af5ec8fce" />

<img width="947" height="448" alt="image" src="https://github.com/user-attachments/assets/a4788219-1c65-4629-b5c8-7e8982310c48" />

<img width="947" height="448" alt="image" src="https://github.com/user-attachments/assets/bd99840d-0bf5-4145-9358-8a13333b4a99" />

web deploy : https://lybraryreg-063.vercel.app/login.html 





