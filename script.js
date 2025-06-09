const receitas = [
  { nome: "Macarrão à Bolonhesa", imagem: "images/macarrao_a_bolonhesa.jpg", categoria: "Receitas", pagina: "receita_macarrao_a_bolonhesa.html" },
  { nome: "Bife Acebolado", imagem: "images/bife_acebolado.jpg", categoria: "Receitas", pagina: "receita_bife_acebolado.html" },
  { nome: "Caldo Verde", imagem: "images/caldo_verde.jpg", categoria: "Receitas", pagina: "receita_caldo_verde.html" },
  { nome: "Canja de Galinha", imagem: "images/canja_de_galinha.jpg", categoria: "Receitas", pagina: "receita_canja_de_galinha.html" },
  { nome: "Pudim de Leite Condensado", imagem: "images/pudim_de_leite.jpg", categoria: "Receitas", pagina: "receita_pudim_de_leite.html" },
  { nome: "Feijoada", imagem: "images/feijoada.jpg", categoria: "Receitas", pagina: "receita_feijoada.html" },
  { nome: "Estrogonofe de Frango", imagem: "images/estrogonofe_de_frango.jpg", categoria: "Receitas", pagina: "receita_estrogonofe_de_frango.html" },
  { nome: "Lasanha à Bolonhesa", imagem: "images/lasanha.jpg", categoria: "Receitas", pagina: "receita_lasanha.html" },
  { nome: "Frango Assado", imagem: "images/frango_assado.jpg", categoria: "Receitas", pagina: "receita_frango_assado.html" },
  { nome: "Brigadeiro", imagem: "images/brigadeiro.jpg", categoria: "Receitas", pagina: "receita_brigadeiro.html" },
  { nome: "Torta de Limão", imagem: "images/torta_de_limao.jpg", categoria: "Receitas", pagina: "receita_torta_de_limao.html" },
  { nome: "Suco Verde", imagem: "images/suco_verde.jpg", categoria: "Receitas", pagina: "receita_suco_verde.html" },
  { nome: "Mousse de Maracujá", imagem: "images/mousse_de_maracuja.jpg", categoria: "Receitas", pagina: "receita_mousse_de_maracuja.html" },
  { nome: "Bolo de Cenoura", imagem: "images/bolo_de_cenoura.jpg", categoria: "Receitas", pagina: "receita_bolo_de_cenoura.html" },
  { nome: "Salada", imagem: "images/bolo_de_cenoura.jpg", categoria: "Saladas", pagina: "receita_salada_caesar.html" },
];
const container = document.getElementById("receitas-container");
const categorias = [...new Set(receitas.map(r => r.categoria))];

function exibirReceitas(filtro = null) {
    container.innerHTML = "";
    receitas.filter(r => !filtro || r.categoria === filtro)
        .forEach(r => {
            const card = document.createElement("div");
            card.className = "card";
            card.onclick = () => location.href = r.pagina;
            card.innerHTML = `<img src="${r.imagem}" alt="${r.nome}"><h3>${r.nome}</h3>`;
            container.appendChild(card);
        });
}

function criarBotoesCategorias() {
    const nav = document.getElementById("categorias");
    categorias.forEach(cat => {
        const btn = document.createElement("button");
        btn.innerText = cat;
        btn.onclick = () => exibirReceitas(cat);
        nav.appendChild(btn);
    });
    const todos = document.createElement("button");
    todos.innerText = "Todas";
    todos.onclick = () => exibirReceitas();
    nav.insertBefore(todos, nav.firstChild);
}

criarBotoesCategorias();
exibirReceitas();
