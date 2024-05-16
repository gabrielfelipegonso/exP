
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.getElementById('lista-nao-ordenada');
const link = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = 'Título';
link.innerText = 'Clique aqui para acessar o site';
listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';
listaOrdenada.innerHTML = '<li><a href="https://www.fb.com">Facebook</a></li><li><a href="https://www.instagram.com">Instagram</a></li><li><a href="https://www.google.com">Google</a></li>';
