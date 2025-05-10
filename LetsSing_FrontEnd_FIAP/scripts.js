function toggleDropdown() {
 const dropdownMenu = document.getElementById("userDropdownMenu");
 dropdownMenu.classList.toggle("show");
}

// Close dropdown if clicked outside
window.addEventListener("click", function (e) {
 const button = document.getElementById("userMenuButton");
 const dropdownMenu = document.getElementById("userDropdownMenu");
 if (!button.contains(e.target) && !dropdownMenu.contains(e.target)) {
  dropdownMenu.classList.remove("show");
 }
});

function toggleVerticalMenu() {
 const verticalMenu = document.getElementById('verticalMenu');
 const menuButton = document.getElementById('menuButton');

 // Alterna a classe 'open' no menu vertical
 verticalMenu.classList.toggle('open');

 // Altera o texto do botão com base no estado do menu
 if (verticalMenu.classList.contains('open')) {
  menuButton.textContent = 'Esconder Menu';
 } else {
  menuButton.textContent = 'Expandir Menu';
 }
}
document.getElementById('documentForm').addEventListener('submit', function (event) {
 if (!this.checkValidity()) {
  event.preventDefault();
  event.stopPropagation();
  alert('Por favor, preencha todos os campos obrigatórios.');
 }
});

document.getElementById('cancelButton').addEventListener('click', function () {
 if (confirm('Tem certeza de que deseja cancelar?')) {
  document.getElementById('documentForm').reset();
 }
});

function handleFormSubmit(event) {
 const form = document.getElementById('documentForm');
 if (form.checkValidity()) {
  event.preventDefault();
  window.location.href = 'index.html';
 } else {
  alert('Por favor, preencha todos os campos obrigatórios.');
 }
}

