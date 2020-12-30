---
title: Roteirizador
description: Aplicação web para criação de rotas pelo Google Maps com exibição de pedágios e estabelecimentos credenciados
roles: UI Design & Desenvolvimento Front-end
featuredImage: /assets/img/posts/roteirizador-featured.jpg
openGraphImage: /assets/img/posts/roteirizador-1.jpg
---

Roteirizador é uma aplicação completo para criar e receber informações sobre uma rota inserida pelo usuário. As informações obrigatórias são apenas: origem, destino, valor do litro do combustível e autonomia (km/litro) do veículo.

![Tela inicial](/assets/img/posts/roteirizador-1.jpg)

Ao fazer uma pesquisa, é exibido ao usuário todo o trajeto da rota junto a marcadores próximos, sendo estabelecimentos credenciados da empresa e pedágios. Ao lado, é exibido o resumo da rota contendo a duração prevista, valores e quantidade de pedágios, e o cálculo de valor do combustível para completar o itinerário. Com essas informações também é possível calcular e exibir o custo total da rota.

![Versão responsiva](/assets/img/posts/roteirizador-2.jpg)

Vale destacar que existem outros filtros como tipo de veículo e quantidade de eixos, tipo de estabelecimento que será exibido, itens para evitar na rota (como pedágios, túneis e balsas), e tipo de cálculo (mais curto ou mais rápido), além de uma opção para calcular o retorno (sendo um cálculo adicional, já que é comum o caminho de retorno ser diferente da ida).

Neste projeto houve um uso massivo da [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview), desde itens mais comuns como o uso de marcadores (markers com Marker Clustering), desenho da rota (Drawing), informações sobre cada estabelecimento ou pedágio (Info Windows), Autocomplete nos campos de origem e destino e por fim o uso do serviço de Directions, onde é possível obter dados como duração e distância da rota.

![Tela de carregamento](/assets/img/posts/roteirizador-3.gif)

Para a integração dos pedágios, é usado a API da [Maplink](https://maplink.global/apis-maplink/), que conta com filtros personalizados citados acima.
