FROM node:10.19.0

WORKDIR /app

COPY ./express-web/package*.json ./

RUN npm install

COPY . .

CMD ["npm" , "start"]