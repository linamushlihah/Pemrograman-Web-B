// Student Management UI
// Data contoh dimuat di awal. Perubahan dikelola oleh JavaScript pada halaman ini.
const initialStudents = [
  { id: 1, nim: "231001", nama: "Andi Pratama", jurusan: "Informatika", email: "andi@mail.com" },
  { id: 2, nim: "231002", nama: "Siti Aisyah", jurusan: "Sistem Informasi", email: "siti@mail.com" },
  { id: 3, nim: "231003", nama: "Budi Santoso", jurusan: "Teknik Komputer", email: "budi@mail.com" },
  { id: 4, nim: "231004", nama: "Nina Marlina", jurusan: "Manajemen", email: "nina@mail.com" },
  { id: 5, nim: "231005", nama: "Rizky Pratama", jurusan: "Informatika", email: "rizky@mail.com" }
];

let students = [...initialStudents];
let currentPage = 1;
const rowsPerPage = 5;

const form = document.getElementById("student-form");
const editIdInput = document.getElementById("edit-id");
const nimInput = document.getElementById("nim");
const namaInput = document.getElementById("nama");
const jurusanInput = document.getElementById("jurusan");
const emailInput = document.getElementById("email");
const searchInput = document.getElementById("search-input");
const rowsContainer = document.getElementById("student-rows");
const emptyState = document.getElementById("empty-state");
const tableInfo = document.getElementById("table-info");
const pagination = document.getElementById("pagination");
const saveButton = document.getElementById("save-btn");

function getFilteredStudents() {
  const keyword = searchInput.value.trim().toLowerCase();
  return students.filter(student =>
    [student.nim, student.nama, student.jurusan, student.email]
      .some(value => value.toLowerCase().includes(keyword))
  );
}

function renderTable() {
  const filtered = getFilteredStudents();
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const visibleStudents = filtered.slice(startIndex, startIndex + rowsPerPage);

  rowsContainer.innerHTML = "";
  emptyState.hidden = filtered.length !== 0;

  visibleStudents.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${startIndex + index + 1}</td>
      <td>${escapeHTML(student.nim)}</td>
      <td>${escapeHTML(student.nama)}</td>
      <td>${escapeHTML(student.jurusan)}</td>
      <td>${escapeHTML(student.email)}</td>
      <td>
        <div class="actions">
          <button class="action-btn action-edit" type="button" data-action="edit" data-id="${student.id}" aria-label="Edit ${escapeHTML(student.nama)}" title="Edit">✎</button>
          <button class="action-btn action-delete" type="button" data-action="delete" data-id="${student.id}" aria-label="Hapus ${escapeHTML(student.nama)}" title="Hapus">▣</button>
        </div>
      </td>`;
    rowsContainer.appendChild(row);
  });

  const shownStart = filtered.length ? startIndex + 1 : 0;
  const shownEnd = Math.min(startIndex + rowsPerPage, filtered.length);
  tableInfo.textContent = `Menampilkan ${shownStart} - ${shownEnd} dari ${filtered.length} data`;
  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  pagination.innerHTML = "";
  const buttons = [
    { label: "«", page: currentPage - 1, disabled: currentPage === 1 },
    ...Array.from({ length: totalPages }, (_, index) => ({
      label: String(index + 1), page: index + 1, active: currentPage === index + 1
    })),
    { label: "»", page: currentPage + 1, disabled: currentPage === totalPages }
  ];

  buttons.forEach(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `page-btn${item.active ? " active" : ""}`;
    button.textContent = item.label;
    button.disabled = Boolean(item.disabled);
    if (item.active) button.setAttribute("aria-current", "page");
    button.addEventListener("click", () => {
      currentPage = item.page;
      renderTable();
    });
    pagination.appendChild(button);
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

function clearForm() {
  form.reset();
  editIdInput.value = "";
  saveButton.innerHTML = '<span aria-hidden="true">▣</span> Simpan';
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const studentData = {
    nim: nimInput.value.trim(),
    nama: namaInput.value.trim(),
    jurusan: jurusanInput.value,
    email: emailInput.value.trim()
  };

  const duplicateNim = students.some(student =>
    student.nim.toLowerCase() === studentData.nim.toLowerCase() &&
    String(student.id) !== editIdInput.value
  );
  if (duplicateNim) {
    alert("NIM tersebut sudah terdaftar.");
    nimInput.focus();
    return;
  }

  if (editIdInput.value) {
    const id = Number(editIdInput.value);
    students = students.map(student => student.id === id ? { ...student, ...studentData } : student);
  } else {
    const nextId = students.length ? Math.max(...students.map(student => student.id)) + 1 : 1;
    students.push({ id: nextId, ...studentData });
  }

  clearForm();
  currentPage = Math.ceil(getFilteredStudents().length / rowsPerPage) || 1;
  renderTable();
});

document.getElementById("cancel-btn").addEventListener("click", clearForm);
document.getElementById("reset-btn").addEventListener("click", () => {
  clearForm();
  searchInput.value = "";
  currentPage = 1;
  renderTable();
});

searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderTable();
});

rowsContainer.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const student = students.find(item => item.id === id);
  if (!student) return;

  if (button.dataset.action === "edit") {
    editIdInput.value = student.id;
    nimInput.value = student.nim;
    namaInput.value = student.nama;
    jurusanInput.value = student.jurusan;
    emailInput.value = student.email;
    saveButton.innerHTML = '<span aria-hidden="true">▣</span> Update';
    nimInput.focus();
    document.querySelector(".form-card").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (button.dataset.action === "delete") {
    const confirmed = confirm(`Yakin ingin menghapus data ${student.nama}?`);
    if (!confirmed) return;
    students = students.filter(item => item.id !== id);
    if (editIdInput.value === String(id)) clearForm();
    renderTable();
  }
});

renderTable();
