# Fashionista
### Um projeto de React estimulado pela [Codenation](https://www.codenation.dev/)

**Link para o site: https://codenation-fashionista.netlify.app/**

---

## Contexto

O desenvolvedor front-end é um profissional de tecnologia bastante requerido no mercado digital, sendo responsável pela apresentação do produto (sites, aplicativos mobiles, etc.) para o cliente. Como me interesso por essa área de desenvolvimento, procurei por meios em que poderia me desenvolver e o AceleraDev React da Codenation foi minha primeira oportunidade.
O programa consistia em 9 módulos com conteúdos e pequenos projetos mais um projeto final. Este repositório contém o projeto final desenvolvido por mim.

- **Sobre o projeto**

	O projeto contemplava a grande maioria dos conteúdos apresentados durante o programa e dava a oportunidade ao participante de trabalhar em um projeto partindo do zero e alcançando resultados avançados. O escopo do projeto é enunciado a seguir:

	> Como um profissional front-end, você será responsável por desenvolver as principais funcionalidades de um e-commerce de moda feminina, o Fashionista, garantindo a melhor experiência possível para os usuários interagirem com os produtos.

	O projeto deveria seguir algumas regras que direcionavam o desenvolvimento. Dentre elas estão:

	- Deve ser mobile first
	- Deve consumir uma API (fornecida)
	- O estado global da aplicação deverá ser gerenciado com Redux

	Outros detalhes do projeto são encontrados na [página de instruções](https://wwww.codenation.dev/private-journey/react-online-1/challenge/ecommerce).

## Desenvolvimento

O projeto foi desenvolvido com a ferramenta **[create-react-app](https://github.com/facebook/create-react-app)** para criar uma aplicação front-end com React, o que foi útil para criar uma interface do usuário dinâmica e simples. O React facilitou também a criação de uma **[Single Page Application](https://en.wikipedia.org/wiki/Single-page_application)** , que melhora a experiência do usuário.
O começo do desenvolvimento foi focado na criação e estilização dos componentes que integrariam a interface do E-Commerce. Para isso, optei por usar arquivos .jsx combinados com estilos CSS escritos em SASS. Além disso, um dos requisitos do projeto era que deveria ser utillizada a **[metodologia BEM CSS](http://getbem.com/introduction/)** para escrever os estilos dos componentes.
Posteriormente, comecei a integrar os componentes para criar as páginas e a escrever o código que regeria a aplicação. No final desta fase, a aplicação já renderizava todos os produtos que a API fornecia.
Depois, implementei o **[Redux](https://redux.js.org/)** para gerenciamento dos estados da aplicação e cuidei de linkar as páginas através do **[React Router](https://reacttraining.com/react-router/)**. Com isso, já foi possível finalizar a funcionalidade de busca por produto e a "Sacola" ou "Carrinho de compra" que todo E-Commerce possui por necessidade.
Finalmente, trabalhei em adquirir e guardar informações no storage local para que a "Sacola" não zerasse caso o site fosse atualizado. Deste modo, a aplicação já estava pronta para deploy.

## Aprendizados

Além dos aprendizados práticos de realizar um projeto, adquiri conhecimento em diversos conteúdos, sendo os principais:

- Criação de interfaces web com React
- Gerenciamento de estado com Redux
- Desenvolvimento de SPA
- Desenvolvimento de testes com Jest
- Metodologia BEM CSS e Atomic Design

## Próximos passos

O que devo fazer agora é aprofundar em conteúdos relacionados e conhecer melhor as boas práticas do desenvolvedor front-end. Um item que ficou notório que preciso melhorar e praticar é desenvolvimento de testes unitários. Além disso, vou estudar mais a respeito de CI/CD, PWA e React Hooks.
Pretendo voltar neste projeto para implementar animações com o **[Framer Motion](https://www.framer.com/motion/)** para React, pois acredito que faltou este detalhe na UI, e é um conteúdo que gostaria de aprender, visto sua importância no que tange a experiência do usuário.
Conteúdo novo que estudarei agora é, a princípio, **[React Native](https://reactnative.dev/)**, para desenvolvimento front-end em dispositivos Mobile.