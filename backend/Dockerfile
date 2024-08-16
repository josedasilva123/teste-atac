FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run migrate:dev

EXPOSE 3001

CMD ["npm", "run", "dev"]