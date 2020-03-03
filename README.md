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
  - [Flexibilidade e gride](#flexibilidade-e-gride)
    - [Cartões](#cart%c3%b5es)
      - [Imagens](#imagens)
      - [Textos](#textos)
      - [Botões](#bot%c3%b5es)
  - [Botão “Ainda mais produtos aqui”](#bot%c3%a3o-ainda-mais-produtos-aqui)
- [Referência bibliográficas](#refer%c3%aancia-bibliogr%c3%a1ficas)

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

### Flexibilidade e gride

Criamos um novo arquivo chamado `grid.css` para separá-lo do arquivo principal para que a empresa possa entender como a gride funciona.

Desde que a empresa quer CSS e HTML modernos, sem depender de antiquados CSS e HTML para funcionar em todas as versões antigas de todos os navegadores, pois, a maioria dos usuários no Brasil, de acordo com o site StatCounter, já estão usando as últimas versões do Edge, Google, do Firefox e do Safari<sup><a href=#1>1</a></sup>:

- 18% dos brasileiros usam as últimas 3 versões do Google Chrome;
- 3% deles usam a versão 13 do Safari;
- 2% deles usam as últimas quatro versões do Firefox;
- 3% deles usam a versão 65 do Opera;
- 1% deles usam a versão 18 do Edge;

Enquanto apenas 1.25% deles usam a versão 11 do Internet Explorer, e apenas 0.01% usam as versões 7, 8 e 9 do Internet Explorer, e provavlmente que não existirão nem essas percentagens dos usuários do Internet Explorer na próxima desta década ou na próxima década. Observe que Internet Explorer 11 e Edge 12 a 18 já suportam a flexibilidade<sup><a href=#2>2</a></sup> e a gride<sup><a href=#3>3</a></sup>, de acordo com o site _Can I use?_.

Para que uma gride tenha 8 cartões com 200px de largura e 330px de altura que é um total de uma image, um grupo de textos e um botões juntos, o código ficou assim:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(2, 330px);
  grid-template-areas: "card-1 card-2 card-3 card-4" "card-5 card-6 card-7 card-8";
  gap: 41px;
}
```

A propriedade `repeat(4, 200px)` significa que não precisamos multiplicar um único elemento, por isso, usei a repetição. O numero `4` significa apenas cada 4 cartões (colunas) de uma linha como vimos no _mockup_ do projeto da empresa. A propriedade `grid-template-rows: repeat(2, 330px);` cujo número `2` significa duas linhas de 4 cartões, como vinos naquele _mockup_. A propriedade `grid-template-areas: "card-1 card-2 card-3 card-4" "card-5 card-6 card-7 card-8";` significa que checa os nomes das áreas em ordem e as aspas servem para separar as linhas. A propriedade `gap` significa o preenchimento ou o espaçamento dentre cartões.

#### Cartões

```css
.card-1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "image-1" "text-1" "button-1";
  grid-area: card-1;
}

.image-1 {
  grid-area: image-1;
}

.text-1 {
  grid-area: text-1;
}

.button-1 {
  grid-area: button-1;
}
```

Neste código, para que um dos 8 cartões tenha uma imagem, um grupo de texto e um botão, criamos as três áreas com os seus nomes (para que elas possasm ser verificadas em correta ordem) numa gride do cartão.

##### Imagens

Dentro dos cartões, criamos o estilo para as imagens, baseado no _mockup_ do projeto da empresa, com estes códigos:

```css
[class^="image-"] {
  height: 150px;
  border: 1px solid #707070;

  align-items: center;
  display: flex;
  justify-content: center;
}
```

A classe `[class^="image-"]` é uma expressão regular que captura todas as palavras contendo o prefixo de todas as classes `image-` – `image-1`, `image-2`, `image-3`, etc. Usei a flexibilidade para centralizar as imagens no seletor `img` dentro da classe `image-`.

##### Textos

```css
[class^="text-"] {
  text-align: left;
}

[class^="text-"] .title {
  font-size: 14px;
  padding-top: 14px;
  font-weight: normal;
}

[class^="text-"] .description {
  font-size: 12px;
  padding-top: 10px;
}

[class^="text-"] .value {
  padding-top: 16px;
  font-size: 12px;
}

[class^="text-"] .discount {
  font-size: 16px;
  font-weight: bold;
  padding-top: 6px;
}

[class^="text-"] .installments {
  font-size: 12px;
  padding-top: 7px;
}
```

A classe `[class^="text-"]`, semelhante ao sub-sub-sub-título `Imagens`, mas é um grupo em que ficam os cinco parágrafos – nome do produto (`.title`), descrição (`.description`), preço (`.value`), desconto (`.discount`) e parcelamentos (`.installments`). Na classe `.installments`, temos dois `span`s para meses (`.month`) e preço mensal (`.monthprice`).

##### Botões

Semelhante às explanações anteriores, fica assim:

```css
[class^="button-"] .button {
  width: 100%;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #707070;
  margin-top: 10px;
  text-align: center;
  background-color: #fff;
}
```

Como `.grid-container { grid-template-columns: repeat(4, 200px) }` já tem 200px de largura, não precisamos fixar a largura, então expandi a largura para 100%, como vimos no _mockup_.

### Botão “Ainda mais produtos aqui”

Após ter finalizado a galeria de produtos, adicionei o botão abaixo da galeria cujo estilo ficou assim:

```css
.more-products {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #707070;
  color: #888;
  font-size: 16px;
  margin: 43px auto 0px auto;
  padding: 10px 36px 10px 36px;
  text-align: center;
  width: 260px;
}

.more-products a {
  text-decoration: none;
}
```

O problema é que, a gride de produtos e o botão “Ainda mais produtos aqui” estavam em conflito com as margens e os preenchimentos, por isto, agrupamos a gride e o botão numa nova classe `.galeria`, utilizando `display: grid`, e adicionando a propriedade `margin-bottom: 43px` à classe `grid-container` para afstá-los e centralizar ambos:

```css
.galeria {
  align-items: center;
  display: grid;
  justify-content: center;
}
```

Como finalizei esta parte, criarei a próxima seção de compartilha/contacto.

## Referência bibliográficas

- <sup id="1">1</sup> \_\_\_\_\_\_. _Desktop, Mobile & Tablet Browser Version Market Share Brazil._ StatCounter. Dublin, Irlanda. Acesso: 01/02/2020. Disponível: https://gs.statcounter.com/browser-version-market-share/desktop-mobile-tablet/brazil/#monthly-201910-202002-bar
- <sup id="2">2</sup> DEVERIA, Alex. _CSS Flexible Box Layout Module_. Can I use? Los Angeles, Califórnia, EUA. Acesso: 01/02/2020. Disponível: https://caniuse.com/#feat=flexbox
- <sup id="3">3</sup> DEVERIA, Alex. _CSS Grid Layout (level 1)_. Can I use? Los Angeles, Califórnia, EUA. Acesso: 01/02/2020. Disponível: https://caniuse.com/#feat=css-grid
