document.addEventListener('DOMContentLoaded', () => {
  const $ = (s, root = document) => root.querySelector(s),
    $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const STORE = 'libraryreg_members_v1',
    DEMO = 'libraryreg_demo_seeded_v1';

  function readMembers() {
    try {
      return JSON.parse(localStorage.getItem(STORE) || '[]');
    } catch {
      return [];
    }
  }

  function writeMembers(items) {
    localStorage.setItem(STORE, JSON.stringify(items));
  }

  function showToast(message) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => el.classList.remove('show'), 3500);
  }

  // Navbar Toggle Mobile
  const navToggle = $('#navToggle'),
    navMenu = $('#navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    $$('a', navMenu).forEach(a => a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Sidebar Toggle Admin Panel
  const sidebarToggle = $('#sidebarToggle'),
    sidebar = $('#sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }

  // Seed data demonstrasi otomatis pada kunjungan pertama
  if (!localStorage.getItem(DEMO)) {
    const demo = [
      { id: 'demo-1', nama: 'Andi Pratama', nomorInduk: '230101001', programStudi: 'Informatika', jenis: 'Mahasiswa', telepon: '081234567890', email: 'andi@mail.com', alamat: 'Surabaya', demo: true, createdAt: new Date().toISOString() },
      { id: 'demo-2', nama: 'Marry Hanniette', nomorInduk: '230101002', programStudi: 'Sistem Informasi', jenis: 'Mahasiswa', telepon: '081234567891', email: 'marriette@mail.com', alamat: 'Surabaya', demo: true, createdAt: new Date().toISOString() },
      { id: 'demo-3', nama: 'Budi Santoso', nomorInduk: '19881234', programStudi: 'Informatika', jenis: 'Dosen', telepon: '081234567892', email: 'budi@mail.com', alamat: 'Surabaya', demo: true, createdAt: new Date().toISOString() },
      { id: 'demo-4', nama: 'Raya Tonatu', nomorInduk: '230101003', programStudi: 'Manajemen', jenis: 'Mahasiswa', telepon: '081234567893', email: 'araya@mail.com', alamat: 'Surabaya', demo: true, createdAt: new Date().toISOString() },
      { id: 'demo-5', nama: 'Niki Zefanya', nomorInduk: '19890104', programStudi: 'Administrasi', jenis: 'Tenaga Kependidikan', telepon: '081234567894', email: 'nzky@mail.com', alamat: 'Surabaya', demo: true, createdAt: new Date().toISOString() }
    ];
    if (!localStorage.getItem(STORE)) writeMembers(demo);
    localStorage.setItem(DEMO, 'yes');
  }

  // Penanganan Formulir Pendaftaran Anggota Baru
  const form = $('#registrationForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) {
        showToast('Periksa kembali kolom yang wajib diisi.');
        return;
      }

      const data = Object.fromEntries(new FormData(form).entries());
      data.nama = data.nama.trim();
      data.nomorInduk = data.nomorInduk.trim();
      data.email = data.email.trim().toLowerCase();
      data.id = 'member-' + Date.now();
      data.createdAt = new Date().toISOString();

      if (!/^\S+@\S+\.\S+$/.test(data.email)) {
        showToast('Format email belum valid.');
        $('#email').focus();
        return;
      }
      if (data.telepon.replace(/\D/g, '').length < 8) {
        showToast('Nomor telepon terlalu pendek.');
        $('#telepon').focus();
        return;
      }

      const members = readMembers();
      if (members.some(m => m.nomorInduk.toLowerCase() === data.nomorInduk.toLowerCase())) {
        showToast('NIM/NIP sudah terdaftar. Gunakan nomor induk yang berbeda.');
        $('#nomorInduk').focus();
        return;
      }

      members.push(data);
      writeMembers(members);
      form.reset();
      showToast('Pendaftaran berhasil disimpan! Membuka daftar anggota…');
      setTimeout(() => location.href = 'memberlist.html', 1000);
    });

    form.addEventListener('reset', () => setTimeout(() => {
      form.querySelectorAll('input,textarea,select').forEach(el => el.setCustomValidity(''));
    }, 0));
  }

  // Penanganan Halaman Tabel Panel Admin
  const rows = $('#memberRows');
  if (rows) {
    const search = $('#searchMember'),
      filter = $('#filterJenis'),
      sort = $('#sortMembers'),
      clearDemoBtn = $('#clearDemo');

    function render() {
      let members = readMembers();
      const term = (search.value || '').toLowerCase().trim(),
        kind = filter.value;

      // Penyaringan data
      members = members.filter(m =>
        (!kind || m.jenis === kind) &&
        [m.nama, m.nomorInduk, m.email, m.programStudi, m.telepon].some(v =>
          (v || '').toLowerCase().includes(term)
        )
      );

      // Pengurutan data
      if (sort.value === 'name') {
        members.sort((a, b) => a.nama.localeCompare(b.nama, 'id'));
      } else {
        members.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
      }

      // Memperbarui widget statistik angka di atas tabel
      if ($('#totalMembers')) $('#totalMembers').textContent = readMembers().length;
      if ($('#totalStudents')) $('#totalStudents').textContent = readMembers().filter(m => m.jenis === 'Mahasiswa').length;
      if ($('#totalLecturers')) $('#totalLecturers').textContent = readMembers().filter(m => m.jenis === 'Dosen').length;
      if ($('#totalStaff')) $('#totalStaff').textContent = readMembers().filter(m => m.jenis === 'Tenaga Kependidikan').length;
      if ($('#tableInfo')) $('#tableInfo').textContent = `Menampilkan ${members.length} dari ${readMembers().length} anggota`;

      rows.innerHTML = '';
      if (!members.length) {
        rows.innerHTML = '<tr><td colspan="8"><div class="empty-state">Tidak ada anggota yang cocok dengan pencarian.</div></td></tr>';
        return;
      }

      // Render baris tabel
      members.forEach((m, i) => {
        const tr = document.createElement('tr');
        const values = [i + 1, m.nama, m.nomorInduk, m.programStudi, m.jenis, m.telepon, m.email];

        values.forEach((v, j) => {
          const td = document.createElement('td');
          if (j === 1) {
            td.className = 'member-name';
            td.textContent = v;
          } else if (j === 4) {
            const pill = document.createElement('span');
            pill.className = 'type-pill';
            pill.textContent = v;
            td.append(pill);
          } else {
            td.textContent = v || '—';
          }
          tr.append(td);
        });

        // Tombol Aksi (Lihat, Edit, Hapus)
        const action = document.createElement('td'),
          wrap = document.createElement('div');
        wrap.className = 'row-actions';

        [['Lihat', 'view', '◉'], ['Edit', 'edit', '✎'], ['Hapus', 'delete', '×']].forEach(([label, cls, icon]) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'icon-btn ' + cls;
          btn.textContent = icon;
          btn.title = label + ' ' + m.nama;
          btn.setAttribute('aria-label', label + ' ' + m.nama);
          btn.addEventListener('click', () => {
            if (cls === 'view') viewMember(m);
            if (cls === 'edit') editMember(m);
            if (cls === 'delete') deleteMember(m);
          });
          wrap.append(btn);
        });

        action.append(wrap);
        tr.append(action);
        rows.append(tr);
      });
    }

    // Event listener untuk filter, sort, dan search box
    if (search) search.addEventListener('input', render);
    if (filter) filter.addEventListener('change', render);
    if (sort) sort.addEventListener('change', render);

    // Tombol hapus data demo bawaan awal
    if (clearDemoBtn) {
      clearDemoBtn.addEventListener('click', () => {
        let members = readMembers();
        members = members.filter(m => !m.demo);
        writeMembers(members);
        showToast('Data demo berhasil dibersihkan.');
        render();
      });
    }

    // Jalankan render tabel saat pertama kali admin dimuat
    render();
  }

  // Fungsi popup detail modal anggota
  function viewMember(m) {
    const dlg = $('#memberDialog'),
      content = $('#dialogContent');
    if (!dlg || !content) return;

    content.innerHTML = '';
    const h = document.createElement('h2');
    h.textContent = 'Detail Anggota';
    content.append(h);

    const grid = document.createElement('div');
    grid.className = 'detail-grid';

    [['Nama Lengkap', m.nama], ['NIM/NIP', m.nomorInduk], ['Program Studi / Unit', m.programStudi], ['Jenis Keanggotaan', m.jenis], ['Nomor Telepon', m.telepon], ['Email', m.email], ['Alamat', m.alamat]].forEach(([label, value]) => {
      const d = document.createElement('div'),
        small = document.createElement('small'),
        strong = document.createElement('strong');
      small.textContent = label;
      strong.textContent = value || '—';
      d.append(small, strong);
      grid.append(d);
    });

    content.append(grid);
    if (dlg.showModal) dlg.showModal();
    else alert(`${m.nama}\n${m.nomorInduk}\n${m.email}`);
  }

  // Fungsi ubah/edit data anggota modal (Kelanjutan kode yang terpotong)
  function editMember(m) {
    const fields = [
      ['nama', 'Nama Lengkap', m.nama],
      ['nomorInduk', 'NIM/NIP', m.nomorInduk],
      ['programStudi', 'Program Studi / Unit', m.programStudi],
      ['jenis', 'Jenis Keanggotaan', m.jenis],
      ['telepon', 'Nomor Telepon', m.telepon],
      ['email', 'Email', m.email],
      ['alamat', 'Alamat', m.alamat]
    ];

    const dlg = $('#memberDialog'), content = $('#dialogContent');
      if (!dlg || !content) return;
      content.innerHTML = '';
    const h = document.createElement('h2');
      h.textContent = 'Edit Data Anggota';
      content.append(h);
    const f = document.createElement('form');
      f.className = 'edit-form';
    const grid = document.createElement('div');
      grid.className = 'form-grid';
      fields.forEach(([key, label, value]) => {
    const wrap = document.createElement('div');
      wrap.className = 'form-group' + (key === 'alamat' ? ' form-group--full' : '');
    const lab = document.createElement('label');
      lab.textContent = label;
      let inp;
      if (key === 'alamat') { inp = document.createElement('textarea'); inp.rows = 3;
    } else if (key === 'jenis') {
      inp = document.createElement('select');
      ['Mahasiswa', 'Dosen', 'Tenaga Kependidikan'].forEach(v => {
    const op = document.createElement('option');
      op.value = v;
      op.textContent = v;
      if (v === value) op.selected = true;     inp.append(op); });
      } else {
      inp = document.createElement('input');
      inp.type = key === 'email' ? 'email' : 'text';
     }
      inp.name = key;
      inp.value = value || '';
      inp.required = true;
      lab.htmlFor = 'edit-' + key;
      inp.id = 'edit-' + key;
      wrap.append(lab, inp);
      grid.append(wrap);
      });
    const actions = document.createElement('div');
      actions.className = 'form-actions';
    const cancel = document.createElement('button');
      cancel.type = 'button';
      cancel.className = 'btn btn--light';
      cancel.textContent = 'Batal';
      cancel.onclick = () => dlg.close();
    const save = document.createElement('button');
      save.type = 'submit';
      save.className = 'btn';
      save.textContent = 'Simpan Perubahan';
      actions.append(cancel, save);
      f.append(grid, actions);
      content.append(f);
      if (dlg.showModal) dlg.showModal();
      f.addEventListener('submit', e => {
      e.preventDefault();
        if (!f.reportValidity()) return;
        const d = Object.fromEntries(new FormData(f).entries());
        let members = readMembers();
        d.nama = d.nama.trim();
        d.nomorInduk = d.nomorInduk.trim();
        d.email = d.email.trim().toLowerCase();
        if (members.some(item => item.id !== m.id && item.nomorInduk.toLowerCase() === d.nomorInduk.toLowerCase())) {
          showToast('NIM/NIP sudah digunakan anggota lain.');
          f.elements.nomorInduk.focus();
          return;
        }
        // Perbarui data anggota berdasarkan ID.
        members = members.map(item => item.id === m.id ? { ...item, ...d } : item);
      writeMembers(members);
      dlg.close();
      showToast('Perubahan data berhasil disimpan!');
    // Me-refresh isi baris tabel secara reaktif
    const rowsCheck = $('#memberRows');
      if (rowsCheck) {
    // Cari fungsi render lokal di atas lewat trigger simulasi input
    const searchBox = $('#searchMember');
      if (searchBox) searchBox.dispatchEvent(new Event('input'));
    }
    });
 }
 // Fungsi hapus data anggota modal
 function deleteMember(m) {
    if (confirm(`Apakah Anda yakin ingin menghapus data anggota "${m.nama}"?`)) {
      let members = readMembers();
      members = members.filter(item => item.id !== m.id);
      writeMembers(members);
      showToast(`Data anggota "${m.nama}" berhasil dihapus.`);
      // Me-refresh baris tabel secara otomatis
      const searchBox = $('#searchMember');
      if (searchBox) searchBox.dispatchEvent(new Event('input'));
    }
 }
});
