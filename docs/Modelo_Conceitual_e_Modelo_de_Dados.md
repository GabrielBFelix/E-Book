# Modelo Conceitual e Modelo de Dados

- 1 Introdução
  - 1.1 Descrição do Documento (para que serve esse documento?)
  - 1.2 Histórico de Revisões
- 2 Modelo Conceitual
  - 2.1 Descrição das Entidades
- 3 Modelo de Dados
- 4 Dicionário de Dados
- 5 Referências

# 1 Introdução

## 1.1 Descrição do Documento

Este documento tem como objetivo apresentar e detalhar o projeto E-Book, de forma que apoie a compreensão do seu desenvolvimento. Assim sendo, é possivel identificar como ocorre a comunicação entre as entidades, os tipos de dados que serão trabalhado e os tipos de funcionalidades necessárias para pleno funcionamento do software.

## 1.2 Histórico de Revisões

| Data | Versão | Descrição | Autor |
| ---- | ------ | --------- | ----- |
|      |        |           |       |

# 2 Modelo Conceitual

## 2.1 Descrição das Entidades

Usuário: Entidade que representará as pessoas que acessam o sistema. Além das próprias informações armazenadas, eles tem acesso a compra de livros que estão a venda.

Endereço: Entidade dependente de usuário, contendo informações de sua localização.

Livros: Produto que vai ser vendido, contendo as mais diversas informações necessarias para o comprador.

Compra: Entidade que vai estabelecer a relação entre o Usuario e o Livro que deseja comprar.

Venda: Entidade que vai estabelecer relação com a compra e suas informações.

Comentários: Entidade que vai estabelecer a relação entre usuário e livro e armazenar seus comentários.

# 3 Modelo de Dados

![imagem](https://github.com/antoniofern/E-Book/blob/master/docs/modelo_de_dados.PNG)

# 4 Dicionário de Dados

|   Tabela   | Nome da coluna | Tipo de dado | comprimento |  Restrições  |                              Descrição                             |
|:----------:|:--------------:|:------------:|:-----------:|:------------:|:------------------------------------------------------------------:|
|   Usuario  |     codigo     |      INT     |   4 bytes   | PK, NOT NULL |      Numero de verificação do usuário, gerado automaticamente      |
|            |      nome      |    VARCHAR   |   40 bytes  |              |                           Nome do usuário                          |
|            |      senha     |    VARCHAR   |   40 bytes  |              |                          Senha do usuário                          |
|            |      email     |    VARCHAR   |   40 bytes  |              |                          email do usuário                          |
|            |      ativo     |     BOOL     |    1 byte   |              |      Valor booleano para checar se o usuário ainda está ativo      |
|            |    vendedor    |     BOOL     |    1 byte   |              | Valor booleano para checar se o usuário tem permissões de vendedor |
|            |   permissoes   |              |             |              |                                                                    |
|  Endereço  |       id       |      INT     |   4 bytes   | PK, NOT NULL |      Numero de verificação do Endereço, gerado automaticamente     |
|            |      pais      |    VARCHAR   |   40 bytes  |              |                       Pais local do Endereço                       |
|            |       cep      |    VARCHAR   |   40 bytes  |              |                     CEP de onde o Usuário vive                     |
|            |     estado     |    VARCHAR   |   40 bytes  |              |                         Estado do Endereço                         |
|            |     bairro     |    VARCHAR   |   40 bytes  |              |                         Bairro do endereço                         |
|            |       rua      |    VARCHAR   |   40 bytes  |              |                           Rua do Endereço                          |
|            |    latitude    |              |             |              |                                                                    |
|            |    longitude   |              |             |              |                                                                    |
|   Compra   |       id       |      INT     |   4 bytes   | PK, NOT NULL |                      Chave primária da  compra                     |
|            |      preco     |      INT     |   4 bytes   |              |                        Valor total da compra                       |
|            |      data      |     DATE     |   3 bytes   |              |                           Data da compra                           |
|            |    desconto    |      INT     |   4 bytes   |              |                     Desconto aplicado a  compra                    |
|    Livro   |     codigo     |      INT     |   4 bytes   | PK, NOT NULL |       Numero de verificação do Livro, gerado automaticamente       |
|            |      nome      |    VARCHAR   |   40 bytes  |              |                           Titulo do livro                          |
|            |      autor     |    VARCHAR   |   40 bytes  |              |                           Autor do Livro                           |
|            |     editora    |    VARCHAR   |   40 bytes  |              |                          Editora do Livro                          |
|            |     genero     |    VARCHAR   |   40 bytes  |              |                     Gênero do livro em questão                     |
|            |   quantidade   |      INT     |   4 bytes   |              |                   Quantidade de livros no estoque                  |
|            |    vendedor    |      INT     |   4 bytes   |              |               Código do usuário que vendeu tal livro               |
| Comentario |       id       |      INT     |   4 bytes   | PK, NOT NULL |                 Número de verificação do comentário                |
|            |   comentario   |    VARCHAR   |  255 bytes  |              |                       Conteúdo do comentário                       |
|            |      data      |     DATE     |   3 bytes   |              |                 Data em que o comentário foi feito                 |
|    Venda   |       id       |      INT     |   4 bytes   | PK, NOT NULL |                   Número de verificação da venda                   |
|            |      preco     |      INT     |   4 bytes   |              |                        Valor total da Venda                        |
|            |      data      |     DATE     |   3 bytes   |              |                    Data em que a venda foi feita                   |
