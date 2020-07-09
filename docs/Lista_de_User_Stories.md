# Processo BSI - Lista de User Stories

UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE

CENTRO DE ENSINO SUPERIOR DO SERIDÓ

DEPARTAMENTO DE CIÊNCIAS EXATAS E APLICADAS

PROGRAMA DE GRADUAÇÃO EM SISTEMAS DE INFORMAÇÃO

Antonio Fernandes Junior

Darlan Gabriel de Medeiros Macedo

Evandir Linhares de Andrade Filho

Gabriel Batista Félix

Guilherme Felipe de Oliveira Medeiros

Tiago José Vieira de Oliveira

**E-Book: Especificação de User Story**

Caicó – RN

2020

## Sumário

[Histórico de Revisões do Modelo](#_ppxv15nmtbex) 3

**[Descrição](#_fxf7gay5q414) 4**

[Histórico de revisões](#_wjbunykwpplm) 5

**[Lista de User Stories](#_8x32qkmzb304) 5**

[User Story US01 - Manter livro](#_34vgmx27rvgd) 5

[User Story US02 - Manter Cliente](#_5n8rw5awr6vp) 5

[User Story US03 - Cadastrar Compra](#_x9na7hu3kxh7) 6

**[Referências](#_ts08cen5ibh0) 6**

##


## Histórico de Revisões do Modelo

| **Data** | **Versão** | **Descrição** | **Autor** |
| --- | --- | --- | --- |
| 01/03/2018 | 1.0 | Documento inicial. | Gabriel Batista, Darlan Gabriel, Tiago, Antônio Fernandes |

##


##


##


##


##


## Lista de User Stories

|
## User Story US01 - Manter livro
 |
| **Descrição**                | O sistema deve fazer o cadastro de livros a serem vendidos no sistema, onde o livro terá atributo tais como: autor, descrição, ano de lançamento, vendedor e entre outros, o usuário que cadastrou o livro poderá excluir e editar detalhes do livro posteriormente. |                                                                                                                                                                                                                                                                                        |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Requisitos envolvidos**    | RF005, RF006, RF007                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                        |
| **Prioridade**               | Essencial                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                        |
| **Estimativa**               | 2h                                                                                                                                                                                                                                                                   | Tempo Gasto (real):                                                                                                                                                                                                                                                                    |
| **Tamanho Funcional**        |                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                        |
| **Testes de Aceitação (TA)** | Código                                                                                                                                                                                                                                                               | Descrição                                                                                                                                                                                                                                                                              |
|                          | TA01.01                                                                                                                                                                                                                                                              | O usuário informa, na tela Registrar livros, todos os dados para registrar o livro corretamente, ao clicar em salvar ele é notificado com uma mensagem de sucesso. Mensagem: Livro cadastrado com sucesso. Além disso, o usuário será capaz de excluir e alterar detalhes de um livro. |

|
## User Story US02 - Manter Cliente
 |
| Descrição                | O sistema deverá ser capaz de cadastrar os usuários que poderão acessar o sistema, além de o usuário poder atualizar informações futuramente, bem como excluir a sua conta do sistema. |                     |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Requisitos envolvidos    | RF001, RF002, RF003                                                                                                                                                                    |                     |
| Prioridade               | Essencial                                                                                                                                                                              |                     |
| Estimativa               | 2h                                                                                                                                                                                     | Tempo Gasto (real): |
| Tamanho Funcional        |                                                                                                                                                                                        |                     |
| Testes de Aceitação (TA) | Código                                                                                                                                                                                 | Descrição           |
|                          | TA01.01                                                                                                                                                                                |                     |

|
## User Story US03 - Manter Compra
 |
| Descrição                | O sistema deve ser capaz realizar o cadastro de compras de livro realizados pelo usuário, onde irá armazenar o próprio código, além, código de livro vendido, quantidade comprada, preço e data de compra. |                     |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Requisitos envolvidos    | RF022, RF023, RF024, RF025                                                                                                                                                                                 |                     |
| Prioridade               | Essencial                                                                                                                                                                                                  |                     |
| Estimativa               | 2h                                                                                                                                                                                                         | Tempo Gasto (real): |
| Tamanho Funcional        |                                                                                                                                                                                                            |                     |
| Testes de Aceitação (TA) | Código                                                                                                                                                                                                     | Descrição           |
|                          | TA01.01                                                                                                                                                                                                    |                     |
|
## User Story US04 - Pagamento
 |
| Descrição                | O sistema deverá ser capaz de pagamento online por meio de cartão, fazendo integração com algum gateway de pagamento |                                                                                                                                                                                                                     |
|--------------------------|----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos envolvidos    | RF029                                                                                                                |                                                                                                                                                                                                                     |
| Prioridade               | Opcional                                                                                                             |                                                                                                                                                                                                                     |
| Estimativa               | 4h                                                                                                                   | Tempo Gasto (real):                                                                                                                                                                                                 |
| Tamanho Funcional        |                                                                                                                      |                                                                                                                                                                                                                     |
| Testes de Aceitação (TA) | Código                                                                                                               | Descrição                                                                                                                                                                                                           |
|                          | TA01.01                                                                                                              | O usuário deverá entrar com os dados do seu cartão de crédito como input , o sistema irá repassar esses dados para o back-end e o backend fará integração com um gateway para que a transação ocorra como esperado. |

|
## User Story US05 - Lista de desejo
 |
| Descrição                | O sistema deverá fornecer uma lista de desejo, onde o usuário poderá colocar os itens aos quais ele tem interesse. |                     |
|--------------------------|--------------------------------------------------------------------------------------------------------------------|---------------------|
| Requisitos envolvidos    | RF030, RF035, RF036                                                                                                |                     |
| Prioridade               | Opcional                                                                                                           |                     |
| Estimativa               | 2h                                                                                                                 | Tempo Gasto (real): |
| Tamanho Funcional        |                                                                                                                    |                     |
| Testes de Aceitação (TA) | Código                                                                                                             | Descrição           |
|                          | TA01.01                                                                                                            |                     |

|
## User Story US06 - Manter Comentário
 |
| Descrição                | O sistema deve ser capaz realizar o cadastro de compras de livro realizados pelo usuário, onde irá armazenar o próprio código, além, código de livro vendido, quantidade comprada, preço e data de compra. |                     |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Requisitos envolvidos    | RF022, RF023, RF024, RF025                                                                                                                                                                                 |                     |
| Prioridade               | Essencial                                                                                                                                                                                                  |                     |
| Estimativa               | 2h                                                                                                                                                                                                         | Tempo Gasto (real): |
| Tamanho Funcional        |                                                                                                                                                                                                            |                     |
| Testes de Aceitação (TA) | Código                                                                                                                                                                                                     | Descrição           |
|                          | TA01.01                                                                                                                                                                                                    |                     |
|
## User Story US07 - Relatórios
 |
| Descrição                | O sistema deve ser capaz realizar o cadastro de compras de livro realizados pelo usuário, onde irá armazenar o próprio código, além, código de livro vendido, quantidade comprada, preço e data de compra. |                     |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Requisitos envolvidos    | RF022, RF023, RF024, RF025                                                                                                                                                                                 |                     |
| Prioridade               | Essencial                                                                                                                                                                                                  |                     |
| Estimativa               | 2h                                                                                                                                                                                                         | Tempo Gasto (real): |
| Tamanho Funcional        |                                                                                                                                                                                                            |                     |
| Testes de Aceitação (TA) | Código                                                                                                                                                                                                     | Descrição           |
|                          | TA01.01                                                                                                                                                                                                    |                     |
## Referências

(coloque aqui, artigos, livros e sites utilizados e citados no documento)

Modelos BSI - Doc 001 - Documento de Visão. Acessível em:
