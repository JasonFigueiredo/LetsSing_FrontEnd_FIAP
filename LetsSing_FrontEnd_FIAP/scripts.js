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

function toggleDropdown() {
 const content = document.getElementById('dropdownContent');
 const isHidden = content.style.display === 'none';
 content.style.display = isHidden ? 'block' : 'none';
}

function copiarConteudo(conteudo) {
 navigator.clipboard.writeText(conteudo).then(() => {
  alert('Conteúdo copiado: ' + conteudo);
 }).catch(err => {
  alert('Erro ao  copiar conteúdo: ' + err);
 });
}

document.getElementById('dropdownButton').addEventListener('click', function () {
 const dropdownMenu = document.querySelector('.dropdown-menu');
 const isHidden = dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '';
 dropdownMenu.style.display = isHidden ? 'block' : 'none';
});

document.addEventListener('click', function (event) {
 const dropdownMenu = document.querySelector('.dropdown-menu');
 const dropdownButton = document.getElementById('dropdownButton');
 if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
  dropdownMenu.style.display = 'none';
 }
});

function clearFields() {
 document.querySelectorAll('.input-field').forEach(field => {
  if (field.tagName === 'INPUT') {
   field.value = '';
  } else if (field.tagName === 'SELECT') {
   field.selectedIndex = 0;
  }
 });
}

function startSearch() {
 alert('Iniciando pesquisa com os critérios informados.');
}

function applyFilter(element) {
 alert('Filtro aplicado!');
}

function refreshFilters(element) {
 alert('Filtros redefinidos!');
}

function applyListFilter(element) {
 alert('Filtro de lista aplicado!');
}

function sortAlphabetically(element) {
 alert('Lista ordenada alfabeticamente!');
}