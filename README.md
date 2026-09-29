# Instituto Raízes da Igualdade

Projeto acadêmico de uma plataforma para uma ONG fictícia voltada à educação antirracista. O repositório reúne as experiências práticas da disciplina de Desenvolvimento Front-end.

## Experiências práticas

- `experiencia pratica 1`: estrutura institucional em HTML semântico.
- `experiencia pratica 2`: Design System, responsividade, CSS Grid, Flexbox e componentes visuais.
- `experiencia pratica 3`: Single Page Application com JavaScript, templates dinâmicos, validação de formulário, LocalStorage e Toast do Bootstrap.

## Funcionalidades da SPA

- Navegação dinâmica entre Início, Projetos e Participe.
- Cartões de projetos criados por template HTML5.
- Validação em tempo real de nome e e-mail.
- Mensagens de erro acessíveis e foco no primeiro campo inválido.
- Persistência do formulário com LocalStorage.
- Alerta para modo offline e notificação de sucesso com Bootstrap.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Bootstrap 5 via CDN
- Git e GitHub

## Pré-requisitos

- Navegador moderno, como Microsoft Edge, Google Chrome ou Firefox.
- Visual Studio Code, recomendado para editar o projeto.
- Extensão Live Server no VS Code, recomendada para executar a SPA em um servidor local.
- Git, caso seja necessário versionar ou clonar o repositório.

## Dependências

O projeto não utiliza NPM, Node.js ou etapa de instalação de pacotes. A única biblioteca externa é o Bootstrap 5, carregado por CDN para disponibilizar o componente Toast.

## Estrutura da aplicação interativa

```text
experiencia pratica 3/
├── html/       # página principal da SPA
├── css/        # estilos
├── imagens/    # recursos visuais
└── js/         # módulos de templates, rotas, formulário, rede e armazenamento
```

## Como executar

1. Clone este repositório.
2. Abra a pasta `experiencia pratica 3/html` no VS Code.
3. Execute `index.html` com a extensão Live Server para utilizar a SPA e o LocalStorage de forma confiável.

## Build para produção

Por utilizar HTML, CSS e JavaScript puro, não existe um comando de build obrigatório. Para publicação, os arquivos podem ser enviados diretamente a uma hospedagem estática. Antes do deploy, recomenda-se revisar os caminhos dos arquivos, comprimir imagens e testar a aplicação em diferentes navegadores.

## Testes manuais

1. Navegue entre Início, Projetos e Participe, verificando a troca de conteúdo sem recarregar a página.
2. Teste o formulário vazio, nome com menos de três caracteres e e-mail inválido.
3. Envie um formulário válido, atualize a página e confirme a recuperação dos dados pelo LocalStorage.
4. Navegue com as teclas `Tab` e `Shift + Tab`, verificando foco visível e ordem lógica.
5. Simule o modo offline nas ferramentas do navegador e confirme a exibição do alerta de conexão.

## Acessibilidade

O projeto utiliza HTML semântico, rótulos associados aos campos, mensagens com `aria-live`, `aria-invalid`, foco visível e navegação por teclado.

## Autora

Júlia Martins Figueiredo
