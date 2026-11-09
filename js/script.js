const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  menuToggle.setAttribute('aria-expanded', String(aberto));
  menuToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('aberto');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('ano').textContent = new Date().getFullYear();

document.getElementById('formContato').addEventListener('submit', event => {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const aviso = document.getElementById('aviso');

  if (!nome || !mensagem) {
    aviso.textContent = 'Preencha os campos para continuar.';
    return;
  }

  aviso.textContent = `Obrigado, ${nome}! O formulário está funcionando como demonstração.`;
  event.target.reset();
});
