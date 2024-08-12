FROM node:22-alpine

EXPOSE 8080

COPY ./nodejs .

WORKDIR /

RUN npm install

CMD ["node", "app.js"]
