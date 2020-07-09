# E-Book: Lista de User Stories


## Histórico de Revisões do Modelo

| **Data** | **Versão** | **Descrição** | **Autor** |
| --- | --- | --- | --- |
| 01/03/2018 | 1.0 | Documento inicial. | Gabriel Batista, Darlan Gabriel, Tiago, Antônio Fernandes |


## Lista de User Stories


### User Story US01 - Manter livro

Descrição: O sistema deve fazer o cadastro de livros a serem vendidos no sistema, onde o livro terá atributo tais como: autor, descrição, ano de lançamento, vendedor e entre outros, o usuário que cadastrou o livro poderá excluir e editar detalhes do livro posteriormente.<br>
Requisitos envolvidos: RF005, RF006, RF007<br>
Prioridade: Essencial<br>
Estimativa: 2h<br>
Tempo Gasto (real): <br>
Tamanho Funcional: 16<br>

#### Testes de Aceitação (TA)
TA01.01: Cadastrar um livro e ver se aparece no “listar livros”.<br>
TA01.02: Excluir um livro e checar se foi excluído.<br>
TA01.03: Alterar os campos de um livro e checar se os campos alterados foram salvos corretamente.<br>
TA01.04: Checar se o usuário consegue ver os detalhes de um livro.<br>
TA01.05: Checar se ao preencher um livro com apenas os campos obrigatórios, ele é salvo normalmente.<br>


### User Story US02 - Manter Cliente

Descrição: O sistema deverá ser capaz de cadastrar os usuários que poderão acessar o sistema, além de o usuário poder atualizar informações futuramente, bem como excluir a sua conta do sistema.<br>
Requisitos envolvidos: RF001, RF002, RF003<br>
Prioridade: Essencial<br>
Estimativa: 2h<br>
Tempo Gasto (real): <br>
Tamanho Funcional: 14<br>

#### Testes de Aceitação (TA)
TA02.01: Cadastrar um cliente e checar se foi salvo / cadastrado corretamente.<br>
TA02.02: Inativar um cliente e checar se foi inativado.<br>
TA02.03: Alterar os campos de um cliente e checar se os campos alterados foram salvos corretamente.<br>
TA02.04: Checar se os perfis de usuários são mostrados corretamente.<br>
TA02.05: Checar se ao preencher um cliente com apenas os campos obrigatórios, ele é salvo normalmente.<br>


### User Story US03 - Manter Compra

Descrição: O sistema deve ser capaz realizar o cadastro de compras de livro realizados pelo usuário, onde irá armazenar o próprio código, além, código de livro vendido, quantidade comprada, preço e data de compra. <br>
Requisitos envolvidos: RF022, RF023, RF024, RF025<br>
Prioridade: Essencial<br>
Estimativa: 2h<br>
Tempo Gasto (real): <br>
Tamanho Funcional: 16<br>

#### Testes de Aceitação (TA)
TA03.01: Fazer uma compra e checar se foi feita corretamente.<br>
TA03.02: Cancelar uma compra e checar se foi cancelada.<br>
TA03.03: Atualizar os itens de uma compra e checar se os novos livros foram adicionados / retirados corretamente.<br>
TA03.04: Checar se os dados de uma compra finalizada foram salvos corretamente.<br>


### User Story US04 - Pagamento

Descrição: O sistema deverá ser capaz de pagamento online por meio de cartão, fazendo integração com algum gateway de pagamento. <br>
Requisitos envolvidos: RF029<br>
Prioridade: Essencial<br>
Estimativa: 4h<br>
Tempo Gasto (real): <br>
Tamanho Funcional: 8<br>

#### Testes de Aceitação (TA)
TA04.01: Checar se ao preencher dados reais e corretos, se o sistema aceita o pagamento.<br>
TA04.02: Checar se ao preencher dados falsos / incorretos, se o sistema nega o pagamento.<br>


### User Story US05 - Lista de desejo

Descrição: O sistema deverá fornecer uma lista de desejo, onde o usuário poderá colocar os itens aos quais ele tem interesse.<br>
Requisitos envolvidos: RF030, RF035, RF036<br>
Prioridade: Opcional<br>
Estimativa: 2h<br>
Tempo Gasto (real): <br>
Tamanho Funcional: 12<br>

#### Testes de Aceitação (TA)
TA05.01: Inserir um livro na lista de desejos e checar se foi salvo corretamente.<br>
TA05.02: Remover um livro da lista de desejo e checar se foi removido.<br>
TA05.03: Checar se a visualização dos livros pela lista de desejos está funcionando.<br>


### User Story US06 - Manter Comentário

Descrição: Os usuários devem ser capazes de fazer um comentário sobre um livro, além de o usuário poder atualizar informações do mesmo futuramente, bem como excluir seu comentário.<br>
Requisitos envolvidos: RF031, RF032, RF033, RF034<br>
Prioridade: Opcional<br>
Estimativa: 2h<br>
Tempo Gasto (real): <br>
Tamanho Funcional: 16<br>

#### Testes de Aceitação (TA)
TA06.01: Inserir um comentário em um livro e checar se foi salvo corretamente.<br>
TA06.02: remover um comentário de um livro e checar se foi removido.<br>
TA06.03: Checar se a visualização dos comentários de um livro está funcionando.<br>
TA06.04: Checar se ao editar e salvar um comentário ele é salvo corretamente.<br>
<br>

### User Story US07 - Relatórios

Descrição: O sistema deverá ser capaz de criar relatórios sobre as compras e vendas de livros.<br>
Requisitos envolvidos: RF026, RF027<br>
Prioridade: Opcional<br>
Estimativa: 3h<br>
Tempo Gasto (real): <br>
Tamanho Funcional: 8<br>

#### Testes de Aceitação (TA)
TA07.01: Checar se os dados de um relatório foram todos gerados corretamente.<br>
<br>

## Referências
