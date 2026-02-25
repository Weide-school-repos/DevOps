FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install

ENV PORT=3000

ENV MONGO_URL=mongodb://localhost:27017/mydb

EXPOSE 3000

CMD ["npm", "start"]

