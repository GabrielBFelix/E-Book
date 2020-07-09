# Análise de Pontos de Função para o Sistema APF


## Descrição do projeto
O Sistema a ser desenvolvido será um sistema de compras de livros, onde o usuário cadastrado poderá comprar livros que estão disponíveis, tais livros serão adicionados pelos próprios usuários, ou seja, os usuários terão opções de comprar / vender.
O sistema irá gerar relatórios com o objetivo de manter o usuário informado sobre os tipos de transações que ele fez e mostrando informações sobre os livros que ele colocou a venda.

## Siglas
- PF - Pontos de Função
- APF - Análise de Pontos de Função
- ALI - Arquivos Lógicos Internos

## Lista de User Stories - US
Lista de User Stories e os requisitos que estão associados.

### User Story US01 - Manter livro
- RF005 - Cadastrar livro
- RF006 - Atualizar livro
- RF007 - Excluir livro

### User Story US02 - Manter Cliente
- RF001 - Cadastrar usuário
- RF002 - Atualizar usuário
- RF003 - Desativar conta

### User Story US03 - Cadastrar Compra
- RF022 - Cadastrar compra
- RF023 - Atualizar compra
- RF024 - Cancelar compra
- RF025 - Visualizar compra

### User Story US04 - Pagamento
- RF029 - Interação com sistema de pagamento

### User Story US05 - Lista de desejo
- RF030 - Cadastrar livro na lista de desejos
- RF035 - Remover livro da lista de desejos
- RF036 - Visualizar lista de desejos

### User Story US06 - Manter Comentário
- RF031 - Cadastrar comentário
- RF032 - Atualizar comentário
- RF033 - Excluir comentário
- RF034 - Visualizar comentários

### User Story US07 - Relatórios
- RF026 - Gerar documento de venda
- RF027 - Geerar documento de compra  

## Tipos de Contagem

### Contagem Indicativa (Ci)

<table>
<thead>
<tr>
<th><strong>ALI/AIE</strong></th>
<th><strong>Entidades Relacionadas</strong></th>
<th><strong>PF</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Usuário</td>
<td>Usuário e Endereço</td>
<td>35</td>
</tr>
<tr>
<td>Compra</td>
<td>Compra</td>
<td>35</td>
</tr>
<tr>
<td>Venda</td>
<td>Venda e compra</td>
<td>35</td>
</tr>
<tr>
<td>Livro</td>
<td>Livro</td>
<td>35</td>
</tr>
<tr>
<td>Comentário</td>
<td>Comentário e Usuário</td>
<td>35</td>
</tr>
<tr>
<td>Lista de Desejo</td>
<td>Lista de Desejo, usuário e livro</td>
<td>35</td>
</tr>
<tr>
<td>Pagamento</td>
<td>Pagamento</td>
<td>15</td>
</tr>
</tbody>
<tfoot>
<tr>
<td><strong>Contagem Indicativa</strong></td>
<td></td>
<td><strong>225</strong></td>
</tr>
</tfoot>
</table>

### Contagem Estimativa (Ce)
<table>
<thead>
<tr>
<th>Nome</th>
<th>Tipo de função</th>
<th>Complexidade</th>
<th>PF</th>
</tr>
</thead>
<tbody>
<tr>
<td>Usuário</td>
<td>ALI</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>Compra</td>
<td>ALI</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>Venda</td>
<td>ALI</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>Livro</td>
<td>ALI</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>Comentário</td>
<td>ALI</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>Lista de desejo</td>
<td>ALI</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>Pagamento</td>
<td>AIE</td>
<td>Baixa</td>
<td>5</td>
</tr>
<tr>
<td>Cadastrar usuário</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Atualizar usuário</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Desativar usuário</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Cadastrar compra</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Atualizar compra</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Cancelar compra</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Visualizar compra</td>
<td>CE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Relatório venda</td>
<td>CE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Cadastrar livro</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Atualizar livro</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Excluir livro</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Cadastrar comentário</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Atualizar comnentário</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Excluir comentário</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Visualizar comentário</td>
<td>CE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Cadastra livro na lista de desejos</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Remover livro da lista de desejos</td>
<td>EE</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Visualizar lista de desejos</td>
<td>CE</td>
<td>Média</td>
<td>4</td>
</tr>
</tbody>
<tfoot>
<tr>
<td><strong>Contagem estimativa</strong></td>
<td></td>
<td></td>
<td><strong>119</strong></td>
</tr>
</tfoot>
</table>

### Contagem Detalhada (Cd)

<table>
<thead>
<tr>
<th>Descrição</th>
<th>Tipo</th>
<th>DER</th>
<th>RLR</th>
<th>Complexidade</th>
<th>Contribuição</th>
</tr>
</thead>
<tbody>
<tr>
<td>ALI Usuário (Usuário + Endereço)</td>
<td>ALI</td>
<td>12</td>
<td>2</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>ALI Compra (Compra + Venda)</td>
<td>ALI</td>
<td>5</td>
<td>2</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>ALI Livro</td>
<td>ALI</td>
<td>6</td>
<td>1</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>ALI Comentário</td>
<td>ALI</td>
<td>2</td>
<td>1</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>ALI Lista de desejo</td>
<td>ALI</td>
<td>1</td>
<td>1</td>
<td>Baixa</td>
<td>7</td>
</tr>
<tr>
<td>AIE Pagamento</td>
<td>AIE</td>
<td>5</td>
<td>1</td>
<td>Baixa</td>
<td>5</td>
</tr>
<tr>
<th>Descrição</th>
<th>Tipo</th>
<th>DER</th>
<th>ALR</th>
<th>Complexidade</th>
<th>Contribuição</th>
</tr>
<tr>
<td>Cadastrar usuário</td>
<td>EE</td>
<td>12</td>
<td>2</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Atualizar usuário</td>
<td>EE</td>
<td>12</td>
<td>2</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Desativar usuário</td>
<td>EE</td>
<td>12</td>
<td>2</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Cadastrar compra</td>
<td>EE</td>
<td>5</td>
<td>2</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Atualizar compra</td>
<td>EE</td>
<td>5</td>
<td>2</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Cancelar compra</td>
<td>EE</td>
<td>5</td>
<td>2</td>
<td>Média</td>
<td>4</td>
</tr>
<tr>
<td>Relatório venda</td>
<td>CE</td>
<td>3</td>
<td>2</td>
<td>Baixa</td>
<td>3</td>
</tr>
<tr>
<td>Cadastrar livro</td>
<td>EE</td>
<td>5</td>
<td>1</td>
<td>Baixa</td>
<td>3</td>
</tr>
<tr>
<td>Atualizar livro</td>
<td>EE</td>
<td>5</td>
<td>1</td>
<td>Baixa</td>
<td>3</td>
</tr>
<tr>
<td>Excluir livro</td>
<td>EE</td>
<td>5</td>
<td>1</td>
<td>Baixa</td>
<td>3</td>
</tr>
<tr>
<td>Cadastrar comentário</td>
<td>EE</td>
<td>2</td>
<td>1</td>
<td>Baixa</td>
<td>3</td>
</tr>
<tr>
<td>Atualizar comentário</td>
<td>EE</td>
<td>2</td>
<td>1</td>
<td>Baixa</td>
<td>3</td>
</tr>
<tr>
<td>Excluir comentário</td>
<td>EE</td>
<td>2</td>
<td>1</td>
<td>Baixa</td>
<td>3</td>
</tr>
<tr>
<td>Visualizar comentário</td>
<td>CE</td>
<td>2</td>
<td>1</td>
<td>Baixa</td>
<td>3</td>
</tr>
<tr>
<td>Cadastra livro na lista de desejos</td>
<td>EE</td>
<td>1</td>
<td>1</td>
<td>Baixa</td>
<td>3</td>
</tr>
<tr>
<td>Remover livro da lista de desejos</td>
<td>EE</td>
<td>1</td>
<td>1</td>
<td>Baixa</td>
<td>3</td>
</tr>
<tr>
<td>Visualizar lista de desejos</td>
<td>CE</td>
<td>1</td>
<td>1</td>
<td>Baixa</td>
<td>3</td>
</tr>
</tbody>
<tfoot>
<tr>
<td><strong>Contagem detalhada</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><strong>97</strong></td>
</tr>
</tfoot>
</table>
