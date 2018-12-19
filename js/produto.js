// Array de produtos que alimenta as páginas de 'produtos.html'
var produtos = [
    {
        nome: 'POP! Spider-Man',
        descricao: 'Funko POP! Marvel Homem-Aranha 4"',
        preco: 'R$99,90'
    },
    {
        nome: 'POP! Iron Man',
        descricao: 'Funko POP! Marvel Homem de Ferro 4"',
        preco: 'R$99,90'
    },
    {
        nome: 'POP! Thor',
        descricao: 'Funko POP! Marvel Thor Storm 4"',
        preco: 'R$99,90'
    },
    {
        nome: 'POP! Black Widow',
        descricao: 'Funko POP! Marvel Viúva Negra 4"',
        preco: 'R$99,90'
    },
    {
        nome: 'POP! Thanos',
        descricao: 'Funko POP! Marvel Thanos 6"',
        preco: 'R$199,90'
    },
    {
        nome: 'Pocket! Flash',
        descricao: 'Pocket POP! Justice The Flash',
        preco: 'R$49,90'
    },
    {
        nome: 'Pocket! Cyborg',
        descricao: 'Pocket POP! Justice Ciborgue',
        preco: 'R$49,90'
    },
    {
        nome: 'Pocket! Chopper',
        descricao: 'Pocket POP! One Piece Chopper',
        preco: 'R$49,90'
    },
    {
        nome: 'POP! BnH Deku',
        descricao: 'Funko POP! My Hero Midoriya 4"',
        preco: 'R$99,90'
    },
    {
        nome: 'POP! Goku UI',
        descricao: 'Funko POP! Goku Ultra Instinct 4"',
        preco: 'R$99,90'
    },
    {
        nome: 'One Piece - 01',
        descricao: 'Mangá One Piece Vol. 1 (Ed. Nova)',
        preco: 'R$15,90'
    },
    {
        nome: 'Saint Seiya - 01',
        descricao: 'Mangá Cavaleiros do Zodíaco Vol. 1',
        preco: 'R$15,90'
    },
    {
        nome: 'Dragon Ball - 01',
        descricao: 'Mangá Dragon Ball Vol. 1',
        preco: 'R$15,90'
    }
];

/**
 * Atribuir eventListener a todos os links para mudança das páginas de produto
 * Nameless function que atribui e chama 'paginaProduto' com o valor referente ao item clicado (z)
 */
var selecaoPagina = document.getElementsByClassName('pagina');
for ( var z = 0 ; z < selecaoPagina.length ; z++ ) {
    (function (z) {
        selecaoPagina[z].addEventListener('click', function() {
            paginaProduto(z);
        })
    })(z);
}

/**
 * Mostrar os produtos de acordo com a página selecionada
 * Alimentar a imagem do repositório local 'Image/Produtos'
 * @param {number} inicio parametro recebido do HTMl para indicar a partir de qual produto começar a mostrar (nº da página)
 */
function paginaProduto(inicio) {
    var iteracao = 6; // Quantidade de Produtos por página
    var prodInicial = inicio * iteracao; // determinar a partir de qual produto começa a contar
    var check = produtos.length - prodInicial;
    
    limparConteudoProduto();
    
    if ( iteracao > check ) {
        iteracao = check;
    }
    
    criarCorpoHtmlProduto(iteracao);

    var corpoProduto = document.querySelectorAll('.produto-corpo');
    var imagemProduto = document.querySelectorAll('.produto-img');

    for ( var i = 0 ; i < iteracao ; i++ ) {
        n = i + prodInicial;
        corpoProduto[i].appendChild(montarProduto(produtos[n]));
        imagemProduto[i].src = '../Images/Produtos/prod'+n+'.jpg';
    }
}

/**
 * Limpar o corpo onde é mostrado os produtos
 */
function limparConteudoProduto() {
    var conteudoProduto = document.querySelector('#conteudo-produto');
    conteudoProduto.innerHTML = '';
}

/**
 * Criar o corpo HTML onde será mostrado os produtos
 * @param {number} iteracao parametro de repetição que indica a quantidade de produtos por página
 */
function criarCorpoHtmlProduto(iteracao) {
    var conteudoProduto = document.querySelector('#conteudo-produto');
    for ( var i = 0 ; i < iteracao ; i++ ) {
        conteudoProduto.innerHTML = conteudoProduto.innerHTML + '<div class="col-12 col-sm-6 col-lg-4 span-produto"><div class="card mx-5 my-2 my-sm-3 mx-sm-auto bloco-prod"><img class="card-img-top produto-img" src="" alt="Card image cap"><div class="card-body produto-corpo"></div></div></div>';
    }
}

/**
 * Confeccionar o corpo de informações dos produtos
 * Recebe as informações do array 'produtos' através do parametro recebido
 * @param {object} produto recebe um objeto com 'nome', 'descricao' e 'preco' do produto
 */
function montarProduto(produto) {
    var prodNome = document.createElement('h6');
    prodNome.classList.add('card-title');
    prodNome.textContent = produto.nome;

    var prodDesc = document.createElement('p');
    prodDesc.classList.add('card-text');
    prodDesc.classList.add('d-none');
    prodDesc.classList.add('d-md-block');
    prodDesc.textContent = produto.descricao;

    var prodHr = document.createElement('hr');
    prodHr.classList.add('my-3');

    var prodComprar = document.createElement('div');
    prodComprar.classList.add('d-block');
    prodComprar.classList.add('text-center');

    var prodPreco = document.createElement('h5');
    prodPreco.classList.add('col-12');
    prodPreco.textContent = produto.preco;

    var prodBtn = document.createElement('a');
    prodBtn.classList.add('btn');
    prodBtn.classList.add('btn-success');
    prodBtn.classList.add('col-12');
    prodBtn.href = '#';
    prodBtn.textContent = 'Comprar';

    prodComprar.appendChild(prodPreco);
    prodComprar.appendChild(prodBtn);

    var produtoCompleto = document.createElement('div');
    produtoCompleto.appendChild(prodNome);
    produtoCompleto.appendChild(prodDesc);
    produtoCompleto.appendChild(prodHr);
    produtoCompleto.appendChild(prodComprar);

    return produtoCompleto;
}