# Anotações do YoungSpiritHUB
<p>Melhorado por ChatGPT</p>

> **Observação:** `cd ..` volta um nível no diretório atual.\
> Estas anotações são pessoais e não devem ser enviadas ao GitHub.

## 1. Se tudo der errado: recuperar a versão inicial

O commit inicial que quero manter como referência é:

-   **Hash:** `7307d9f`
-   **Mensagem:**
    `Versão inicial (ainda não é deploy) / Initial M.V.P. version (not deployed yet)`

Antes de executar comandos que alteram a branch, confira o estado do
repositório:

``` bash
git status
git log --oneline --decorate
```

### Apenas consultar a versão antiga

Para abrir o commit antigo sem mover a branch `main`:

``` bash
git switch --detach 7307d9f
```

Isso deixa o repositório em *detached HEAD*. É útil para consultar
arquivos, mas não é o fluxo normal para continuar desenvolvendo.

### Criar uma branch a partir do commit antigo

Se quiser trabalhar a partir daquela versão sem mexer diretamente na
`main`:

``` bash
git switch -c recuperacao/versao-inicial 7307d9f
```

### Voltar a `main` exatamente para aquele commit

**Atenção:** este comando é destrutivo para o histórico atual da `main`
e descarta alterações locais não salvas. Só use se tiver certeza de que
é isso que deseja:

``` bash
git switch main
git reset --hard 7307d9f
```

Não execute `reset --hard` só porque algo parece quebrado. Primeiro
confira `git status` e, se necessário, faça um commit ou backup.

## 2. Backend: rotas e endpoints

Mesmo que o código use o nome `routes`, isso não significa que cada rota
seja uma página do navegador.

-   **Endpoints do backend**, como `/users`, recebem requisições e
    devolvem respostas ou dados para o frontend.
-   **Páginas do React** são definidas no frontend, por exemplo, por
    meio de `App.jsx` e do sistema de rotas usado pelo projeto.
-   **Rotas da API** e **páginas do site** são coisas diferentes.
    Misturá-las é uma ótima maneira de confundir o próprio projeto.

## 3. Roteiro de validação de entrada no banco de dados

Fluxo básico para validar a criação e o login de um usuário:

1.  **Criar usuário:** receber os dados e validar os campos.
2.  **Salvar usuário:** persistir os dados válidos no banco.
3.  **Buscar usuário:** localizar o registro necessário.
4.  **Validar login:** conferir as credenciais com segurança e responder
    ao frontend.

> Nunca armazene senhas em texto puro. Use uma biblioteca adequada para
> gerar e verificar hashes de senha.

## 4. Escopo do MVP do YoungSpiritHUB

**MVP** significa *Minimum Viable Product*: a menor versão do produto
que permite testar a ideia principal.

### Usuário comum

-   Visualizar devocionais.
-   Curtir devocionais em uma etapa futura, depois de definir como a
    autenticação vai funcionar.
-   Exigir autenticação para registrar curtidas associadas a uma conta.
    Não usar `localStorage` como fonte confiável para curtidas de
    usuários autenticados.

### Usuário administrador

-   Criar devocionais.

### Essencial para a primeira versão

-   Página inicial (`Home`).
-   Página de login (`Login`).
-   Até quatro devocionais de demonstração.

### Não incluso no MVP

-   Comentários.
-   Notificações.
-   Perfil completo de usuário.
-   Busca avançada.
-   Sistema de seguidores.
-   Aplicativo para celular.

Esses itens podem entrar no planejamento depois que o fluxo principal
estiver funcionando.

## 5. Git: estados dos arquivos e fluxo de trabalho

O Git não funciona exatamente como uma fila em que todo arquivo
obrigatoriamente passa por todas as etapas. Esta é uma visão
simplificada do fluxo normal:

1.  **Arquivo novo ou modificado:** confira o que mudou.

    ``` bash
    git status
    ```

2.  **Preparar as alterações (*staging area*):**

    ``` bash
    git add caminho/do/arquivo
    ```

    Para preparar todas as alterações não ignoradas:

    ``` bash
    git add .
    ```

3.  **Conferir o que está preparado:**

    ``` bash
    git diff --staged
    ```

4.  **Registrar um commit:**

    ``` bash
    git commit -m "tipo: descrição curta"
    ```

5.  **Enviar os commits para o repositório remoto:**

    ``` bash
    git push
    ```

### O que cada estado significa?

-   **Untracked:** o Git ainda não está acompanhando o arquivo.
-   **Modified:** um arquivo já acompanhado foi alterado.
-   **Staged:** as alterações foram preparadas para entrar no próximo
    commit.
-   **Committed:** as alterações foram registradas em um commit local.
-   **Pushed:** os commits foram enviados ao repositório remoto. `push`
    não é um estado de arquivo, e sim o envio de commits.

### Tirar um arquivo da área de staging

Se você executou `git add` e quer desfazer a preparação de um arquivo,
sem apagar o arquivo local:

``` bash
git restore --staged -- caminho/do/arquivo
```

### Parar de acompanhar um arquivo sem apagá-lo do computador

Exemplo com um arquivo:

``` bash
git rm --cached -- RotaAPI_example.png
```

Exemplo com uma pasta:

``` bash
git rm -r --cached -- PASTA/
```

Para que o arquivo não volte a ser incluído, adicione seu nome ao
`.gitignore`. Se o arquivo já estava sendo acompanhado pelo Git, só
adicionar ao `.gitignore` não basta: é necessário removê-lo do índice
com `git rm --cached`, registrar essa mudança em um commit e enviá-la.

**Importante:** isso impede que novas versões sejam acompanhadas, mas
não apaga cópias que já existam no histórico de commits do repositório.

## 6. Anotações pessoais fora do GitHub

Os arquivos `anotacao.md` e `versionamento.md` são notas pessoais e não
devem ser enviados ao GitHub.

Na raiz do projeto, inclua no `.gitignore`:

``` gitignore
/anotacao.md
/versionamento.md
```

Uma alternativa é guardar todas as notas pessoais numa pasta
`minhas-anotacoes/` e ignorar a pasta inteira:

``` gitignore
/minhas-anotacoes/
```

Se esses arquivos já estiverem sendo acompanhados pelo Git, execute uma
vez:

``` bash
git rm --cached -- anotacao.md versionamento.md
git add .gitignore
git commit -m "chore: ignora anotações pessoais"
git push
```

O comando `git rm --cached` mantém os arquivos no computador, mas os
remove do índice do Git. Confira `git status` antes do commit.

## 7. Sites e endereços úteis durante o desenvolvimento

Estes endereços locais funcionam apenas enquanto os servidores
correspondentes estiverem em execução no seu computador.

-   **Frontend React / Vite:** <http://localhost:5173/Login>
-   **Backend / API:** <http://localhost:3000/>
-   **Ferramenta para testar requisições HTTP:** <https://reqbin.com/>

Se o endereço local não abrir, confira se o servidor correto está
rodando e se a porta está certa.

## 8. Versionamento semântico: exemplo

Os números abaixo são apenas exemplos. Produto, frontend e backend podem
ter versões independentes, dependendo de como o projeto é organizado.

  Parte                      Exemplo de versão
  ------------------------ -------------------
  Produto YoungSpiritHUB               `0.0.1`
  Backend                              `1.5.3`
  Frontend                             `2.1.0`

No versionamento semântico, o formato comum é `MAJOR.MINOR.PATCH`:

-   **MAJOR:** mudança incompatível com versões anteriores.
-   **MINOR:** funcionalidade nova compatível com versões anteriores.
-   **PATCH:** correção compatível com versões anteriores.

Antes da versão `1.0.0`, o projeto ainda está em desenvolvimento inicial
e pode mudar bastante. O número de versão do produto também não precisa
ser igual ao de `package.json`.

## 9. Branch para reconstruir o frontend com Mobile First

A ideia é manter a versão anterior na `main` e fazer a reconstrução em
uma branch separada.

``` text
main
└── versão anterior do site

refatoracao/mobile-first
└── nova versão em desenvolvimento
```

### Antes de criar a branch

Confira o estado atual e salve as alterações que deseja manter:

``` bash
git status
git add .
git commit -m "chore: salva versão antes da refatoração"
git push
```

Antes de usar `git add .`, confirme que as anotações pessoais estão
ignoradas pelo `.gitignore`.

### Criar e publicar a branch de refatoração

Se a branch ainda não existir:

``` bash
git switch main
git switch -c refatoracao/mobile-first
git push -u origin refatoracao/mobile-first
```

O `-u` configura a branch remota como destino padrão para os próximos
`git push` e `git pull`.

Se a branch **já existir**, troque para ela em vez de tentar criá-la
novamente:

``` bash
git switch refatoracao/mobile-first
```

### Comandos úteis para branches

Ver todas as branches locais:

``` bash
git branch
```

Ver em qual branch você está:

``` bash
git branch --show-current
```

Trocar de branch:

``` bash
git switch main
git switch refatoracao/mobile-first
```

Depois de fazer alterações na branch de refatoração:

``` bash
git status
git add .
git commit -m "refactor: reorganiza frontend com mobile first"
git push
```

A `main` só recebe essas mudanças quando você fizer um merge ou abrir e
concluir um pull request. Criar uma branch não copia automaticamente os
commits futuros de uma branch para a outra.

## 10. Convenção de mensagens de commit

Use um prefixo curto para indicar a intenção do commit.

  -----------------------------------------------------------------------
  Prefixo                 Significado             Quando usar
  ----------------------- ----------------------- -----------------------
  `feat`                  Funcionalidade          Adicionou uma
                                                  funcionalidade nova.

  `fix`                   Correção                Corrigiu um bug ou
                                                  comportamento
                                                  incorreto.

  `chore`                 Manutenção              Atualizou
                                                  configurações,
                                                  ferramentas ou arquivos
                                                  auxiliares.

  `refactor`              Refatoração             Reorganizou o código
                                                  sem mudar seu
                                                  comportamento externo.

  `style`                 Formatação              Ajustou espaços,
                                                  indentação ou
                                                  formatação sem mudar a
                                                  lógica.

  `docs`                  Documentação            Atualizou documentação
                                                  ou anotações que fazem
                                                  parte do repositório.

  `test`                  Testes                  Adicionou ou alterou
                                                  testes.
  -----------------------------------------------------------------------

Exemplos:

``` bash
git commit -m "feat: adiciona listagem de devocionais"
git commit -m "fix: corrige validação do login"
git commit -m "refactor: reorganiza CSS com mobile first"
git commit -m "docs: atualiza instruções do projeto"
```

## 11. Checklist rápido antes de encerrar uma sessão

1.  Execute `git status`.
2.  Confira se está na branch certa com `git branch --show-current`.
3.  Revise as alterações com `git diff` e, se já estiverem preparadas,
    `git diff --staged`.
4.  Verifique se as notas pessoais continuam ignoradas.
5.  Faça um commit com uma mensagem clara.
6.  Envie os commits com `git push`.
