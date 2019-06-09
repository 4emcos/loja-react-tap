const PRODUTOS = [
    {nome: 'Notebook', preco: 2500, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/133775/9/133775934_1GG.jpg"},
    {nome: 'Fritadeira', preco: 240, imagem: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/127878/8/127878831_1GG.png"},
    {nome: 'Fonte', preco: 84, imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/8579/3/8579390_1GG.jpg"},
    {nome: 'Relogio', preco: 158, imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/41940/8/41940837_1GG.jpg"},
    {nome: 'Micro-ondas', preco: 349, imagem: "https://images-americanas.b2w.io/produtos/01/00/oferta/47165/1/47165105_1GG.jpg"},
    {nome: 'Smart TV', preco: 1300, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/133869/3/133869367_1GG.jpg"},
    {nome: 'Cafeteira', preco: 309, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/130321/1/130321195_1GG.jpg"},
    {nome: 'Bandeja', preco: 16, imagem: "https://images-americanas.b2w.io/produtos/01/00/oferta/16021/1/16021131_1GG.jpg"},
    {nome: 'Smart TV LED 32"', preco: 16, imagem: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134139/7/134139702_1GG.jpg"},

    {nome: 'Jogo voce sabia?', preco: 27.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163228-1000-1000/Jogo-Voce-Sabia-Embalagem-Estrela.jpg?v=636656267100630000"},
    {nome: 'Banco imobiliario', preco: 94.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163173-1000-1000/Jogo-Banco-Imobiliario-Brasil-Embalagem-Estrela.jpg?v=636655369217230000"},
  
    {nome: 'Jogo voce sabia?', preco: 27.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163228-1000-1000/Jogo-Voce-Sabia-Embalagem-Estrela.jpg?v=636656267100630000"},
    {nome: 'Banco imobiliario', preco: 94.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163173-1000-1000/Jogo-Banco-Imobiliario-Brasil-Embalagem-Estrela.jpg?v=636655369217230000"},
    {nome: 'Jogo voce sabia?', preco: 27.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163228-1000-1000/Jogo-Voce-Sabia-Embalagem-Estrela.jpg?v=636656267100630000"},
    {nome: 'Banco imobiliario', preco: 94.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163173-1000-1000/Jogo-Banco-Imobiliario-Brasil-Embalagem-Estrela.jpg?v=636655369217230000"},
    {nome: 'Jogo voce sabia?', preco: 27.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163228-1000-1000/Jogo-Voce-Sabia-Embalagem-Estrela.jpg?v=636656267100630000"},
    {nome: 'Banco imobiliario', preco: 94.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163173-1000-1000/Jogo-Banco-Imobiliario-Brasil-Embalagem-Estrela.jpg?v=636655369217230000"},
    {nome: 'Jogo voce sabia?', preco: 27.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163228-1000-1000/Jogo-Voce-Sabia-Embalagem-Estrela.jpg?v=636656267100630000"},
    {nome: 'Banco imobiliario', preco: 94.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163173-1000-1000/Jogo-Banco-Imobiliario-Brasil-Embalagem-Estrela.jpg?v=636655369217230000"},
    {nome: 'Jogo voce sabia?', preco: 27.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163228-1000-1000/Jogo-Voce-Sabia-Embalagem-Estrela.jpg?v=636656267100630000"},
    {nome: 'Banco imobiliario', preco: 94.99, imagem: "https://estrela.vteximg.com.br/arquivos/ids/163173-1000-1000/Jogo-Banco-Imobiliario-Brasil-Embalagem-Estrela.jpg?v=636655369217230000"},
  
    
];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
}

export default BancoDeDados;