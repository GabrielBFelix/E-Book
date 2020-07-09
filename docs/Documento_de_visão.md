<h1> Documento de Visão</h1>
  
<h2> 1. Introdução</h2>
  <ul>
    <li>Este documento tem o objetivo de coletar, analisar e definir os requisitos do sistema Ebook, desde os requisitos não funcionais , assim como os funcionais também, buscamos entrar em acordo sobre como cada requisito irá impactar no projeto</li>
    <li>O Sistema a ser desenvolvido será um sistema de compras de livros, onde o usuário cadastrado poderá comprar livros que estão disponíveis, tais livros serão adicionados pelos próprios usuários, ou seja, os usuários terão opções de comprar / vender. </li>
    <li>O sistema irá gerar relatórios com o objetivo de manter o usuário informado sobre os tipos de transações que ele fez e mostrando informações sobre os livros que ele colocou a venda. </li>
  </ul>

<h2>Equipe e definição de papeis</h2>

<table>
  <thead>
    <tr>
      <th>Membro</th>
      <th>Papel</th>
      <th>Email</th>
    </tr>
  </thead>

  <tbody>
  <tr>
      <td>Darlan</td>
      <td>Analista</td>
      <td>darlan.acari@gmail.com</td>
    </tr>
    <tr>
      <td>Gabriel</td>
      <td>Gerente</td>
      <td>batistagabriel360@gmail.com</td>
    </tr>
    <tr>
      <td>Guilherme</td>
      <td>Analista</td>
      <td>guilherme.felipe149@gmail.com</td>
    </tr>
    <tr>
      <td>Antonio Fernandes</td>
      <td>Analista</td>
      <td>antoniofern.n@gmail.com</td>
    </tr>
    <tr>
      <td>Evandir</td>
      <td>Seu Papel</td>
      <td>Seu email</td>
    </tr>
    <tr>
      <td>Tiago</td>
      <td>Analista</td>
      <td>tiago_jvo@outlook.com</td>
    </tr>
  </tbody>
</table>

<h2>Matriz de Competências</h2>

  <table>
  <thead>
    <tr>
      <th>Membro</th>
      <th>Competências</th>
    </tr>
  </thead>

  <tbody>
  <tr>
      <td>Darlan</td>
      <td>Python, C/C++, Java, HTML, CSS, Django, SQL</td>
    </tr>
    <tr>
      <td>Gabriel</td>
      <td>Html, Css, Protractor, Jasmine, Espresso, Python, C, Django</td>
    </tr>
    <tr>
      <td>Guilherme</td>
      <td>Python, C, Java, HTML, CSS, JavaScript</td>
    </tr>
    <tr>
      <td>Antonio Fernandes</td>
      <td>HTML, CSS, Javascript, NodeJS</td>
    </tr>
    <tr>
      <td>Evandir</td>
      <td>Suas habilidades (Tecnologias que sabe)</td>
    </tr>
    <tr>
      <td>Tiago</td>
      <td>Html , Css , Js, Nodejs, React, Redux, Express , MongoDB</td>
    </tr>
  </tbody>
</table>

  <h2>2. Descrição geral </h2>
  <ul>
    <li><h3>Requisitos Funcionais :</h3>
      <table>
        <thead>
          <tr><th>Cod</th> <th>Nome</th> <th>Descrição</th></tr>
        </thead>
        <tbody>
        <tr><td>RF001</td><td>Operação de cadastrar usuários</td><td>Nessa operação o usuário se cadastrará no sistema</td></tr>
        <tr><td>RF002</td><td>Operação de atualizar perfil de usuário</td><td>Nessa operação o usuário terá a opção de atualizar seus dados que foram cadastrados no sistema</td></tr>
        <tr><td>RF003</td><td>Operação de desativar conta</td><td>Nessa operação o usuário poderá pedir o desativamento da sua conta</td></tr>
        <tr><td>RF004</td><td>Operação de visualizar usuários</td><td>Nessa operação os usuários poderão ver dados de outros usuários</td></tr>
        <tr><td>RF005</td><td>Operação de cadastrar livro</td><td>Nessa operação o usuário poderá cadastrar livros aos quais serão vendidos</td></tr>
        <tr><td>RF006</td><td>Operação de atualizar livro</td><td>Nessa operação o usuário poderá atualizar dados de livros que estão sendo vendidos</td></tr>
        <tr><td>RF007</td><td>Operação de excluir livro</td><td>Nessa operação o usuário poderá retirar um livro do estado de venda</td></tr>
        <tr><td>RF008</td><td>Operação de visualizar livro</td><td>Nessa operação o usuário irá ver detalhes mais especificos de um livro que está sendo vendido</td></tr>
        <tr><td>RF009</td><td>Operação de cadastrar endereço</td><td>Nessa operação o usuário irá cadastrar um endereço ao qual será utilizado para entrega de produtos</td></tr>
        <tr><td>RF010</td><td>Operação de atualizar endereço</td><td>Nessa operação o usuário poderá alterar os dados do endereço</td></tr>
        <tr><td>RF012</td><td>Operação de excluir endereço</td><td>Nessa operação o usuário terá o poder para excluir o endereço cadastrado pelo mesmo</td></tr>
        <tr><td>RF013</td><td>Operação de visualizar endereço</td><td>Nessa operação o usuário poderá ver o endereço cadastrado por ele</td></tr>
        <tr><td>RF014</td><td>Operação de cadastro categoria</td><td>Aqui o usuário irá cadastrar a categoria do livro ao qual ele irá vender</td></tr>
        <tr><td>RF015</td><td>Operação de atualização categoria</td><td>Aqui o usuário irá atualizar a categoria do livro ao qual ele irá vender</td></tr>
        <tr><td>RF016</td><td>Operação de excluir categoria</td><td>Exclui uma categoria do banco de dados.</td></tr>
        <tr><td>RF017</td><td>Operação de visualizar categoria</td><td>Mostra as características/atributos de uma categoria.</td></tr>
        <tr><td>RF018</td><td>Operação de cadastro vendas</td><td>Cadastra uma venda no banco de dados, que contêm todo o conjunto de itens adicionados pela compra.</td></tr>
        <tr><td>RF019</td><td>Operação de atualizar vendas</td><td>Um Usuário pode editar o conteúdo de uma venda antes de ser finalizada.</td></tr>
        <tr><td>RF020</td><td>Operação de cancelar vendas</td><td>Um Cliente pode cancelar uma venda antes de ser confirmada, fazendo com que seus dados sejam removidos do carrinho, no entanto, apenas um Admnistrador pode cancelar uma compra após ser confirmada por um Cliente.</td></tr>
        <tr><td>RF021</td><td>Operação de visualizar vendas</td><td>Mostra os atributos de uma venda, como produtos comprados, data, etc.</td></tr>
        <tr><td>RF022</td><td>Operação de cadastro compra</td><td>Cadastra uma compra de livro no banco de dados e a quantidade.</td></tr>
        <tr><td>RF023</td><td>Operação de atualizar compra</td><td>Um Usuário pode editar uma compra antes dela ser finalizada.</td></tr>
        <tr><td>RF024</td><td>Operação de cancelar compra</td><td>Um Cliente pode cancelar uma compra antes de ser confirmada, fazendo com que seus dados sejam removidos do carrinho, no entanto, apenas um Admnistrador pode cancelar uma compra após ser confirmada por um Cliente.</td></tr>
        <tr><td>RF025</td><td>Operação de visualizar compra</td><td>Um cliente pode usar essa operação para mostrar as características de uma compra realizada na sua conta.</td></tr>
        <tr><td>RF026</td><td>Geração de relatório de venda</td><td>Gera um documento com todos os dados de uma venda.</td></tr>
        <tr><td>RF027</td><td>Geração de relatório de compra</td><td>Gera um documento com todos os dados de uma compra.</td></tr>
        <tr><td>RF028</td><td>Autenticação de usuário</td><td>Operação realizada na hora do login para checar se os dados passados pelo usuário condizem com uma conta.</td></tr>
        <tr><td>RF029</td><td>Integração com algum sistema de pagamento</td><td>Integrar o site com uma api de pagamento que possa realizar as operações necessárias para realizar uma transação.</td></tr>
        <tr><td>RF030</td><td>Adicionar um livro a lista de desejos</td><td>Um Cliente pode salvar livros em uma lista de desejos para fácil visualização.</td></tr>
        <tr><td>RF031</td><td>Operação de cadastrar comentario</td><td>Nessa operação o usuário poderá cadastrar comentarios aos quais serão vendidos</td></tr>
        <tr><td>RF032</td><td>Operação de atualizar comentario</td><td>Nessa operação o usuário poderá atualizar seus comentarios</td></tr>
        <tr><td>RF033</td><td>Operação de excluir comentario</td><td>Nessa operação o usuário poderá apagar um comentario</td></tr>
        <tr><td>RF034</td><td>Operação de visualizar comentario</td><td>Nessa operação o usuário irá poder visualizar os comentarios</td></tr>
        <tr><td>RF035</td><td>Operação remover da lista de desejos<td>Nessa operação o usuário poderá remover um livro da lista de desejos</td></td></tr>
        <tr><td>RF036</td><td>Operação visualizar lista de desejos<td>Nessa operação o usuário poderá sua lista de desejos</td></td></tr>
        </tbody>
      </table>
    </li>
    <li><h3>Requisitos não funcionais</h3>
      <table>
        <thead>
          <tr><th>Cod</th><th>Nome</th><th>Descrição</th></tr>
        </thead>
        <tbody>
        <tr><td>RNF001</td><td>Perfomance</td><td>O sistema deve ser rápido, de maneira que não deixe o usuário esperando mais que 4 segundos dentro de uma tela travada</td></tr>
        <tr><td>RNF002</td><td>Usabilidade</td><td>O sistema deve oferecer uma experiência de utilização agradável em qualquer dispositivo, seja ele celular, tablet , computador ou notebook</td></tr>
        <tr><td>RNF003</td><td>Segurança</td><td>Os dados cadastrados no sistema devem permanecer seguros, de modo que o acesso a eles seja restrito a apenas ao usuário ou administrador</td></tr>
        <tr><td>RNF004</td><td>Confiabilidade</td><td>Certeza de que as informações serão repassadas da forma correta ao usuário e de que o sistema pode sustentar adversidades como ataques, quedas de energia, etc.</td></tr>
        <tr><td>RNF005</td><td>Eficiência</td><td>O sistema cumpre oque pede utilizando poucos recursos.</td></tr>
        <tr><td>RNF006</td><td>Interoperabilidade</td><td>O sistema pretende trocar dados de forma transparente com o banco de dados.</td></tr>
        </tbody>
      </table>
    </li>
  </ul>
  <h2>3. Perfis dos usuários</h2>
  <p>O sistema poderá ser utilizado por diversos usuários. Temos os seguintes perfis:</p>
  <dl>
    <dt>Administrador</dt>
    <dd>Este usuário administra e modera o aplicativo e seus usuários.</dd>
    <dt>Leitor</dt>
    <dd>Este usuário utiliza o sistema para comprar e ler livros.</dd>
    <dt>Vendedor</dt>
    <dd>Este usuário utiliza o sistema para publicar seus livros.</dd>
  </dl>
  <h2>4. Tabela de Riscos</h2>
<table>
  <tr>
    <th>Data</th>
    <th>Risco</th>
    <th>Prioridade</th>
    <th>Responsável</th>
    <th>Status</th>
    <th>Providência/Solução</th>
  </tr>
  <tr>
    <td>23/06/2020</td>
    <td>Falta do domínio tecnológico</td>
    <td>Alta</td>
    <td>Todos</td>
    <td>Vigente</td>
    <td>Planejar e reforçar os estudos das tecnologias utilizadas</td>
  </tr>
  <tr>
    <td>23/06/2020</td>
    <td>Falta de experiência dos desenvolvedores</td>
    <td>Alta</td>
    <td>Todos</td>
    <td>Vigente</td>
    <td>Estudar boas práticas para melhorar o trabalho e a comunicação da equipe</td>
  </tr>
  <tr>
    <td>23/06/2020</td>
    <td>Insatisfação do Cliente</td>
    <td>Alta</td>
    <td>Todos</td>
    <td>Vigente</td>
    <td>Fazer um bom trabalho de implementação, documentação e comunicação com o cliente</td>
  </tr>
  <tr>
    <td>23/06/2020</td>
    <td>Mudança de tecnologías</td>
    <td>Média</td>
    <td>Todos</td>
    <td>Vigente</td>
    <td>Sempre haver pessoas com diferentes conhecimentos em várias tecnologías</td>
  </tr>
</table>
