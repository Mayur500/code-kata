FROM node:18

WORKDIR /app

COPY server/package.json ./server/

RUN cd server && npm install

COPY server ./server/

COPY client/package.json ./client/

RUN cd client && npm install

COPY client ./client/

RUN cd client && npm run build

EXPOSE 3000

CMD ["node", "server/server.js"]
