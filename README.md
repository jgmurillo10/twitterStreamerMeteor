# twitterStreamerMeteor

A simple boilerplate for a Meteor 1.4 Twitter streamer application with React. Uses the twitter [npm](https://www.npmjs.com/package/twitter) module for connecting to twitter. It requires you to setup your credentials on the server using environment variables:

```
export TWITTER_CONSUMER_KEY="yourCredentialsHere"
export TWITTER_CONSUMER_SECRET="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_KEY="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_SECRET="yourCredentialsHere"

meteor npm install
meteor
```

This is a very basic implementation that handles a global search shared by all users and doesn't implement any security or restriction. It's intended as a starting point, so add your own requirements.

Diferenciador Creativo:
- Estilos aplicados sobre la aplicación
- filtro para buscar no solo por la ubicación en sí, sino también por palabra + ubicación
- Visualización de los tweets no solo en el mapa sino al lado del mismo para ver el contenido, con un enlace directo a la cuenta de la persona que hizo el tweet
- filtro logico que descarga tweets que contengan el atributo location donde se descarta los países que comparten frontera con colombia para aumentar en porcentaje significativo la presición de los tweets de colombia
