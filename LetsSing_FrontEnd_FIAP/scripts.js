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

function submitdados(event) {
 const form = document.getElementById('documentForm');
 if (form.checkValidity()) {
  event.preventDefault();
  window.location.href = 'ass_manual.html';
 } else {
  alert('Por favor, preencha todos os campos obrigatórios.');
 }
}

function validateForm(event) {
 event.preventDefault();
 const nomeCompleto = document.getElementById('nomeCompleto').value.trim();
 const cpf = document.getElementById('cpf').value.trim();
 const dataNascimento = document.getElementById('dataNascimento').value.trim();

 if (!nomeCompleto || !cpf || !dataNascimento) {
  alert('Por favor, preencha todos os campos obrigatórios.');
  return;
 }

 // Se todos os campos estiverem preenchidos, avançar para a próxima página
 window.location.href = 'ass_manual.html';
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

function applyCpfMask(input) {
 let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
 value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Add first dot
 value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Add second dot
 value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Add dash
 input.value = value;
}

// assinatura
function validateForm(event) {
 const nameInput = document.getElementById('nameInput').value.trim();
 const canvas = document.getElementById('signatureCanvas');

 if (!nameInput) {
  event.preventDefault();
  alert('Por favor, preencha todos os campos obrigatórios e assine no campo indicado.');
  return false;
 }

 alert('Formulário assinado com sucesso!');
 window.location.href = 'ass_serpro.html'; // Avança para a próxima página
 return true;
}

function startSignatureProcess() {
 const button = document.getElementById('startSignatureButton');
 const loadingAnimation = document.getElementById('loadingAnimation');

 // Desativa o botão para evitar múltiplos cliques
 button.disabled = true;

 // Exibe a animação de carregamento
 loadingAnimation.style.display = 'flex';

 // Simula o carregamento de 5 segundos
 setTimeout(() => {
  // Oculta a animação de carregamento
  loadingAnimation.style.display = 'none';

  // Reativa o botão
  button.disabled = false;

  // Exibe uma mensagem de sucesso
  alert('Processo de assinatura finalizado! Por favor, clique em avançar para continuar.');
 }, 5000); // 5 segundos
}

function handleFormSubmit(event) {
 event.preventDefault();
 const form = document.getElementById('documentForm');
 if (form.checkValidity()) {
  window.location.href = 'visualizar_doc.html';
 } else {
  form.reportValidity();
 }
}

function validateAge() {
 const input = document.getElementById('dataNascimento');
 const error = document.getElementById('ageError');
 const birthDate = new Date(input.value);
 const today = new Date();
 const age = today.getFullYear() - birthDate.getFullYear();
 const monthDiff = today.getMonth() - birthDate.getMonth();
 const dayDiff = today.getDate() - birthDate.getDate();

 if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
  error.style.display = 'block';
  input.value = '';
 } else {
  error.style.display = 'none';
 }
}

function toggleSaveButton() {
 const checkbox = document.getElementById('termsCheckbox');
 const saveButton = document.getElementById('saveButton');
 saveButton.disabled = !checkbox.checked;
}

// Initially disable the save button
document.getElementById('saveButton').disabled = true;


function proceedToNextPage() {
 const checkbox = document.getElementById('termsCheckbox');
 if (checkbox.checked) {
 window.location.href = 'final_ass_serpro.html';
 } else {
 alert('Por favor, aceite os termos para continuar.');
 }
}
