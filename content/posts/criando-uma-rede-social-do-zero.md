---
title: Criando uma rede social. Do zero.
description: Post contando a experiência de criar uma rede social do zero. Da ideia até produção.
readTime: 16
date: 2020-12-19
featuredImage: /assets/img/posts/peakseekers-featured.jpg
openGraphImage: /assets/img/posts/peakseekers-1.jpg
---

Após finalizar o bootcamp da [Rocketseat](https://rocketseat.com.br/) em junho de 2020, coloquei na cabeça que precisava criar alguma aplicação para o mundo real, tendo como principal objetivo colocar em prática tudo o que havia aprendido. A ideia inicial era fazer uma plataforma para catalogar livros, basicamente o que é feito hoje no [Goodreads](https://www.goodreads.com/) mas com uma interface e UX mais amigável para os usuários.

Porém, existem N plataformas para catalogar leituras e eu não estava completamente satisfeito com a ideia. Foi aí que em uns estalos de inspiração eu pensei em unir duas paixões: **montanhismo** e **tecnologia**.

A ideia inicial veio em julho, e como neste período também estava fazendo um curso de UX, pensei em usar essa ideia como um projeto real, e com isso, aprendi a pensar em um produto não apenas como um desenvolvedor, mas também como empreendedor (embora eu não tenha nenhuma ideia de lucrar com isso). Meu primeiro pensamento foi: **"Legal, tenho uma boa ideia. Mas como vou evoluir essa boa ideia para que ela já não nasça morta?"**.

## Pensando no produto

Embora seja um projeto pessoal feito nas horas vagas, resolvi tratá-lo como um projeto real. E com isso, deixei um prazo de um mês para focar no UX. Desde protótipos, regras de negócio, diagramas de user journey até proto-personas. E aqui vai uma dica clichê mas que é difícil de colocar em prática: FOQUE NO MVP! Isto é, foque em lançar o mínimo para seu cliente, as melhorias e novas funcionalidades vem depois.

O problema que eu precisava resolver era: Um aplicativo para que montanhistas consigam exibir quais montanhas ele já conquistou (em forma de história, com um breve resumo e algumas fotos), e as montanhas que ele quer conquistar, _uma espécie de Instagram para montanhistas_.

### Mas… O que faz o Peakseekers ser uma rede social diferente?

Influenciado nos últimos anos por pessoas como [Jaron Lanier](https://www.ted.com/talks/jaron_lanier_how_we_need_to_remake_the_internet?language=pt-br), mas também pela própria profissão, comecei a me preocupar de fato com Privacidade, e como hoje somos meros marionetes de grandes empresas como Google e Facebook. Sim, o famoso papo do “o Google escutou o que eu falei”, de como somos bombardeados por propagandas direcionadas e manipulações comportamentais. Por isso, um dos meus principais objetivos com o Peakseekers era ir na contramão do que existe hoje.

Embora hoje em dia seja quase impossível fugir disso (até porque sempre usamos ferramentas de terceiros), o Peakseekers não tem nenhum sistema de rastreamento do usuário (exceto Google Analytics) e não exibe nenhum tipo de propaganda.

Também não há a opção de seguir usuários, e apenas o escritor sabe quem curtiu sua história.

Isso envolve alguns fatores: não tenho retenção de usuário (já que não uso algoritmos de engajamento) e acabo tendo prejuízo financeiro (há custos relacionados ao Google e Algolia). Sim, talvez eu não seja um bom empreendedor, por outro lado, fico em paz comigo mesmo sobre minha missão como desenvolvedor de uma rede social.

## Tá legal. Mas como catalogar todas montanhas pelo mundo?

Até por questões de performance, queria ter o maior número possível de montanhas catalogadas no banco de dados da própria aplicação (mantida no Firebase). Mas eu tinha alguns problemas: onde achar um catálogo de montanhas pelo mundo, e pior, padronizar os dados para manter uma consistência na aplicação?

A resposta para a primeira pergunta é o magnífico [Peakbagger](https://www.peakbagger.com/), um site com um catálogo de milhares de montanhas pelo mundo mantido com a ajuda de montanhistas e a paixão de seu desenvolvedor, Greg, que aceitou compartilhar os dados do site com o Peakseekers, tendo em conta que é um projeto não comercial, focado em estudos de tecnologia.

Com a aprovação do desenvolvedor, usei scripts em Python ([Scrapy](https://scrapy.org/)) para extração de dados. Depois de alguns testes, criei um script dinâmico para conseguir extrair cerca de 30000 montanhas cadastradas no site.

Porém, tinha um detalhe: embora meu público-alvo sejam pessoas do Estados Unidos (maior público de montanhistas do mundo), eu queria ter um catálogo decente de montanhas brasileiras. E isso foi possível graças à API aberta do [OpenStreetMap](https://www.openstreetmap.org/).

Depois de um período relativamente trabalhoso de padronização de dados, tinha em mãos mais de 22000 montanhas prontas para serem enviadas ao Firebase, e aqui vale uma observação: a performance de inserção em lote do Firebase é ABSURDA. Em pouco mais de 20 minutos, todas as montanhas já estavam cadastradas no banco de dados.

## A hora de desenhar as interfaces

Eu tenho um certo “problema” que preciso sempre desenhar interfaces (e até mesmo algoritmos) no papel. Fico sempre com muitas ideias na cabeça mas parece que se eu não externar isso em algum lugar, vou acabar esquecendo.

![Wireframes Peakseekers](/assets/img/posts/peakseekers-1.jpg)

De qualquer forma, acho essa parte fundamental porque já consigo através dos protótipos no papel, conseguir enxergar coisas que talvez não funcionam muito bem na hora de usar a interface, mesmo que na minha cabeça faça sentido. E com os rabiscoframes prontos, fica muito mais fácil trabalhar com UI.

Inspirado por alguns projetos no Dribbble, queria algo fora do convencional para o Peakseekers: uma aplicação mais monocromática, sem cores de destaque, usando apenas variações de branco e preto, e aí foi fácil achar uma paleta de cores no Coolors.

Com tudo isso em mãos, faltava só seguir algumas regrinhas de ouro de UI e _lansar a braba_ no Figma. Levei exatamente um mês para concluir o máximo que precisava antes de começar a desenvolver, e o resultado você confere [aqui](https://www.figma.com/file/zCzzKXRjiA9Pxfe0bVJLzE/Peakseekers-Mobile-LIGHT?node-id=0%3A1).

![Interfaces Peakseekers](/assets/img/posts/peakseekers-2.png)

## A temida hora do desenvolvimento e porque eu amo o Next.js

##### Disclaimer: este tópico contém informações técnicas sobre o desenvolvimento. Caso não tenha interesse, pode pular para o tópico de Inspirações.

Assim como o UI, me planejei para finalizar a parte de desenvolvimento do Peakseekers em um mês. Mal sabia o que vinha pela frente…

Antes de tudo, nunca havia feito algo parecido com uma rede social antes, ainda mais usando React. Então, minha grande base para esse desafio foi esse [vídeo](https://www.youtube.com/watch?v=m_u6P5k0vP0&ab_channel=freeCodeCamp.org) de 12h da freeCodeCamp. Obviamente não assisti inteiro, mas as primeiras horas foram fundamentais para descobrir o que eu precisava fazer, e os desafios foram:

- Criar uma API para acesso ao Firebase através de Cloud Functions com Node.js;
- Criar um front-end com foco em performance e SEO (Server Side Rendering era obrigatório), afinal, estamos falando de um site que funcionará como um blog pessoal dos usuários;
- Multi-idioma (Português e Inglês) - Como disse acima, meu foco é o público dos Estados Unidos, mas queria também uma interface amigável para brasileiros;
- Light/Dark mode - Porque é bonito demais e sou viciado em dark mode 😆

Para todos os problemas sobre front-end, o Next.js caiu como uma… é, na verdade não foi tão fácil quanto parece. Mas de qualquer forma, usar Next.js como framework foi a melhor escolha que fiz para o desenvolvimento do projeto.

### Resolvendo os desafios

Eu tinha pouca experiência em back-ends com Node.js, mas o bootcamp da Rocketseat me preparou para o desafio de implementar um projeto real. Com base no vídeo que citei acima e uma infinidade de conteúdo sobre Firebase no Google (incluindo sua ótima documentação), não foi tão difícil criar a API do Peakseekers.

Os momentos de mais dificuldade foram criar os endpoints de perfil do usuário e da história (post), e principalmente, criar uma função para otimização de imagens enviadas pelo usuário, criando uma versão otimizada que sobrescrevia a imagem original, economizando espaço da Storage do Firebase e aumentando performance no client-side.

Quanto aos desafios relacionados ao front-end da aplicação, escolher o Next.js fez com que eu tivesse uma aplicação extremamente performática, com SEO otimizado e com um suporte na época básico para internacionalização, além de todas as vantagens já conhecidas de usar o React como base.

Através de muito estudo consegui usar grande parte do potencial do Next.js, desde as maravilhosas [rotas dinâmicas geradas estaticamente](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation), componentes estilizados com Styled Components e uma dolorosa configuração para internacionalização que explico mais abaixo.

Além disso, trabalhar com tema light e dark também acabou virando um grande desafio, por mais simples que pareça. Começou errado na parte de UI, quando acabei invertendo cores de forma errada nas duas versões, fazendo com que eu fizesse uma gororoba de variáveis css com o hexadecimal das cores (aprendi com esse erro em novos projetos).

Por fim, o Next.js (e até o Gatsby) não consegue lidar muito bem com isso em páginas estáticas. Ora, se eu sirvo um arquivo pronto para o usuário, como posso identificar seu tema e fazer a alteração? Pois é. Mais alguns dias de estudo e no final consegui implementar usando CSS nativo e o Theme Provider do Styled Components conforme descrito [aqui](https://hangindev.com/blog/avoid-flash-of-default-theme-an-implementation-of-dark-mode-in-react-app). Mas se fosse recomendar uma solução hoje, sem dúvida seria [essa](https://github.com/pacocoursey/next-themes).

### Internacionalização no Next.js

Comecei o desenvolvimento do Peakseekers em setembro, usando a versão 9.4 do Next.js. Nessa época (ok, não faz tanto tempo assim) ainda era um pouco complicado trabalhar com multi-idiomas. Se você juntasse isso a rotas estáticas, detecção do idioma do usuário e redirecionamento em rotas dinâmicas, aí meu amigo, você tinha um GRANDE trabalho pela frente. Felizmente com a ajuda da biblioteca [next-translate](https://github.com/vinissimus/next-translate/), alguns dias passando raiva e algumas adaptações técnicas (sim, você sabe do que eu estou falando), consegui deixar tudo funcionando da forma que eu queria.

Porém, hoje com a versão 10 do Next.js a história é diferente. Trabalhar com internacionalização ficou extremamente mais fácil, usando o código nativo do framework como pode ser visto nesse [vídeo](https://www.youtube.com/watch?v=QnCIjjYLCfc&ab_channel=VinissimusDevelopers). Ainda não tive tempo de fazer a mudança e eliminar códigos desnecessários, mas está na minha lista de tarefas.

### Sobre a experiência

No mais, desenvolver com Next.js foi maravilhoso. O hype sobre ele faz jus quando você começa a meter a mão na massa em um projeto com ele. Esse framework é o sonho de qualquer desenvolvedor que começou sua carreira há uns 10 anos atrás, quando era necessário fazer tudo quanto é tipo de configuração a fio para lidar com performance e escalabilidade, sendo que hoje o Next.js entrega isso pra você de bandeja.

Hoje o Peakseekers está hospedado na [Vercel](https://vercel.com/) integrado a um repositório no Github. CDN, serverless functions e ambiente de testes configurados com um clique. Obrigado, Vercel! ❤️

## Inspirações

Sempre é bom ter alguns projetos como inspiração. Mas confesso que o que mais me tocou nos últimos anos sobre produtos digitais, foi um episódio da ótima série [Abstract (S02E05)](https://www.netflix.com/br/title/80057883), com Ian Spalter, um dos Head de Design do Instagram.

Sobre aplicativos, a maior inspiração foi o [Lecheese.app](https://lecheese.app/) principalmente por também ter sido feito por um desenvolvedor ([Zeno Rocha](https://zenorocha.com/)), além de ter usado algumas tecnologias similares ao Peakseekers como pode ser visto [aqui](https://zenorocha.com/the-technology-stack-i-used-to-build-my-first-mobile-app/).

### Ferramentas usadas e links úteis

Graças a dias de pesquisa, consegui um compilado de ferramentas e links que podem ajudar desenvolvedores desde a ideia até a execução de um projeto. Use à vontade! :)

- [https://www.notion.so/](https://www.notion.so/) - Não só o projeto do Peakseekers, mas toda minha vida está documentada aqui;
- [https://visualsitemaps.com/](https://visualsitemaps.com/) - A melhor ferramenta para criação de sitemaps;
- [https://whimsical.com/](https://whimsical.com/) - Para criação de fluxos de usuários e outros diagramas;
- [https://www.productchecklist.co/](https://www.productchecklist.co/) - Um checklist para ser feito ao lançar um produto;
- [http://uxchecklist.github.io/](http://uxchecklist.github.io/) - Mais um checklist excelente;
- [https://coolors.co/](https://coolors.co/) - Para criação da paleta de cores;
- [https://lottiefiles.com/](https://lottiefiles.com/) - Animações usadas em microinterações no front-end, através da biblioteca Lottie;
- [https://heydesigner.com/](https://heydesigner.com/) - Minha fonte diária para estudos, com vários posts sobre produtos digitais, UI/UX e Front-end;
- [https://dribbble.com/](https://dribbble.com/) - A maior fonte de inspiração para UI;
- [http://youtube.com/rocketseat](http://youtube.com/rocketseat) - A maior fonte de conteúdo em português sobre React e Next.js;
- [https://youtube.com/devsoutinho](https://youtube.com/devsoutinho) - Tutoriais básicos e avançados sobre React e Next.js com uma ótima pitada de humor;
- [https://youtube.com/willjusten](https://youtube.com/willjusten) - Estou citando o canal do Willian Justen, mas vale citar também seus cursos e o excelente Slack dos alunos que acaba servindo como uma fonte de notícias sobre desenvolvimento.

## O que vem pela frente? (To do)

Antes de mais nada, é legal ver como a tecnologia evolui rápido. Ao ver o código usado no Peakseekers, vejo o tanto de coisa que poderia ter sido feito de forma diferente hoje. De qualquer forma, tenho uma lista de tarefas relacionadas a melhorias e desenvolvimento de novas funcionalidades (aquela história de não deixar um produto morrer):

- Melhoria em UX, principalmente na página de criação da história;
- Refatoração de código para aproveitamento de funções nativas do Next.js;
- Melhorias de performance na API com o Node.js.

E caso o projeto ganhe certa popularidade:

- Novas funcionalidades (preview da história, rankings, página de “expedição” para atualização em forma de histórias curtas, e envio de mensagens para usuários);
- **Aplicativo nativo para iOS e Android**.

## Conclusão e agradecimentos

Ao contrário do que possa parecer, o Peakseekers não foi um segredo. Desde a primeira ideia corri para alguns amigos para contar o que estava planejando, e o que eles achavam. E aqui quero destacar [Heitor Martins](http://heitormartins.com.br/) e [Renan Bonin](https://renanbonin.com/), dois parças fodas que além de excelentes profissionais, sempre propuseram ideias e estavam abertos a ouvir sobre o que estava sendo desenvolvido.

Também agradeço a galera de alguns trabalhos antigos e principalmente alguns da [Fitcard](https://www.fitcard.com.br/) (meu trabalho atual), que foram os primeiros usuários reais a testar a plataforma. Um grande abraço, seus lindos!

Esse post ficou gigante, e a intenção era essa. Na verdade, ainda deixei muita coisa para trás. Mas quero que ele sirva como inspiração para alguém que tenha alguma ideia similar, ou até mesmo queira saber mais sobre como um desenvolvedor pode ter uma visão mais voltada para produtos.

E ANTES QUE EU ME ESQUEÇA, o Peakseekers é uma rede social open source! Seu [código-fonte está aqui](https://github.com/jofelipe/peakseekers) e pode ser _forkado_, melhorado e usado como referência sem moderação!

Por fim, se você tiver qualquer dúvida sobre o processo e quiser bater um papo, me encontre no [Linkedin](https://linkedin.com/in/jofelipe) ou em [hi@jofelipe.com](mailto:hi@jofelipe.com). Um abraço e _se cadastre-lá por favor_.
