Projeto desenvolvido durante o curso de desenvolvimento de software na Trybe. O objetivo foi construir queries agragadas complexas no mongoDB.

# Habilidades
- Executar buscas complexas no banco mongoDB
- Usar os operadores de aggregation para fazer uma pipeline  

## Lista de requisitos

### Desafio 1
#### Retorne todos os filmes que satisfaça, através de uma  _pipeline_, as condições abaixo

* `imdb.rating` deve ser maior ou igual a `7`;
* `genres` não deve conter `Crime` ou `Horror`;
* `rated` deve ser igual a `PG` ou `G`;
* `languages` contém `English` e `Spanish`.
* Utilize a coleção `movies`.

### Desafio 2

#### Utilizando o mesmo _pipeline_ anterior, retorne apenas os campos `title`, `rated`, `imdb.rating`, `imdb.votes` e `year`, modificando seus nomes para `titulo`, `avaliado`, `notaIMDB`, `votosIMDB` e `ano`, respectivamente.

### Desafio 3

#### Retorne esses filmes ordenados por ano e nota IMDB de forma decrescente e título por ordem alfabética.

### Desafio 4

#### Crie uma _pipeline_ que retorna documentos  com o novo campo `title_split`, ela deve seguir as seguintes condições:

- `title_split` deve conter uma lista de palavras presentes em `title`.
- A pipeline deve retornar apenas filmes com o título composto apenas de uma palavra.
- A pipeline deve ser ordenada por `title` em ordem alfabética.
- A pipeline deve retornar apenas o campo `title_split`.

### Desafio 5

Lista de atores favoritos:
* Sandra Bullock
* Tom Hanks
* Julia Roberts
* Kevin Spacey
* George Clooney

#### Considerando esta lista, crie uma _pipeline_ que retorne o `title` do vigésimo quinto filme da agregação que satisfaz as seguintes condições:

- `countries` é Estados unidos no banco estará classificado como USA
- `tomatoes.viewer.rating` maior ou igual a `3`
-  Crie um novo campo chamado `num_favs`, que represente quantos atores ou atrizes da nossa lista de favoritos aparecem no elenco (informação do campo `cast` no banco) do filme, caso ele possua favoritos.
- Ordene os resultados por `num_favs`, `tomatoes.viewer.rating` e `title`, todos em ordem decrescente.

### Desafio 6

#### Considerando todos os filmes que ganharam o Oscar pelo menos uma vez, calcule o **maior valor**, **menor valor**, **média** e o **desvio padrão** das avaliações (informação do campo `imdb.rating` no banco)

### Desafio 7

#### Conte quantos filmes cada um dos atores e atrizes do elenco (`cast` no banco) já participou e obtenha uma média do campo `imdb.rating` para cada um desses atores e atrizes.

### Desafio 8

#### Liste todas as parcerias da coleção `air_alliances`, que voam rotas com um Boing 747 ou um Airbus A380 , para descobrir qual delas tem o maior número de rotas com esses aviões.

### Desafio 9

#### A partir da coleção `trips`, determine o menor e o maior ano de nascimento. 

### Desafio 10

#### Encontre a duração média de viagens por tipo de usuário. 

### Desafio 11

#### Determine qual o dia da semana com maior número de viagens iniciadas.

### Desafio 12

#### Usando a pipeline anterior que retorna o dia com mais viagens, determine qual estação tem o maior número de viagens nesse dia da semana.

### Desafio 13

#### Determine a duração média das viagens iniciadas no dia `10/03/2016`, em minutos.

### Desafio 14

#### Baseado na duração média das viagens, determine quais são as `5` bicicletas que foram mais utilizadas. 
