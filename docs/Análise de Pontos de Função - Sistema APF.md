# Descrição do projeto
O Sistema a ser desenvolvido será um sistema de compras de livros, onde o usuário cadastrado poderá comprar livros que estão disponíveis, tais livros serão adicionados pelos próprios usuários, ou seja, os usuários terão opções de comprar / vender.
O sistema irá gerar relatórios com o objetivo de manter o usuário informado sobre os tipos de transações que ele fez e mostrando informações sobre os livros que ele colocou a venda.

# Siglas
PF - Pontos de Função
APF - Análise de Pontos de Função
ALI - Arquivos Lógicos Internos

# Lista de User Stories - US
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
- RF022 - Cadastrar compra
- RF023 - Atualizar compra
- RF024 - Cancelar compra
- RF025 - Visualizar compra

### User Story US06 - Manter Comentário
- RF031 - Cadastrar comentário
- RF032 - Atualizar comentário
- RF033 - Excluir comentário
- RF034 - Visualizar comentários

### User Story US07 - Relatórios
- RF026 - Gerar documento de venda
- RF027 - Geerar documento de compra  

# Tipos de Contagem

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
<td>Venda</td>
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