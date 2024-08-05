FROM node:22-alpine

EXPOSE 3333

COPY ./nodejs .

WORKDIR /

RUN npm install

CMD ["node", "app.js"]
