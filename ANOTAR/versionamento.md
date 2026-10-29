# 📦 Versionamento Semântico (MAJOR.MINOR.PATCH)

O **Versionamento Semântico (SemVer)** é uma convenção utilizada para comunicar o tipo de mudança realizada em um software.

Ele não mede a qualidade visual, a beleza da interface ou a quantidade de código escrito. Seu objetivo é indicar a natureza das mudanças entre versões.

## 1. Formato da versão

O formato padrão é:

```text
MAJOR.MINOR.PATCH
```

Exemplo:

```text
1.4.2
```

Cada número possui um significado:

| Componente | Significado | Quando incrementar |
|---|---|---|
| `MAJOR` | Mudanças incompatíveis | Quando uma alteração quebra a compatibilidade com versões anteriores. |
| `MINOR` | Novas funcionalidades | Quando funcionalidades são adicionadas sem quebrar a compatibilidade. |
| `PATCH` | Correções | Quando são feitas correções compatíveis com a versão anterior. |

**Regra geral:** ao incrementar um componente, os componentes à sua direita voltam para zero.

Por exemplo:

```text
1.4.2 → 1.4.3  # PATCH
1.4.2 → 1.5.0  # MINOR
1.4.2 → 2.0.0  # MAJOR
```

---

## 2. PATCH: correções

O componente `PATCH` é incrementado quando fazemos correções que não alteram a compatibilidade da versão.

### Exemplos no frontend

- Corrigir um botão que não funciona.
- Corrigir um erro de exibição.
- Ajustar um texto.
- Corrigir um bug no formulário de login.
- Corrigir um problema de responsividade sem introduzir mudanças incompatíveis.

### Exemplo de incremento

```text
0.0.1 → 0.0.2
```

Nesse exemplo, a versão passa de `0.0.1` para `0.0.2` porque foi realizada uma correção.

---

## 3. MINOR: novas funcionalidades

O componente `MINOR` é incrementado quando adicionamos funcionalidades compatíveis com o funcionamento anterior.

### Exemplo no YoungSpiritHUB

**Antes:**

- Página inicial.
- Lista de devocionais.

**Depois:**

- Página inicial.
- Lista de devocionais.
- Busca de devocionais.
- Filtros.
- Sistema de favoritos.

Se as novas funcionalidades mantiverem a compatibilidade, podemos incrementar o componente `MINOR`.

### Exemplo de incremento

```text
0.1.0 → 0.2.0
```

O componente `PATCH` volta para zero porque o incremento ocorreu no componente `MINOR`.

**Atenção:** adicionar uma página, por si só, não determina automaticamente o tipo de incremento. O que importa é a natureza da mudança e a compatibilidade com a versão anterior.

---

## 4. MAJOR: mudanças incompatíveis

O componente `MAJOR` é incrementado quando fazemos alterações incompatíveis com versões anteriores.

Isso pode acontecer quando modificamos contratos de API, removemos funcionalidades existentes ou alteramos interfaces das quais outras partes do sistema dependem.

### Exemplos

- Alterar a estrutura de uma API de maneira incompatível.
- Remover um endpoint utilizado pelo frontend.
- Modificar uma interface pública de forma que aplicações existentes deixem de funcionar.
- Alterar o formato de dados esperado por outros componentes do sistema.

### Exemplo de incremento

```text
1.0.0 → 2.0.0
```

### Uma observação sobre o frontend

**Refazer toda a interface não exige necessariamente um incremento MAJOR.**

Se o frontend for reconstruído com React e Mobile First, mas continuar oferecendo as mesmas funcionalidades e mantendo a compatibilidade esperada, a mudança pode ser uma refatoração interna.

O tipo de versão depende do impacto da mudança, não apenas do tamanho do trabalho.

---

## 5. Importante: versões anteriores à 1.0.0

Quando um projeto utiliza versões como:

```text
0.0.1
0.1.0
0.5.0
```

ele está na fase inicial de desenvolvimento, antes da primeira versão estável `1.0.0`.

Nessa fase, o projeto pode evoluir rapidamente e sofrer mudanças incompatíveis. Por isso, é importante não interpretar os números com o mesmo grau de estabilidade esperado de uma API já consolidada.

No SemVer, a versão `1.0.0` indica que a API pública foi definida. Ela não significa que o software está livre de bugs ou que sua qualidade é perfeita.

---

## 6. A versão do produto pode ser diferente da versão do package.json

A versão do produto e as versões dos seus componentes podem ser independentes.

### Exemplo

**Produto:**

```text
YoungSpiritHUB v0.0.1
```

**Backend:**

```json
{
  "version": "1.0.0"
}
```

**Frontend:**

```json
{
  "version": "0.0.1"
}
```

Nesse exemplo:

- `YoungSpiritHUB v0.0.1` representa a versão atribuída ao produto como um todo.
- `1.0.0` representa a versão declarada no `package.json` do backend.
- `0.0.1` representa a versão declarada no `package.json` do frontend.

Esses números não precisam ser iguais, pois podem representar componentes diferentes, com ciclos de desenvolvimento próprios.

**Importante:** o campo `version` do `package.json` não é atualizado automaticamente sempre que você faz um commit no Git.

---

## 7. Exemplo de ciclo de versionamento do projeto

Imagine o seguinte desenvolvimento do YoungSpiritHUB:

| Versão | Exemplo de evolução |
|---|---|
| `0.0.1` | Primeira versão do MVP. |
| `0.0.2` | Correção de um bug no login. |
| `0.1.0` | Adição de uma nova funcionalidade compatível. |
| `0.1.1` | Correção de um problema nos filtros. |
| `0.2.0` | Adição de outra funcionalidade compatível. |
| `1.0.0` | Primeira versão estável, com a API pública definida. |
| `2.0.0` | Mudança incompatível que exige uma nova versão MAJOR. |

Os exemplos representam um possível fluxo, não uma sequência obrigatória.

---

## 8. Versionamento não é a mesma coisa que commit

O versionamento semântico e os commits do Git cumprem funções diferentes.

| Conceito | Finalidade |
|---|---|
| Commit | Registrar um conjunto de alterações no histórico do Git. |
| Versão | Comunicar o estado de uma publicação ou de um componente do software. |
| Branch | Manter uma linha de desenvolvimento independente. |
| Tag | Identificar um ponto específico do histórico, frequentemente associado a uma versão. |
| Deploy | Publicar ou disponibilizar uma aplicação em um ambiente. |

Por exemplo, podemos fazer vários commits durante o desenvolvimento de uma funcionalidade e, depois, publicar uma versão que reúna essas alterações.

Uma branch nova também não exige automaticamente uma versão nova. No caso da `refatoracao/mobile-first`, primeiro desenvolvemos e validamos a reconstrução; depois decidimos como ela será versionada.

---

## 9. Resumo rápido

| Se a mudança for... | Incremento típico |
|---|---|
| Uma correção compatível | `PATCH` |
| Uma nova funcionalidade compatível | `MINOR` |
| Uma alteração incompatível | `MAJOR` |

Exemplos partindo da versão `1.4.2`:

```text
Correção:                  1.4.2 → 1.4.3
Nova funcionalidade:       1.4.2 → 1.5.0
Mudança incompatível:      1.4.2 → 2.0.0
```

**Conclusão:** o número da versão comunica o tipo e o impacto das mudanças. Ele não é uma nota de qualidade, uma contagem de commits ou uma medida da quantidade de trabalho realizado.
