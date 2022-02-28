# docker-volume-and-network
Este repositorio esta enfocado en usar desarrollar un programa con Docker haciendo uso del Docker volume -Docker network.

Para correr este programa es necesario tener docker instalado en tu maquina junto con docker compose.



``
   PASO 1: En el directorio que contiene el docker-compose.yml, ejecutar el siguiente comando sudo docker-compose up &    
   NOTA: Si ya esta añadido docker al grupo sudo, el sudo en comando no sera necesario. docker compose crea las 2 network donde estara contectado los contenedores
``
<br>
``
PASO 2: Ejecutar este comando para la creacion del 3 contenedor: sudo docker run -it --name ubuntu_sh --network network2 ubuntu bash
NOTA: Si ya esta añadido docker al grupo sudo, el sudo en comando no sera necesario.
``


TECNOLOGIAS USADAS:
EXPRESS -> NODE
POSTGRESQL -> POSTGRES
UBUNTU --> UBUNTU
DOCKER --> DOCKER

Se uso express para conectar la base de datos que esta alojada en el contenedor que tiene la base de datos, para respresentarla en consola o atreves de la web localhost:3500, se uso ubuntu para ser el interprete de los comandos, por ultimo se uso la postgresql para modelar la base de datos. todas estas tecnologias alejodas en distintos comtenedores con docker.
