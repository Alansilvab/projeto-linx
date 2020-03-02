<h1>Projeto Ecommerce</h1>

<h3>A test project for Linx company</h3>

- [Introdução](#introdu%c3%a7%c3%a3o)
- [Início](#in%c3%adcio)
  - [Global](#global)
  - [Conteúdo](#conte%c3%bado)
  - [Cabeçalho](#cabe%c3%a7alho)
  - [Subtítulos e títulos](#subt%c3%adtulos-e-t%c3%adtulos)
  - [Menu](#menu)
- [Galeria](#galeria)

## Introdução

Este é um projeto de teste para a empresa Linx, e conterá pequenas documentações e pequeno tutorial de como usar a gride flexível ou a gride tradicional ou a flexibilidade, e também como de reutilizar alguns códigos para optimizar os códigos e o tamanho dos arquivos, para melhorar a performance. Também explicará como aplicar a responsividade, utilizando a gride e a flexibilidade em puro CSS mais moderno e em puro HTML 5 mais moderno. Além disto, mostrarei como aplicar o JSON, usando JavaScript e de como usar a expressão regular para validar o e-mail e o requerimento sem depender de JavaScript.

## Início

Primeiramente, como a empresa está usando o monitor de 1500px, simulei no Design Responsivo do Inspector do navegador Google Chrome (e Edge, Edge Chromium, Firefox, Opera também têm ferramentas de inspector e oferecem a opção de simulador de design responsivo. Observe que estou usando o monitor de 2560px x 1080px, por isso, criei um novo dispositivo baseado no monitor da empresa, adicionado à lista de dispositivos no Design Responsivo.

### Global

No começo, usei este código:

```css
* {
  margin: 0;
}

*:not(.menu) {
  padding: 0;
}
```

para corrigir globalmente as margens e os preenchimentos de todas as classes, de todos os elementos, de todos os seletores e de todos os identificadores de todo o corpo do site.

Agora, apliquei a fonte _fallback_ do sistema caso não tenha Helvetica Neue nos sistemas operacionais como Android, Linux e Windows. Essa fonte é exclusiva do iOS e do macOS. E apliquei a propriedade `color: #888` globalmente em todo o site, pois não precisaria colocar essa propriedade em toda classe, para otimizar os códigos e salvar o tamanho do arquivo. :smile:

```css
body {
  color: #888;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

button,
button:hover,
a {
  color: #888;
}
```

### Conteúdo

A classe `.container` aplica-se apenas ao grupo de galeria de produtos e à seção de compartilha. Não se aplica ao cabeçalho e ao rodapé.

### Cabeçalho

Criei um bloqueio de cabeçalho, usando a classe `.header`. É importante que o monitor da empresa tem 1500px e o meu tem 2560px, entendemos que a empresa não pediu a largura fixa. Evite a largura fixa, use a percentagem para expandir toda a largura de quaisquer monitores:

```css
.header {
  width: 100%;
  height: 319px;

  background: #707070 0% 0% no-repeat padding-box;
  color: #fff;
  text-align: center;
}
```

E medi a altura do cabeçalho para 319px como vimos no _mockup_ do projeto da empresa no Adobe XD. E centralizamos o texto.

### Subtítulos e títulos

Baseado nas propriedades do código de cada elemento ou objeto no _mockup_ do projeto de empresa no Adobe XD. Fica assim:

```css
.subheader {
  padding-top: 69px;
  height: 23px;

  font-size: 20/24px;
}

.title {
  font-size: 40px;
  font-weight: bold;
}

.subheader2 {
  padding-top: 24px;
  font-size: 14px;
}
```

Observa as propriedades `padding-top`... É importante saber que os preenchimentos (`padding`) funcionam apenas com os textos e as margens (`margin`) funcionam apenas com os elementos (`div`, `footer`, `section`, etc.). A propriedade `font-size: 20/24px;` significa que a fonte é automaticamente dimensionada de forma responsiva, vai mudando de tamanho nos dispositivos movéis e nos monitores de diferentes tamanhos.

### Menu

Criei um menu, nomeando a classe como `.menu`, e usando os seletores `ul` e `li`. O código ficou assim:

```css
.menu {
  align-items: center;
  justify-content: center;
  padding-top: 50px;
}

.menu ul {
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  list-style: none;
}

.menu li {
  margin-right: 35px;
  width: 160px;
  height: 40px;
  line-height: 40px;

  background: #ffffff;
  box-shadow: 0px 1px 6px #00000029;
  border: 1px solid #707070;
  border-radius: 4px;
}

.menu a {
  display: inline-block;
  text-decoration: none;

  font-size: 16px;
  text-align: center;
}
```

Na classe `.menu`, pode ver que usei a flexibilidade para centralizar o grupo de botões. As propriedades `align-items: center`, `display: flex` e `justify-content: center` são modernas e são suportadas pela maioria dos navegadores modernos e inclusive pelo Edge e pelo falecido Internet Explorer 11. Na classe `.menu ul`, também centralizou as âncoras que são elementos, usando a flexibilidade e apliquei `list-style: none` para omitir o estilo de lista para tornar estilo customizado. Na classe `.menu li`, apliquei `wdith: 160px` a todos os botões, e `line-height` para centralizar verticalmente o texto. Finalmente na classe `.menu a`, usei `display: inline-block`, o que permitiu que a âncora fosse movida pelas propriedades de flexibidade.

## Galeria
