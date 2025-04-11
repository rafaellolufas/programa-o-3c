document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

            let tamanhoAtualFonte = 1;
            aumentaFonteBotao.addEventListener('click', function(){
                tamanhoAtualFonte += 0.1;
                document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

     });

    diminuiFontBotao.addEventListene('click', function(){
        tamanhoAtualFonte -= 0.1;
        documen.body.style.fontSize = '${tamanhoAtualFonte}rem';
    });
});
alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})
botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
})
const alternaContraste = document.getElementById('alterna-contraste')
const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });