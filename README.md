## BarbecueOrganizer

Projeto de uma caculadora de churrasco, feito por:

#### Guilherme : 16 anos, nascido em São Paulo, Brasil

#### Henrique : 19 anos, nascido em São Paulo, Brasil

#### Giovanna : 17 anos, nascida em São Paulo, Brasil

#### Heitor : 18 anos, nascido em São Paulo, Brasil

![image](https://user-images.githubusercontent.com/99182729/202714356-c42cb681-983f-43e7-8f30-63df9ddf5256.png)

Barbecue Organizer é um aplicativo que busca calcular o preço/ratificação do seu churrasco da melhor forma possivel.
Esse projeto teve intuito em ajudar a criar churrasco com maior precisão para que assim não falte e nem sobre coisas do seu churrasco, ajudando você o mundo no processo

---Com o que foi feito:

Desenvolvido com a ajuda do GitHub Desktop para fazer a comunicação entre modificações do membros. Visual Studio Code como a plataforma para a escrita do codigo, sendo usado o Expo como executor.

---Como foi feito:

O trabalho foi feito em 3 semanas, sendo dividido entre o grupo a parte do Back-End e Front-End.
A Pesquisa de referencias foi a primeira parte feita pelos membros com o intuito de saber as dificuldades das pessoas com a situação. Levando isso em conta, a prototipagem começou, trabalhando com o Figma para tal tarefa, indo para o workflow, ou seja, a navegação entre as paginas. O cronograma foi feito, e com base nele começamos a por a mão na massa

O Back-End foi feito primeiro com a intenção de verificar se a logica que tinhamos ia dar certo, e felizmente deu. Logo atras estava o Font-End, que para ser mais produtivo e rapido, assim q termnação a logica de uma pagina ja estilizavam.

---Lógica dos Dados:

1-Recebe a quantidade  de pessoas: homens, mulheres e crianças.

2-Calcula o total de quilos de comida para o churrasco (com base nos parâmetros passados no pdf da  Sprint Backlog: 600 gramas de carne para cada homem, 400 gramas de carne para cada mulher e 250 gramas de carne para cada criança).

total de carne (kg) = (0.6 * homens) + (0.4 * mulheres) + (0.25 * crianças) 

3-Receber as carnes, bebidas e acompanhamentos escolhidos do cliente a partir de uma checkbox(true or false)

4-Colocar as informações do churrasco como: nome, organizador, local e custo do local.

5-Na página de resultados, o cliente estará vendo a quantidade de carne dividida para cada peça de acordo com o cálculo total de quilos de comida, assim como em bebidas e acompanhamentos. Além disso, serão exibidos os itens essenciais(carvão(1 para 1,5), descartáveis(quantidade de pessoas), acendedor(1)) para a realização do churrasco. Terá os valores baseados em uma média dos preços pesquisados no mercado. Sendo o valor total a soma de tudo(carne + bebida + acompanhamento + itens essenciais +custo do local). Sendo tudo armazenado no AssyncStorage

6-Em Meus Churrascos, vai puxar os dados do AssyncStorage por base do nome do churrasco.

7-Configuração de preço vai puxar o data original com os preços padrões, e vai ser modificado


---Como Clonar?

Para baixar, vá em Code, copie a HTPPS
Apos copiar o link, abra o seu Prompt de comando e entre no diretorio que você deseja clonar o codigo, usando o comando CD /(nome da pasta)
Digite git clone e cole a URL já copiada.

$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

Assim que a clonagem for concluida com o comando CD, entre no diretorio clonado e execute o comando

$ npm install

Para assim a pasta da node_modules seja instalada ao projeto

Passando disso o proximo codigo será com a ajuda do executor Expo(que deverá estar instalidao em sua maquina e aparelho movel)

$ expo start --tunnel

Escaneie o QRCode gerado com o seu celular. E então estará rodando no seu celular.



---Agradecimentos:
Agradecemos ao SENAI pelos ensinamentos para a realização do app. Iste trabalho foi uma proposta do professor Atila Olive e Sergio Gal, como forma de praticarmos a programação MOBILE.
