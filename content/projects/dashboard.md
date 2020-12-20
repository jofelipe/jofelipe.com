---
title: Dashboard
description: Aplicação web para exibição de saldo total e diário, evolução dos gastos e lista de transações para usuários do cartão de benefícios
roles: UI Design & Desenvolvimento Front-end
featuredImage: /assets/img/posts/dashboard-featured.jpg
openGraphImage: /assets/img/posts/dashboard-2.jpg
---

Este projeto foi um redesign de uma aplicação web usada para exibição de saldo total e transações de um cartão de benefícios.

![Redesign](/assets/img/posts/dashboard-1.gif)

Meu principal objetivo neste redesign foi aproveitar todo o espaço disponível em uma aplicação web para desktop, além de exibir mais informações que já estavam disponíveis na API do projeto. Embora seja uma aplicação responsiva, quis deixar a versão mobile mais próxima possível de um aplicativo nativo, otimizando seu conteúdo com interações exclusivas.

Vale destacar o meu item favorito: modo escuro. Ele é automático (de acordo com o tema do usuário) mas também pode ser ativado através de um toggle, salvando essa opção no navegador do usuário.

![Modo escuro](/assets/img/posts/dashboard-2.jpg)

Este também foi o primeiro projeto feito com React na empresa. Com isso, foi possível aproveitar o uso de bibliotecas famosas e úteis que acabam agregando a experiência do usuário, como exibição de gráficos, tela de carregamento e [microinterações](https://brasil.uxdesign.cc/microintera%C3%A7%C3%B5es-usabilidade-nos-detalhes-b264ce9f3f22).

![Versão mobile](/assets/img/posts/dashboard-3.jpg)

Quanto a parte técnica, este projeto também serviu para aplicar novos aprendizados como abstração de interfaces do TypeScript, gerenciamento de temas através do hostname (URL) da página, e hooks para autenticação.
