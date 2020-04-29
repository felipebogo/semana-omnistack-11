# Portal e aplicação mobile Be-The-Hero - Semana-omnistack-11
Desenvolvimento do portal be-the-hero com backend em node.js, frontend em react, mobile com react native

O objetivo deste projeto é práticar o uso destas tecnologias em uma aplicação real.

Desenvolvido na Omnistack 11 realizada pela RocketSeat.

O projeto foi dividido em três pastas:
* Backend - onde está o backend da aplicação desenvolvido em nodejs
* frontend - onde está o frontend da plicação desenvolvido em reactjs
* mobile - onde está o aplicativo mobile desenvolvido com react native

## Instalação
### backend
Navegue até a pasta backend, instale as dependências e inicie o projeto:
```sh
$ cd .\backend\
$ npm install
$ npm start
```
O projeto vai iniciar na porta 3333
### frontend
Navegue até a pasta frontend, instale as dependências e inicie o projeto:
```sh
$ cd .\frontend\
$ npm install
$ npm start
```
O projeto vai iniciar no endereço http://localhost:3000/

### Aplicação mobile em react native com expo
Navegue até a pasta mobile, instale as dependências e inicie o projeto:
```sh
$ cd .\mobile\
$ yarn
$ yarn start
```
Para simular o aplicativo no celular será necessário realizar do download do aplicativo expo no celular e configurar o ip da sua placa de rede no arquivo src/api.js

Se for optar por simular na máquina será necessário realizar o download do Android Studio e criar uma emulação do android, neste caso pode ser utilizado o endereço localhost.
